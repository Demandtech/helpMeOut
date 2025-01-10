import Header from "@/components/layouts/auth/Header";

function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default AuthLayout;
