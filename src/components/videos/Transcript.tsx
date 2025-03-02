import React from "react";

export default function VideoTranscript() {
  return (
    <div>
      <h6 className="mb-2">Transcript</h6>
      <select
        className="border rounded-[4px] px-1 h-12 min-w-[135px]"
        name="language"
        id="language"
        defaultValue={"english"}
      >
        <option value="english">English</option>
        <option value="french">French</option>
      </select>
      <div className="h-[360px] overflow-y-auto mt-10 flex flex-col gap-10">
        {transcripts.map((transcript, index) => (
          <div key={index} className="flex gap-5 lg:gap-10 lg:max-w-[90%]">
            <p className="text-sm lg:text-2xl leading-7 text-black">
              {transcript[0]}
            </p>
            <p className="text-xs lg:text-xl">{transcript[1]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const transcripts = [
  [
    "00:01",
    'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the ',
  ],
  [
    "00:15",
    'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the . Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-ha',
  ],
  [
    "00:30",
    'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the ',
  ],
  [
    "00:45",
    'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the . Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-ha',
  ],
];
