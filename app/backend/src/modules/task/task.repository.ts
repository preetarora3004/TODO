import { Task } from "@workspace/app/db/db.js";

export class TaskRepository {
    async createTask(data: {
        title: string,
        description: string | null,
        userId: string,
        completeBy: Date
    }) {
        return await Task.create(data);
    }

    async getTaskByUserId(userId: string) {
        return await Task.find({
            userId
        }).lean();
    }

    async deleteTask(taskId: string) {
        return await Task.findByIdAndDelete({
            _id: taskId,
        })
    }

    async editTask(taskId: string, data: {
        title?: string,
        description?: string,
        completeBy?: Date
    }) {

        return await Task.findOneAndUpdate(
            {
                _id: taskId,
                status: { $ne: "COMPLETED" }
            },
            {
                $set: data
            },
            {
                new: true,
                runValidators: true
            }
        )
    }

    async markTaskComplete(taskId: string) {
        return await Task.findOneAndUpdate(
            {
                _id: taskId,
                status: { $ne: "COMPLETED" }
            },
            {
                $set: { status: "COMPLETED" }
            },
            {
                new: true,
                runValidators: true
            }
        )
    }
}

