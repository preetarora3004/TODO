export interface TaskSchema {
    title?: string,
    description?: string,
    completeBy?: Date
}

export interface taskCreationDTO {
    title: string,
    description: string | null,
    userId: string,
    completeBy: Date
}