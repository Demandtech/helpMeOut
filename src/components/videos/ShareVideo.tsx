"use client";

import { useRef, useState } from "react";
import { Input, Button } from "../ui";
import { CopyIcon } from "../svgs";

export default function ShareVideo() {
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
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 py-10">
      <Input
        placeholder="Enter email of receiver"
        endContent={
          <Button size="sm" radius="sm" className="bg-[#605C84] text-white">
            Send
          </Button>
        }
        classNames={{
          inputWrapper: "h-[60px]",
        }}
        size="lg"
        radius="sm"
      />
      <Input
        isReadOnly
        ref={inputRef}
        className="bg-white"
        classNames={{
          inputWrapper: "h-[60px]",
        }}
        endContent={
          <Button onPress={handleCopy} size="sm" variant="bordered" radius="sm">
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
  );
}
