import { z } from 'zod';

export const userSchema = z.object({
    name: z.string().min(1, { message: "Name should not be empty." }),
    email: z.string().email("This is not a valid email.")
});