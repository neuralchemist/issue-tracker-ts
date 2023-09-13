import { object, string } from "zod";

export const signupValidator = object({
  username: string({
    required_error: "is required",
    invalid_type_error: "must be of type string",
  })
    .min(6, "too short")
    .max(12, "too long"),

  email: string({
    required_error: "is required",
    invalid_type_error: "must be of type string",
  }).email("invalid format"),

  password: string({
    required_error: "is required",
    invalid_type_error: "must be of type string",
  }).min(6, "must have min 6 chars"),

  confirmPassword: string({
    required_error: "is required",
    invalid_type_error: "must be of type string",
  }).min(6, "must have min 6 chars"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "passwords do not match",
  path: ["confirmPassword"],
});
