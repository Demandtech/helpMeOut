"use client";

import Image from "next/image";
import { SimpleRecording, EasyShare, RevisitRecording } from "../svgs";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Features() {
  const imageRef = useRef(null);
  const listRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true });
  const isListInView = useInView(listRef, { once: true });

  const transition = {
    duration: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
    stiffness: 100,
    type: "tween",
  };

  return (
    <section id="feature" className="my-10 bg-white py-10">
      <div className="px-3 lg:px-20 max-w-[1440px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-bold text-2xl lg:text-4xl text-black font-sora">
            Features
          </h2>
          <p className="text-secondary font-work text-base lg:text-xl">
            Key Highlights of Our Extension
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className=" col-span-1">
            <ul ref={listRef} className="space-y-8">
              {featuresList.map((feature, index) => (
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={isListInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: index * 0.2,
                    ...transition,
                  }}
                  key={index}
                  className="flex gap-2"
                >
                  <div>
                    <feature.icon className="w-8 h-8 lg:w-10 lg:h-10" />
                  </div>
                  <div>
                    <h4 className="font-semibold font-inter text-lg lg:text-2xl text-[#1b233d]">
                      {feature.title}
                    </h4>
                    <p className="text-secondary text-sm md:text-base lg:text-xl">
                      {feature.text}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isImageInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
            className="col-span-1 relative h-full flex-1 min-h-[200px] lg:min-h-auto"
            ref={imageRef}
          >
            <div>
              <Image
                fill
                alt="Feature"
                className="object-cover"
                sizes="(max-width: 320px) 100vw, (max-width: 320px) 50vw, 33vw"
                src="/assets/home/feature-img.webp"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const featuresList = [
  {
    title: " Simple Screen Recording",
    text: "Effortless screen recording for everyone. Record with ease, no tech expertise required.",
    icon: SimpleRecording,
  },
  {
    title: "Easy-to-Share URL",
    text: "Share your recordings instantly with a single link. No attachments, no downloads.",
    icon: EasyShare,
  },
  {
    title: " Revisit Recordings",
    text: "Access and review your past content effortlessly. Your recordings, always at your fingertips.",
    icon: RevisitRecording,
  },
];

export default Features;
