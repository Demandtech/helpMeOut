"use client"

import React from "react";
import VideoReview from "./VideoReview";
import { VideoList } from "@/types/app";

function RecentFiles({ data }: { data: VideoList }) {
  return (
    <div>
      <h6 className="text-secondary font-medium text-lg mb-2">Recent files</h6>
      <div className="grid grid-cols-2 gap-10">
        {data.map((video, index) => (
          <VideoReview video={video} key={index} />
        ))}
      </div>
    </div>
  );
}

export default RecentFiles;
