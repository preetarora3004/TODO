import z from 'zod';

export const taskCreationValidator = z.object({
    title: z.string(),
    completeBy: z.coerce.date(),
    description: z.string().nullable()
})

export const isValidTaskDetails = z.object({
    title: z.string().min(1).optional(),
    description: z.string().optional(),
    completeBy: z.coerce.date().optional()
})