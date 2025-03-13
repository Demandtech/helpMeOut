"use client";
import { useState, useRef } from "react";
import { Button, Tooltip } from "../ui";
import {
  PauseIcon,
  PlayIcon,
  MutedIcon,
  VolumeIcon,
  SettingIcon,
  PictureInPictureIcon,
  DownloadIcon,
} from "../svgs";

function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1.0);

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

  const togglePlaybackSpeed = () => {
    if (!videoRef.current) return;

    // Cycle through speeds: 1x → 1.5x → 2x → back to 1x
    const newSpeed =
      playbackRate === 1.0 ? 1.5 : playbackRate === 1.5 ? 2 : 1.0;
    setPlaybackRate(newSpeed);
    videoRef.current.playbackRate = newSpeed;
  };

  const openPictureInPicture = async () => {
    if (!videoRef.current) return;

    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else if (videoRef.current.requestPictureInPicture) {
      await videoRef.current.requestPictureInPicture();
    }
  };

  const downloadVideo = () => {
    if (!videoRef.current) return;

    const videoUrl = videoRef.current.src;
    const a = document.createElement("a");
    a.href = videoUrl;
    a.download = "video.mp4"; 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
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
            <Button
              isIconOnly
              size="sm"
              onPress={togglePlayPause}
              variant="light"
            >
              <div className="flex items-center flex-col">
                {isPlaying ? (
                  <PauseIcon className="stroke-[#939393]  group-hover:stroke-black transition-all" />
                ) : (
                  <PlayIcon className="stroke-[#939393]  group-hover:stroke-black transition-all" />
                )}
                {/* <span>{isPlaying ? "Pause" : "Play"}</span> */}
              </div>
            </Button>
          </Tooltip>
          <Tooltip content={isMuted ? "Unmute" : "Mute"}>
            <Button isIconOnly size="sm" onPress={toggleMute} variant="light">
              <div className="flex items-center flex-col">
                {isMuted ? (
                  <MutedIcon className="stroke-[#939393]  group-hover:stroke-black transition-all" />
                ) : (
                  <VolumeIcon className="stroke-[#939393]  group-hover:stroke-black transition-all" />
                )}

                {/* <span> Volume</span> */}
              </div>
            </Button>
          </Tooltip>
          <Tooltip content="Playback Speed">
            <Button
              isIconOnly
              onPress={togglePlaybackSpeed}
              size="sm"
              variant="light"
            >
              <div className="flex items-center flex-col">
                <span className="font-bold text-[#939393]  group-hover:text-black transition-all">
                  {playbackRate}x
                </span>
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
              <SettingIcon className="stroke-[#939393]  group-hover:stroke-black transition-all" />
            </Button>
          </Tooltip>
          <Tooltip content="Picture in Picture">
            <Button
              isIconOnly
              onPress={openPictureInPicture}
              size="sm"
              variant="light"
              className="group"
            >
              <PictureInPictureIcon className="stroke-[#939393]  group-hover:stroke-black transition-all" />
            </Button>
          </Tooltip>
          <Tooltip content="Download Video">
            <Button
              isIconOnly
              onPress={downloadVideo}
              size="sm"
              variant="light"
              className="group"
            >
              <DownloadIcon className="stroke-[#939393]  group-hover:stroke-black transition-all" />
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
