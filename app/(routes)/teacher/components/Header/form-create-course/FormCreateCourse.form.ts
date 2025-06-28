import { z } from "zod";

export const formSchema = z.object({
    courseName: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }).max(200),
    slug: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }).max(200),
})