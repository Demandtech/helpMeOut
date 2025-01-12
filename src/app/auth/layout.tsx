import { AuthHeader } from "@/components/layouts";

function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <AuthHeader />
      {children}
    </>
  );
}

export default AuthLayout;
