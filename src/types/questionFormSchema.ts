import { cities } from "@/lib/legalQueries/indianCities";
import { categoryValues } from "@/lib/legalQueries/queryCategories";
import { z } from "zod";

export const QuestionFormSchema = z.object({
  category: z.enum(categoryValues),
  city: z.string({ required_error: "Please provide your location" }),
  subject: z
    .string()
    .min(2, { message: "Subject should not be empty" })
    .max(100, { message: "Subject should not be greater than 100 characters" }),
  query: z
    .string()
    .min(2, { message: "Question should not be empty" })
    .max(300, {
      message: "Question should not be greater than 300 characters",
    }),
  name: z.string().min(1, { message: "Name should not be empty" }).optional(),
  email: z
    .string()
    .min(1, { message: "Email should not be empty" })
    .email()
    .optional(),
});
