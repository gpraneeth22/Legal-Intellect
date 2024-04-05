import { z } from "zod"

export const sendBotMessageValidator = z.object({
    chatId: z.string(),
    message: z.string()
})