import React, { Dispatch, SetStateAction, Key } from "react";
import { Listbox, ListboxItem, ListboxSection } from "@nextui-org/listbox";
import {
  ChevronDown,
  ChevronRight,
  Settings,
  Moon,
  QuestionMark,
  Logout,
} from "@/components/svgs";
import Avatar from "@/components/ui/Avatar";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import routes from "@/configs/routes";

function MenuDropdown({
  setOpenMenu,
  openMenu,
  subMenu,
  setSubMenu,
}: {
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  openMenu: boolean;
  subMenu: boolean;
  setSubMenu: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
    setSubMenu((prev) => !prev);
  };

  const handleSelectedAction = (key: Key) => {
    switch (key) {
      case "name":
        setSubMenu((prev) => !prev);
        break;
      case "logout":
        router.push(routes.auth);
        break;
      default:
        break;
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full z-40 backdrop-brightness-50"
      onClick={toggleMenu}
      initial={{ opacity: 0 }}
      animate={{ opacity: openMenu ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-full w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, height: 55 }}
          animate={{
            opacity: 1,
            scale: 1,
            height: subMenu ? 230 : 55,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, type: "spring" }}
          className="max-w-[200px] flex lg:max-w-[260px] w-full bg-white absolute right-3 lg:right-20 top-14 lg:top-20 rounded-lg overflow-hidden"
        >
          <Listbox
            classNames={{
              base: "p-0",
            }}
            aria-label="Actions"
            onAction={handleSelectedAction}
            className=""
          >
            <ListboxItem
              endContent={
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: subMenu ? 0 : -180 }}
                >
                  <ChevronDown />
                </motion.div>
              }
              startContent={
                <Avatar size="sm" className="min-w-5 min-h-5 lg:h-7 lg:w-7" />
              }
              key="name"
              className="border-b-2 rounded-none px-2 lg:px-5 py-3"
              textValue="John Mark"
            >
              <p className="min-w-[120px] text-xs lg:text-sm">John Mark</p>
            </ListboxItem>

            <ListboxSection>
              <ListboxItem
                startContent={<Settings />}
                endContent={<ChevronRight />}
                key="settings"
                className="rounded-none px-2 lg:px-5 py-2"
                textValue="Settings and Privacy"
              >
                <span className="text-xs">Settings and Privacy</span>
              </ListboxItem>
              <ListboxItem
                startContent={<Moon />}
                endContent={<ChevronRight />}
                key="display"
                className="rounded-none px-2 lg:px-5 py-2"
                textValue="Display and Accessibility"
              >
                <span className="text-xs">Display and Accessibility</span>
              </ListboxItem>
              <ListboxItem
                startContent={<QuestionMark />}
                endContent={<ChevronRight />}
                key="support"
                className="rounded-none px-2 lg:px-5 py-2"
                textValue="Help and Support"
              >
                <span className="text-xs"> Help and Support</span>
              </ListboxItem>
              <ListboxItem
                startContent={<Logout className="stroke-danger" />}
                key="logout"
                className="!text-danger rounded-none px-2 lg:px-5 py-2"
                textValue="Logout"
              >
                <span className="text-xs">Log Out</span>
              </ListboxItem>
            </ListboxSection>
          </Listbox>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default MenuDropdown;
