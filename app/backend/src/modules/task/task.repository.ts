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
        })
    }

    async deleteTask(taskId: string) {
        return await Task.findByIdAndDelete(taskId)
    }

    async editTask(taskId: string, data: {
        title?: string,
        description?: string,
        completeBy?: Date
    }) {

        const filteredData = Object.fromEntries(
            Object.entries(data).filter(([_, value]) => value !== undefined || value !== null)
        );

        return await Task.findByIdAndUpdate(
            {
                _id: taskId,
                status: { $ne: "COMPLETED" }
            },
            {
                $set: filteredData
            },
            {
                new: true,
                runValidators: true
            }
        )
    }

    async markTaskComplete(taskId: string) {
        return await Task.findByIdAndUpdate(
            taskId,
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

