import React from "react";
import Image from "next/image";

export default function VideoImagePreview({
  img,
  time,
  className,
}: {
  img: string;
  className: string;
  time: string;
}) {
  return (
    <div
      className={`${className} relative w-full rounded-xl border overflow-hidden border-primary-50`}
    >
      <Image
        fill
        alt="Video alt play"
        className="object-cover object-top"
        sizes="(max-width: 320px) 100vw, (max-width: 320px) 50vw, 33vw"
        src={img}
      />
      <div className="absolute bg-primary-50 bottom-3 right-3 px-4 py-2 rounded-md text-primary-900 font-medium text-sm font-sans">
        {time}
      </div>
    </div>
  );
}
