"use client";
import { useState, useRef } from "react";
import { Button, Tooltip } from "../ui";
import {
  PauseIcon,
  PlayIcon,
  MutedIcon,
  VolumeIcon,
  SettingIcon,
} from "../svgs";

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
      console.log(videoRef.current.duration);
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

  const toggleFullScreen = () => {
    if (!videoRef.current) return;

    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
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
        <Tooltip content="Elapsed Time / Total Duration">
          <div className="min-w-28 text-sm text-[#939393] font-inter font-medium">
            <span>{formatTime(elapsedTime)}</span> /{" "}
            <span>{formatTime(totalDuration)}</span>
          </div>
        </Tooltip>
        <div className="flex">
          <Tooltip content={isPlaying ? "Pause" : "Play"}>
            <Button size="sm" onPress={togglePlayPause} variant="light">
              <div className="flex items-center flex-col">
                {isPlaying ? <PauseIcon /> : <PlayIcon className="" />}
                <span>{isPlaying ? "Pause" : "Play"}</span>
              </div>
            </Button>
          </Tooltip>
          <Tooltip content={isMuted ? "Unmute" : "Mute"}>
            <Button size="sm" onPress={toggleMute} variant="light">
              <div className="flex items-center flex-col">
                {isMuted ? (
                  <MutedIcon className="stroke-black" />
                ) : (
                  <VolumeIcon className="stroke-black" />
                )}

                <span> Volume</span>
              </div>
            </Button>
          </Tooltip>
          <Tooltip content="Full Screen">
            <Button
              isIconOnly
              onPress={toggleFullScreen}
              size="sm"
              variant="light"
            >
              <SettingIcon className="stroke-black" />
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
