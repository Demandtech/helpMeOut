"use client";
import { useState } from "react";
import Link from "next/link";
import routes from "@/configs/routes";
import { Video } from "@/types/app";
import { useRouter } from "next/navigation";

import { More, LinkIcon } from "../svgs";
import VideoImagePreview from "./VideoImagePreview";
import { Button, Input } from "@/components/ui";
import { Dropdown } from "../ui";

function VideoReview({ video }: { video: Video }) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);

  const handleSelectOption = (key: string) => {
    if (!key) return;

    switch (key) {
      case "view":
        router.push(routes.file(video.id));
        break;
      case "rename":
        setIsEdit(!isEdit);
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
        <div className="max-w-[400px] w-full">
        
          {!isEdit ? (
            <Link href={routes.file(video.id)} className="font-medium text-xl w-full h-12 block pt-2">
              {video?.title}
            </Link>
          ) : (
            <form className="w-full">
              <Input
                placeholder="Enter video name"
                labelPlacement="outside"
                size="lg"
                radius="sm"
                value={video?.title}
                className=""
                classNames={{
                  input: "text-xl font-medium text-primary-400",
                }}
                endContent={
                  <Button type="submit" size="sm" radius="sm" color="primary">
                    save
                  </Button>
                }
              />
            </form>
          )}
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
