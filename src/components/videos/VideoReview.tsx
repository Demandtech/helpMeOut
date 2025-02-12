"use client";

import { Video } from "@/types/app";
import React, { useRef, useState } from "react";
import { More, LinkIcon } from "../svgs";
import Image from "next/image";

import { Dropdown, Input } from "../ui";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

function VideoReview({ video }: { video: Video }) {
  const router = useRouter();
  const [isReadOnly, setIsReadOnly] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleSelectOption = (key: string) => {
    if (!key) return;

    switch (key) {
      case "view":
        router.push("/repositories/private/files/videoId");
        break;
      case "rename":
        setIsReadOnly(false);
        // setTimeout(() => inputRef.current?.focus(), 0);
        inputRef.current?.focus();
        break;
      case "delete":
        console.log("delete");
        break;
      default:
        break;
    }
  };
  return (
    <div
      onClick={() => router.push("/repositories/private/files/:id")}
      className=" p-5 rounded-3xl shadow-md lg:shadow-xl hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer active:translate-y-1"
    >
      <div className="relative w-full min-h-[210px] rounded-xl overflow-hidden">
        <Image
          className="object-cover object-top"
          fill
          alt="Video alt play"
          src={video?.img}
          sizes="(max-width: 320px) 100vw, (max-width: 320px) 50vw, 33vw"
        />
      </div>
      <div className="flex items-center justify-between  pt-5">
        <div className="w-full ">
          <Input
            ref={inputRef}
            onClick={(e) => e.stopPropagation()}
            type="text"
            value={video?.title}
            className="w-full font-medium text-base lg:text-lg focus-within:border-none data-[rename=false]:outline-none"
            readOnly={isReadOnly}
            data-rename={`${!isReadOnly}`}
            autoFocus={!isReadOnly}
          />
        </div>

        <div className="flex items-center">
          <Button isIconOnly variant="light">
            <LinkIcon className="w-5 lg:w-6" />
          </Button>
          <Dropdown
            onSelect={handleSelectOption}
            items={items}
            triggerContent={
              <Button isIconOnly variant="light">
                <More className="w-5 lg:w-6" />
              </Button>
            }
          />
        </div>
      </div>
      <p className="text-secondary text-sm lg:text-base">{video?.date}</p>
    </div>
  );
}

const items = [
  {
    key: "view",
    label: "View File",
  },
  {
    key: "rename",
    label: "Rename File",
  },
  // {
  //   key: "edit",
  //   label: "Edit File",
  // },
  {
    key: "delete",
    label: "Delete File",
  },
];

export default VideoReview;
