export interface TaskSchema {
    title?: string,
    description?: string,
    completeBy?: Date,
    category?: string
}

export interface taskCreationDTO {
    title: string,
    description: string | null,
    category: string,
    userId: string,
    completeBy: Date
}