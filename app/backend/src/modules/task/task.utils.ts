import { TaskSchema } from "@workspace/app/backend/modules/task/task.types.js";

export class TaskUtils {
    groupByCategory(task: Array<Record<any, any>>) {

        const grouped = task.reduce((acc, item) => {
            if (!acc[item.category]) {
                acc[item.category] = [];
            }
            acc[item.category].push(item);

            return acc;
        }, {} as Record<string, typeof task[0][]>);

        return grouped;
    }

    markStatus(task: Array<Record<any, any>>) {
        const taskInfo = task.map((item) => ({
            ...item,
            status: new Date(item.completeBy).getTime() > Date.now() ? "PENDING" : "DUE"
        }))

        return taskInfo;
    }

    filteredTask(body: TaskSchema) {
        const filteredData = Object.fromEntries(
            Object.entries(body).filter(([_, value]) => value !== undefined)
        );

        return filteredData
    }
}