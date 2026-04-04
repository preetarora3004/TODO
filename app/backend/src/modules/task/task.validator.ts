import z from 'zod';

export const taskCreationValidator = z.object({
    title: z.string(),
    completeBy: z.coerce.date(),
    description: z.string().nullable()
})