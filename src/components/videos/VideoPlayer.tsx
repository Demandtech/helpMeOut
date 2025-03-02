"use client";
import { useState, useRef } from "react";
import { Button } from "../ui";

function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);

  const togglePlayPause = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setElapsedTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setTotalDuration(videoRef.current.duration);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setElapsedTime(0);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="lg:h-[473px] relative overflow-hidden border rounded-lg">
      <video
        ref={videoRef}
        className="w-full h-[calc(100%-80px)] object-cover"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleVideoEnd}
      />
      <div className="h-1 w-full">
        <div
          className="bg-primary h-full transition-all ease-linear"
          style={{ width: `${(elapsedTime / totalDuration) * 100}%` }}
        ></div>
      </div>
      <div className="h-14 lg:h-20 sticky flex justify-between items-center px-5">
        <div className="min-w-28 text-sm text-[#939393] font-inter font-medium">
          <span>{formatTime(elapsedTime)}</span> /{" "}
          <span>{formatTime(totalDuration)}</span>
        </div>
        <div className="flex">
          <Button size="sm" onPress={togglePlayPause} variant="light">
            <span>{isPlaying ? "Pause" : "Play"}</span>
          </Button>
          <Button size="sm" onPress={toggleMute} variant="light">
            <span>{isMuted ? "Unmute" : "Volume"}</span>
          </Button>
          <Button size="sm" variant="light">
            <span>Settings</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
