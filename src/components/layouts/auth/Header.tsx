"use client";

import { Logo, ChevronRight } from "@/components/svgs";
import { Button } from "@/components/ui";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();

  return (
    <header className=" lg:border-t-2 border-[#adadad] lg:mt-10">
      <div className="max-w-[1440px] mx-auto px-3 lg:px-20 flex items-center justify-between py-5">
        <div className="lg:pt-10">
          <Button
            onPress={() => router.push("/")}
            isIconOnly
            variant="light"
            className="justify-start lg:hidden"
          >
            <ChevronRight className="rotate-180" />
          </Button>
          <Link href="/" className="hidden lg:block">
            <Logo fill="var(--primary)" innerfill="var(--white)" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
