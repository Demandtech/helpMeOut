import { yup } from "@/configs/service";

export const authSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required!"),
  password: yup
    .string()
    .min(8, "Password must be atleast 8 character long")
    .matches(/[A-Z]/, "Password must include at least one uppercase letter")
    .matches(/[0-9]/, "Password must include at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must include at least one special character"
    )
    .required("Password is required"),
});

export type AuthFormData = yup.InferType<typeof authSchema>;
