import { z } from "zod";

export const CourseStatus = z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]);
export const CourseLevel = z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED"]);
export const courseCategories = [
  "Web Development",
  "Mobile Development",
  "Data Science",
  "Machine Learning",
  "Artificial Intelligence",
  "UI/UX Design",
  "Graphic Design",
  "Cyber Security",
  "Cloud Computing",
  "DevOps",
  "Programming Languages",
  "Game Development",
  "Business & Management",
  "Finance",
  "Marketing",
  "Photography",
  "Music",
  "Personal Development",
  "Health & Fitness",
  "Language Learning",
] as const;
export const CourseCategory = z.enum(courseCategories, "Category is required");
export const CourseSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required" })
    .max(50, { message: "Title must be under 50 characters" }),

  description: z
    .string()
    .min(1, { message: "Description is required" })
    .max(2000, { message: "Description is too long (max 2000 characters)" }),

  fileKey: z.string().min(1, { message: "File key is required" }),

  category: CourseCategory.optional().refine((val) => !!val, {
    message: "Category is required",
  }),

  price: z.coerce.number().min(1, { message: "Price must be greater than 0" }),

  level: CourseLevel.refine((val) => !!val, {
    message: "Level is required",
  }),

  duration: z.coerce
    .number()
    .min(1, { message: "Duration must be at least 1 hour" })
    .max(500, { message: "Duration cannot exceed 500 hours" }),

  smallDescription: z
    .string()
    .min(3, { message: "Short description is too short" })
    .max(200, { message: "Short description must be under 200 characters" }),

  slug: z
    .string({ message: "Slug is required" })
    .min(3, { message: "Slug must be at least 3 characters" })
    .regex(/^[a-z0-9-]+$/, {
      message: "Slug must contain only lowercase letters, numbers, and dashes",
    }),

  status: CourseStatus.refine((val) => !!val, {
    message: "Status is required",
  }),
});
// type inferred
export type Course = z.infer<typeof CourseSchema>;
