import { z } from "zod";

export const loginUserSchema = z.object({
  email: z.string().email().min(3),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export const registerUserSchema = loginUserSchema.merge(
  z.object({
    name: z.string().min(3),
    isAdmin: z.boolean().optional(),
  })
);

export const updateUserSchema = registerUserSchema.partial();

export const newCourseSchema = z.object({
  featuredImage: z.string(),
  title: z.string(),
  country:z.string(),
  skillset: z.string(),
  time:z.string(),
  companyname:z.string(),
  content: z.string(),
  gender:z.string(),
  salary:z.string()
});

export type LoginUserCredentialsDTO = z.infer<typeof loginUserSchema>;
export type RegisterUserCredentialsDTO = z.infer<typeof registerUserSchema>;
export type UpdateUserCredentialsDTO = z.infer<typeof updateUserSchema>;

export type NewCourseCredentialsDTO = z.infer<typeof newCourseSchema>;