"use client";

import { Logo } from "@/components/svgs";
import Link from "next/link";

function Header() {
  return (
    <header className="">
      <div className="max-w-[1440px] mx-auto px-3 lg:px-20 flex items-center justify-between py-5  border-t-2 mt-10 border-[#adadad]">
        <div className="lg:pt-10">
          <Link href="/">
            <Logo fill="var(--primary)" innerfill="var(--white)" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
