import * as z from "zod";

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/;

export const CreateUserValidator = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "email_cannot_be_empty" })
    .email({ message: "is_not_email" }),
  last_name: z
    .string({ message: "required" })
    .trim()
    .min(1, { message: "last_name_required" }),
  phone_number: z
    .string({ message: "required" })
    .trim()
    .min(1, { message: "phone_number_required" }),
  group: z.number({ message: "required" }).min(1, { message: "rule_required" }),
});

export const UpdateUserValidator = z.object({
  email: z.string().email().trim().min(1, { message: "email_required" }),
  last_name: z
    .string({ message: "required" })
    .trim()
    .min(1, { message: "last_name_required" }),
  phone_number: z
    .string({ message: "required" })
    .trim()
    .min(1, { message: "phone_number_required" }),
});

export const ChangePaswordValidator = z
  .object({
    old_password: z
      .string()
      .trim()
      .min(1, { message: "old_password_required" }),
    new_password: z
      .string()
      .trim()
      .min(8, { message: "new_password_min_length" })
      .regex(passwordPattern, {
        message: "password_must_include_uppercase_lowercase_number_special",
      }),

    confirm_password: z.string().trim(),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    message: "passwords_do_not_match",
    path: ["confirm_password"],
  });

export const GroupValidator = z.object({
  name: z
    .string({ message: "required" })
    .trim()
    .min(1, { message: "rule_required" }),
});

export type CreateUserType = {
  email: string;
  last_name: string;
  phone_number: string;
  group: string;
};

export type CreateUserType2 = {
  contributor: number;
  datas: CreateUserType;
};
