import Link from "next/link";
import React from "react";
import { Button } from "../ui";
import routes from "@/configs/routes";

function SaveVideo() {
  return (
    <div className="bg-primary-50 py-10">
      <div className="flex text-center flex-col items-center justify-center gap-5 lg:gap-10 lg:max-w-[600px] mx-auto px-3">
        <h3 className="text-base lg:text-xl text-black font-semibold font-sora">
          To ensure the availability and privacy of your video, we recommend
          saving it to your account.
        </h3>
        <Button radius="sm" color="primary">
          Save video
        </Button>
        <p className="font-semibold text-sm lg:text-lg">
          <span className="opacity-50">Don’t have an account? </span>
          <Link className="text-primary" href={routes.auth}>
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SaveVideo;
