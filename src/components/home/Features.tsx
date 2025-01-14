import Image from "next/image";
import { SimpleRecording, EasyShare, RevisitRecording } from "../svgs";

function Features() {
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
            <ul className="space-y-8">
              <li className="flex gap-2">
                <div>
                  <SimpleRecording className="w-8 h-8 lg:w-10 lg:h-10" />
                </div>
                <div>
                  <h4 className="font-semibold font-inter text-lg lg:text-2xl text-[#1b233d]">
                    Simple Screen Recording
                  </h4>
                  <p className="text-secondary text-sm md:text-base lg:text-xl">
                    Effortless screen recording for everyone. Record with ease,
                    no tech expertise required.
                  </p>
                </div>
              </li>
              <li className="flex gap-2">
                <div>
                  <EasyShare className="w-8 h-8 lg:w-10 lg:h-10" />
                </div>
                <div>
                  <h4 className="font-semibold font-inter text-lg lg:text-2xl text-[#1b233d]">
                    Easy-to-Share URL
                  </h4>
                  <p className="text-secondary text-sm md:text-basetext-sm md:text-base lg:text-xl">
                    Share your recordings instantly with a single link. No
                    attachments, no downloads.
                  </p>
                </div>
              </li>
              <li className="flex gap-2">
                <div>
                  <RevisitRecording className="w-8 h-8 lg:w-10 lg:h-10" />
                </div>
                <div>
                  <h4 className="font-semibold font-inter text-2xltext-lg lg:text-2xl text-[#1b233d]">
                    Revisit Recordings
                  </h4>
                  <p className="text-secondary text-sm md:text-base lg:text-xl">
                    Access and review your past content effortlessly. Your
                    recordings, always at your fingertips.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-span-1 relative h-full flex-1 min-h-[200px] lg:min-h-auto">
            <Image
              alt="Feature"
              fill
              src="/assets/home/feature-img.webp"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
