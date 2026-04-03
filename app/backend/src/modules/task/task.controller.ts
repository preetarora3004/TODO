import { Request, Response, NextFunction } from 'express';
import { ApiError } from '@workspace/app/backend/types/type.api.error.js';
import { TaskService } from '@workspace/app/backend/modules/task/task.service.js';
import { taskCreationValidator } from '@workspace/app/backend/modules/task/task.validator.js';

const service = new TaskService();

export class TaskController {
    async createTask(req: Request, res: Response, next: NextFunction) {
        try {
            const parsed = taskCreationValidator.safeParse(req.body);

            if (!parsed.success) {
                throw new ApiError(400, "Invalid schema")
            }

            const task = await service.createTask({
                ...parsed.data,
                userId: req.user!.id
            })

            return res.status(201).json({
                success: true,
                data: {
                    title: task.title,
                    description: task.description,
                    status: task.status,
                    completeBy: task.completeBy
                }
            })

        }
        catch (err) {
            next(err);
        }
    }

    async getTaskByUserId(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.user!.id;

            if (!userId) {
                throw new ApiError(400, "Invalid Id")
            }

            const task = await service.getTaskByUserId(userId);

            if (!task || task.length < 0) {
                throw new ApiError(400, "No task created")
            }

            return res.status(200).json({
                success: true,
                data: {
                    task
                }
            })
        }
        catch (err) {
            next(err);
        }
    }
}