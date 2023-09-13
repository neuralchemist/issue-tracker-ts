import { object, string } from "zod";

export const signinValidator = object({
  email: string({
    required_error: "is required",
    invalid_type_error: "must be of type string",
  }).email("invalid format"),
  password: string({
    required_error: "is required",
    invalid_type_error: "must be of type string",
  }).min(6, "must have min 6 chars"),
});
