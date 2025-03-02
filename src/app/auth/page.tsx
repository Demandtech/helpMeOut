"use client";

import { useState } from "react";
import {
  Mail,
  Facebook,
  Google,
  EyeFilled,
  EyeSlashFilled,
} from "@/components/svgs";
import { Button, Input } from "@/components/ui";
import { useRouter } from "next/navigation";
import { useForm, yupResolver } from "@/configs/service";
import { authSchema, AuthFormData } from "@/schemas/auth";
import Link from "next/link";
import routes from "@/configs/routes";

export default function LoginPage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>({ resolver: yupResolver(authSchema) });

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleAuthentication = (data: AuthFormData) => {
    if (data) {
      console.log(data);
      router.push(routes.recent_files);
    }
  };

  return (
    <main>
      <div className="max-w-[1440px] mx-auto px-3 lg:px-20">
        <div className="max-w-[475px] mx-auto">
          <div className="text-center mb-7 inline-block">
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-black leading-10 mb-2">
              Log in or Sign up
            </h2>

            <span className="text-[#434343] text-sm lg:text-base">
              Join millions of others in sharing successful moves on HelpMeOut.
            </span>
          </div>
          <div className="mb-10 space-y-5">
            <div>
              <Button
                radius="sm"
                size="lg"
                variant="bordered"
                className="w-full text-sm lg:text-base"
              >
                <Google /> Continue with Google
              </Button>
            </div>
            <div>
              <Button
                radius="sm"
                size="lg"
                variant="bordered"
                className="w-full text-sm lg:text-base"
              >
                <Facebook /> Continue with Facebook
              </Button>
            </div>
          </div>
          <div className="border-t-2 border-[#b9c2c8] relative w-10/12  mx-auto">
            <span className="bg-white absolute left-1/2 -translate-x-1/2 w-10 -top-[15px] text-center text-[#b9c2c8]">
              or
            </span>
          </div>
          <form onSubmit={handleSubmit(handleAuthentication)} className="">
            <div className="my-10 flex flex-col gap-5">
              <Input
                placeholder="Enter a valid email"
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
              <div>
                <Input
                  label="Password"
                  labelPlacement="outside"
                  placeholder="Enter your email"
                  size="lg"
                  variant="bordered"
                  radius="sm"
                  type={isVisible ? "text" : "password"}
                  {...register("password")}
                  errorMessage={errors.password?.message}
                  isInvalid={!!errors.password}
                  endContent={
                    <button
                      aria-label="toggle password visibility"
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <EyeSlashFilled className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilled className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                />
                <div className="text-right pt-1 text-primay font-semibold text-xs link-hover">
                  <Link href="/auth/forgot-password">Forgot password?</Link>
                </div>
              </div>
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
