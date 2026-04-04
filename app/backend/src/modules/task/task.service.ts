import { taskCreationDTO } from "@workspace/app/backend/modules/task/task.types.js";
import { TaskRepository } from "@workspace/app/backend/modules/task/task.repository.js";

export class TaskService {
    private repo = new TaskRepository();

    async createTask(data: taskCreationDTO) {
        return this.repo.createTask(data);
    }

    async getTaskByUserId(userId: string) {
        return this.repo.getTaskByUserId(userId);
    }

    async deleteTaskByTaskId(taskId: string) {
        return this.repo.deleteTask(taskId);
    }

    async markTaskCompleted(taskId: string) {
        return this.repo.markTaskComplete(taskId);
    }
}