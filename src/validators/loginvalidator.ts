import * as z from "zod";

export const LoginValidator = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "email_cannot_be_empty" })
    .email({ message: "is_not_email" }),
  password: z.string().trim().min(1, { message: "password_required" }),
});

export const MailValidator = z.object({
  email: z
    .string()
    .email({ message: "invalid_email_address" })
    .trim()
    .min(1, { message: "required" }),
});

export const ResetPasswordValidator = z
  .object({
    password: z
      .string()
      .min(8, { message: "minimum_8_characters" })
      .max(255, { message: "too_long" })
      .trim(),
    confirm_password: z.string({ message: "required" }),
  })
  .superRefine(({ password, confirm_password }, ctx) => {
    if (password !== confirm_password) {
      ctx.addIssue({
        code: "custom",
        message: "passwords_must_match",
        path: ["confirm_password"], // Attach error to confirm_password field
      });
    }
  });
