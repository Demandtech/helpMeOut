"use client";
import { Logo } from "@/components/svgs";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();

  return (
    <header className=" border-b-2 border-[#adadad]">
      <div className="max-w-[1440px] mx-auto px-3 lg:px-20 flex items-center justify-between py-5">
        <div>
          <Link href="/">
            <Logo fill="var(--primary)" innerfill="var(--white)" />
          </Link>
        </div>
        <nav className="lg:block hidden">
          <ul className="flex gap-10 font-medium text-black">
            <li>
              <Link href="#feature">Feature</Link>
            </li>
            <li>
              <Link href="#howitworks">How It Works</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Button
            variant="light"
            color="primary"
            className="font-semibold px-0 lg:px-5"
            size="lg"
            radius="none"
            onPress={() => {
              console.log("Get Started");
              router?.push("/auth/login");
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
