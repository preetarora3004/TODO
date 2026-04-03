import z from 'zod';

export const isValidUserCreationInput = z.object({
    name: z.string().min(5),
    username: z.email(),
    password: z.string().min(8)
})

export const isValidUserSessionInput = z.object({
    username: z.email(),
    password: z.string()
})

