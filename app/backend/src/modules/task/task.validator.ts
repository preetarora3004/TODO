import z from 'zod';

export const taskCreationValidator = z.object({
    title: z.string(),
    description: z.string().nullable(),
    completeBy: z.date()
})