"use client";
import React from "react";
import Link from "next/link";
import routes from "@/configs/routes";
import { Video } from "@/types/app";
import { useRouter } from "next/navigation";

import { More, LinkIcon } from "../svgs";
import VideoImagePreview from "./VideoImagePreview";
import { Button } from "@nextui-org/button";
import { Dropdown } from "../ui";

function VideoReview({ video }: { video: Video }) {
  const router = useRouter();

  const handleSelectOption = (key: string) => {
    if (!key) return;

    switch (key) {
      case "view":
        router.push(routes.file(video.id));
        break;
      case "rename":
        break;
      case "delete":
        console.log("delete");
        break;
      default:
        break;
    }
  };
  return (
    <div className="p-3 bg-white border rounded-3xl">
      <VideoImagePreview className="min-h-52" img={video.img} time="00:34" />
      <div className="flex items-center justify-between  pt-5">
        <div className="w-full ">
          <Link href={routes.file(video.id)} className="font-medium text-xl">
            {video?.title}
          </Link>
        </div>

        <div className="flex items-center">
          <Button isIconOnly variant="light">
            <LinkIcon className="w-5 lg:w-6" />
          </Button>
          <div>
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

  {
    key: "delete",
    label: "Delete File",
  },
];

export default VideoReview;
