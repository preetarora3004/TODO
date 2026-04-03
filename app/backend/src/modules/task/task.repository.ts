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
}

