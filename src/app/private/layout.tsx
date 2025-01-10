import Header from "@/components/layouts/private/Header";

function PrivateLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default PrivateLayout;
