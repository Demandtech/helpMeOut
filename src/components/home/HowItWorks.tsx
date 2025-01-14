import Image from "next/image";

function HowItWorks() {
  return (
    <section id="howitworks">
      <div className="bg-white py-10 lg:py-20 px-3 lg:px-20">
        <div className="text-center mb-10">
          <h2 className="font-bold text-2xl lg:text-4xl text-black font-sora">
            How it works
          </h2>
        </div>
        <div className="flex flex-wrap gap-10 lg:gap-20">
          {theHows.map((how) => {
            return (
              <div
                key={how.number}
                className="text-center flex flex-col gap-2 lg:gap-4 px-1 flex-1 min-w-[280px]"
              >
                <div className="bg-primary rounded-full text-white w-10 h-10 mx-auto grid place-content-center font-semibold">
                  {how.number}
                </div>
                <h4 className="font-semibold font-inter text-lg lg:text-2xl text-[#1b233d]">
                  {how.title}
                </h4>
                <p className="text-secondary text-sm md:text-basetext-sm md:text-base lg:text-xl">
                  {how.text}
                </p>
                <div className="relative h-[250px]">
                  <Image
                    fill
                    alt="recording image"
                    src={"/assets/home/howitwork-img.webp"}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

const theHows = [
  {
    number: "1",
    title: "Record Screen",
    text: 'Click the "Start Recording" button in our extension. choose which part of your screen to capture and who you want to send it to.',
  },
  {
    number: "2",
    title: "Share Your Recording",
    text: "We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.",
  },
  {
    number: "3",
    title: "Learn Effortlessly",
    text: "Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.",
  },
];
