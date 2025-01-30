"use client";

import { Video } from "@/types/app";
import React from "react";
import { More, LinkIcon } from "../svgs";
import Image from "next/image";
import Link from "next/link";

import { Dropdown } from "../ui";
import { Button } from "@nextui-org/button";

function VideoReview({ video }: { video: Video }) {
  return (
    <div className=" p-5 rounded-3xl shadow-md lg:shadow-xl hover:shadow-md transition-all duration-300 ease-in-out cursor-crosshair">
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
        <Link
          href="/repositories/private/files/:id"
          className="font-medium text-base lg:text-lg"
        >
          {video?.title}
        </Link>
        <div className="flex items-center">
          <Button isIconOnly variant="light">
            <LinkIcon className="w-5 lg:w-6" />
          </Button>
          <Dropdown
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
