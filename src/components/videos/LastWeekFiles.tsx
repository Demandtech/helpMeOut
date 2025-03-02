"use client";

import VideoReview from "./VideoReview";
import { VideoList } from "@/types/app";

function LastWeekFiles({ data }: { data: VideoList }) {
  return (
    <div>
      <h6 className="text-secondary font-medium text-lg mb-2">
        Files from last week
      </h6>
      <div className="grid lg:grid-cols-2 gap-10">
        {data.map((video, index) => (
          <VideoReview video={video} key={index} />
        ))}
      </div>
    </div>
  );
}

export default LastWeekFiles;
