import { PrivateHeader } from "@/components/layouts";

function PrivateLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <PrivateHeader />
      {children}
    </>
  );
}

export default PrivateLayout;
