import z from 'zod';

export const formSchema = z.object({
    title: z.string().min(2, {
        message: "Title must be at least 2 characters.",
    }).max(200),
    slug: z.string().min(2, {
        message: "Slug must be at least 2 characters.",
    }).max(200),
    description: z.string().min(2, {
        message: "Slug must be at least 2 characters."
    }).max(500).optional().or(z.literal("")),
    category: z.string().min(2, {
        message: "Category must be at least 2 characters.",
    }).max(200),
    level: z.string().min(2, {
        message: "Level must be at least 2 characters.",
    }).max(200),
})