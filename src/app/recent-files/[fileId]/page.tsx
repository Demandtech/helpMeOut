"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { EditIcon } from "@/components/svgs";
import { Button, Input } from "@/components/ui";

import {
  ShareVideoToSocial,
  VideoTranscript,
  ShareVideo,
  VideoImagePreview,
} from "@/components/videos";
import routes from "@/configs/routes";

function SingleFile() {
  const [canShare, setCanShare] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    console.log(navigator.share);
    setCanShare(!!navigator.share);
  }, []);

  return (
    <div className="container pt-5">
      <div className="text-black font-sans my-6 text-xs lg:text-base">
        <Link
          className="text-black opacity-70 hover:opacity-100"
          href={routes.home}
        >
          Home / {""}
        </Link>
        <Link
          className="text-black opacity-70 hover:opacity-100"
          href={routes.recent_files}
        >
          Recent files {""}
        </Link>
        <span className="text-primary-400 font-medium">
          / How To Create A Facebook Ad Listing
        </span>
      </div>
      <div>
        <div className="flex items-center gap-6 mb-6 max-w-[600px]">
          {!isEdit ? (
            <p className="text-black font-semibold text-sm lg:text-2xl font-sora w-full h-[48px] pt-2">
              How To Create A Facebook Ad Listing
            </p>
          ) : (
            <form className="w-full">
              <Input
                placeholder="Enter video name"
                labelPlacement="outside"
                size="lg"
                radius="sm"
                value={"How To Create A Facebook Ad Listing ".trim()}
                className=""
                classNames={{
                  input: "text-2xl font-medium text-primary-400",
                }}
                endContent={
                  <Button type="submit" size="sm" radius="sm" color="primary">
                    save
                  </Button>
                }
              />
            </form>
          )}
          <Button onPress={() => setIsEdit(!isEdit)} isIconOnly variant="light">
            <EditIcon />
          </Button>
        </div>
        <div className="space-y-5">
          <div className="border p-3 rounded-3xl">
            <VideoImagePreview
              className="min-h-[200px] lg:min-h-[498px]"
              img="/sample1.png"
              time="00:34"
            />
          </div>
          <VideoTranscript />
          <ShareVideo />
          {canShare && <ShareVideoToSocial url="video Url" />}
        </div>
      </div>
    </div>
  );
}

export default SingleFile;
