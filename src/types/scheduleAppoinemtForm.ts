import { z } from "zod";
import { categoryValues } from "@/lib/legalQueries/queryCategories";
import { cities } from "@/lib/legalQueries/indianCities";

export const ScheduleAppointmetSchema = z.object({
  category: z.enum(categoryValues),
  city: z.enum(cities),
  lawyer: z.string().min(1, { message: "Please select a Lawyer" }),
  subject: z.string().min(1, { message: "Subject should not be empty" }),
  mobile: z
    .string()
    .min(1, { message: "Mobile number is required" })
    .max(10, "Invalid number"),
  date: z.coerce.date({ description: "Please select a date" }),
});
