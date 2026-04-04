export interface TaskSchema {
    title?: string,
    description?: string,
    status?: "PENDING" | "COMPLETED" | "DUE",
    completeBy?: Date
}

export interface taskCreationDTO {
    title: string,
    description: string | null,
    userId: string,
    completeBy: Date
}