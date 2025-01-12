"use client";

import { Input, Button } from "@/components/ui";
import { authSchema, AuthFormData } from "@/schemas/auth";
import { useRouter } from "next/navigation";
import { useForm, yupResolver } from "@/configs/service";
import { Mail } from "@/components/svgs";

function ForgotPasswordPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>({ resolver: yupResolver(authSchema) });

  const handleAuthentication = (data: AuthFormData) => {
    if (data) {
      console.log(data);
      router.push("/private/videos");
    }
  };

  return (
    <main>
      <div className="max-w-[1440px] mx-auto px-3 lg:px-20">
        <div className="max-w-[475px] mx-auto">
          <div className="text-center mb-7 inline-block">
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-black leading-10 mb-2">
              Forgot Password
            </h2>

            <span className="text-[#434343] text-sm lg:text-base">
              Password reset link will be sent to your email if the email is
              registered
            </span>
          </div>

          <form onSubmit={handleSubmit(handleAuthentication)} className="">
            <div className="my-10 flex flex-col gap-5">
              <Input
                placeholder="Enter your registered email"
                labelPlacement="outside"
                label="Email"
                size="lg"
                variant="bordered"
                radius="sm"
                type="text"
                {...register("email")}
                errorMessage={errors.email?.message}
                isInvalid={!!errors.email}
                endContent={
                  <Mail className="text-2xl text-default-400 pointer-events-none" />
                }
              />
            </div>
            <Button
              radius="sm"
              type="submit"
              className="w-full"
              color="primary"
              size="lg"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default ForgotPasswordPage;
