"use client";

import { Logo, ChevronDown } from "@/components/svgs";
import Button from "@/components/ui/Button";
import Avatar from "@/components/ui/Avatar";
import Link from "next/link";

import { useState } from "react";
import MenuDropdown from "./MenuDropdown";
import routes from "@/configs/routes";

function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);

  return (
    <header className="">
      <div className="max-w-[1440px] mx-auto px-3 lg:px-20 flex items-center justify-between py-5  border-t-2 mt-10 border-[#adadad]">
        <div className="lg:pt-5 flex justify-between w-full">
          <div>
            <Link href={routes.home}>
              <Logo fill="var(--primary)" innerfill="var(--white)" />
            </Link>
          </div>
          <div>
            <div className="flex items-center">
              <Button
                startContent={<Avatar />}
                onPress={() => {
                  setOpenMenu(true);
                  setOpenSubMenu(true);
                }}
                variant="light"
                endContent={<ChevronDown />}
                className="px-0"
                type="button"
              >
                <span>John Mark</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {openMenu && (
        <MenuDropdown
          subMenu={openSubMenu}
          setSubMenu={setOpenSubMenu}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
      )}
    </header>
  );
}

export default Header;
