"use client";

import { EditIcon } from "@/components/svgs";
import { Button, Input } from "@/components/ui";
import { SaveVideo, ShareVideoToSocial } from "@/components/videos";
import { Transcript, VideoPlayer } from "@/components/videos";
import { useRef, useState } from "react";
import { CopyIcon } from "@/components/svgs";

function SingleFile() {
  const [isEdit, setIsEdit] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const [buttonText, setButtonText] = useState("Copy URL");

  const handleCopy = () => {
    if (inputRef.current) {
      navigator.clipboard.writeText(inputRef.current.value).then(() => {
        setButtonText("Copied!");
        setTimeout(() => setButtonText("Copy URL"), 10000);
      });
    }
  };

  return (
    <div className="py-10">
      <div className="container grid grid-cols-1 lg:grid-cols-2 mb-10">
        <section className="col-span-1 lg:pr-20">
          <div>
            <h1 className="text-black leading-[56px] font-bold text-3xl lg:text-4xl font-sora mb-7">
              {" "}
              Your video is ready!{" "}
            </h1>
            <form>
              <div>
                <label className="text-[#727272]  font-semibold text-lg">
                  Name
                </label>

                <div className="flex gap-5 items-center w-full lg:max-w-[80%]">
                  {!isEdit ? (
                    <p className="text-lg h-12 pt-2.5 w-full font-medium text-primary-400">
                      Untitled_Video_20232509
                    </p>
                  ) : (
                    <Input
                      placeholder="Enter video name"
                      labelPlacement="outside"
                      size="lg"
                      radius="sm"
                      value={"Untitled_Video_20232509 ".trim()}
                      className=""
                      classNames={{
                        input: "text-lg font-medium text-primary-400",
                      }}
                    />
                  )}
                  <Button
                    onPress={() => setIsEdit(!isEdit)}
                    variant="light"
                    isIconOnly
                  >
                    <EditIcon />
                  </Button>
                </div>
              </div>
            </form>
            <div className="flex flex-col gap-5 lg:gap-10 py-10">
              <Input
                placeholder="Enter email of receiver"
                endContent={
                  <Button
                    size="sm"
                    radius="sm"
                    className="bg-[#605C84] text-white"
                  >
                    Send
                  </Button>
                }
                classNames={{
                  inputWrapper: "h-[60px]",
                }}
                size="lg"
                radius="sm"
              />
              <div>
                <label
                  className="font-sora text-lg text-black font font-medium block mb-2"
                  htmlFor="video-url"
                >
                  Video Url
                </label>
                <Input
                  id="video-url"
                  isReadOnly
                  ref={inputRef}
                  className="bg-white"
                  classNames={{
                    inputWrapper: "h-[60px]",
                  }}
                  endContent={
                    <Button
                      onPress={handleCopy}
                      size="sm"
                      variant="bordered"
                      radius="sm"
                    >
                      <CopyIcon />
                      {buttonText}
                    </Button>
                  }
                  placeholder=""
                  value={"https://www.helpmeout/Untitled_Video_20232509"}
                  size="lg"
                  variant="bordered"
                  radius="sm"
                />
              </div>
            </div>
            <div className="hidden lg:block">
              <ShareVideoToSocial url="https://www.helpmeout/Untitled_Video_20232509" />
            </div>
          </div>
        </section>
        <section className="col-span-1 lg:border-l-2 lg:pl-10 space-y-10">
          <VideoPlayer />

          <Transcript />
          <div className=" lg:hidden">
            <ShareVideoToSocial url="https://www.helpmeout/Untitled_Video_20232509" />
          </div>
        </section>
      </div>
      <SaveVideo />
    </div>
  );
}

export default SingleFile;
