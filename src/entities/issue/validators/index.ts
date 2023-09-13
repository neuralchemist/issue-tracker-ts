import { object, string } from "zod";

export const issueValidator = object({
  title: string({
    invalid_type_error: "must be of type string",
  })
    .nonempty("required")
    .max(100, "too long"),

  description: string({
    invalid_type_error: "must be of type string",
  })
    .nonempty("required")
    .max(400, "too long"),

  priority: string().nonempty("required"),

  assigned_id: string({
    invalid_type_error: "must be of type string",
  }).nonempty("required"),
});

