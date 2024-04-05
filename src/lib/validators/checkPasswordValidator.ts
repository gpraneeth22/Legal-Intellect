import { z } from "zod";

export const checkPasswordValidator = z.object({
    password: z.string()
})