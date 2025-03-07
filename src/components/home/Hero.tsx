"use client";

import React from "react";
import { Button } from "../ui";
import { Arrow } from "../svgs";
import Image from "next/image";
import { motion } from "framer-motion";

function Hero() {
  const transition = {
    duration: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
    stiffness: 100,
    type: "tween",
  };

  return (
    <section className="bg-white">
      <div className="flex flex-col-reverse lg:flex-row gap-5 lg:gap-0 py-10 px-3 lg:px-20 lg:py-20 items-center max-w-[1440px] mx-auto">
        <div className="lg:max-w-[50%] flex flex-col gap-5">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={transition}
            className="font-bold text-black text-4xl lg:text-6xl font-sora"
          >
            Show Them
            <br />
            Don’t Just Tell
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, ...transition }}
            className="text-sm lg:text-xl opacity-75 font-inter"
          >
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </motion.p>
          <motion.div
            className="overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: 220 }}
            transition={{ delay: 1, ...transition }}
          >
            <Button
              endContent={
                <div
                  className="flex w-5 overflow-hidden
                "
                >
                  <div className="group-hover:-translate-x-[100%] transition-all duration-300">
                    <Arrow />
                  </div>
                  <div className="group-hover:-translate-x-[100%] transition-all duration-300">
                    <Arrow />
                  </div>
                </div>
              }
              size="lg"
              radius="sm"
              color="primary"
              className="group text-sm lg:text-base font-work"
            >
              Install HelpMeOut
            </Button>
          </motion.div>
        </div>
        <div className="lg:max-w-[50%] w-full flex items-center h-[300px] lg:h-[500px] relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transition}
            className="absolute top-0 right-0"
            style={{
              background: "url(assets/home/hero-bg-top.webp) no-repeat",
              backgroundSize: "cover",
              height: "51%",
              width: "45%",
            }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, ...transition }}
            className="absolute bottom-0 left-0 "
            style={{
              background: "url(assets/home/hero-bg-bottom.webp) no-repeat",
              backgroundSize: "cover",
              height: "51%",
              width: "45%",
            }}
          />
          <div className="grid grid-cols-2 grid-rows-2 gap-3 lg:gap-5 w-full h-full max-w-[88%] max-h-[80%] m-auto bg-hero-top">
            <motion.div
              initial={{ x: -20, y: -20, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.25, ...transition }}
              className="row-span-1 col-span-1 relative h-full overflow-hidden rounded-lg lg:rounded-xl"
            >
              <Image
                fill
                alt="An elderly woman focusing on the laptop screen"
                className="w-[50px] h-full object-cover object-center"
                sizes="(max-width: 320px) 100vw, (max-width: 320px) 50vw, 33vw"
                src="/assets/home/img1.webp"
              />
            </motion.div>
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={transition}
              className="row-span-2 relative col-span-1 h-full overflow-hidden rounded-xl"
            >
              <Image
                fill
                alt="A lady concentrate on her phone"
                sizes="(max-width: 320px) 100vw, (max-width: 320px) 50vw, 33vw"
                className="w-full h-full object-cover object-center"
                src="/assets/home/img3.webp"
              />
            </motion.div>
            <motion.div
              initial={{ x: -20, y: 20, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ ...transition, delay: 0.5 }}
              className="row-span-1 relative col-span-1 h-full rounded-xl overflow-hidden"
            >
              <Image
                fill
                alt="A man showing a younger boy something on the laptop screen"
                className="w-full h-full object-cover object-center"
                sizes="(max-width: 320px) 100vw, (max-width: 320px) 50vw, 33vw"
                src="/assets/home/img2.webp"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
