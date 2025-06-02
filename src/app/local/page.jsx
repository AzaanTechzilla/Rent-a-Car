
import Banners from "@/components/Banners";
import CallToAction from "@/components/CallToAction";
import React from "react";

const Local = () => {
  return (
    <>
      <Banners
        img="/local-banner.jpg"
        title="Local Transfers"
        text="Add to the memories on your big day with Azaan"
      />
      <div className="max-w-[1150px] mx-4 lg:mx-auto my-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="">
            <h1 className="text-third-color text-4xl font-bold mb-10">
              Local Car Service
            </h1>
            <p className="leading-6 text-lg text-slate-400">
              At Limolux, we comprehend the meaning of a vehicle administration
              for your big day.
              <br />
              Our wedding vehicles are carefully ready for an immaculate
              appearance, and we'll design your course to guarantee
              dependability. We understand the importance of the finer details,
              so feel free to enlighten us if you desire any extras, such as
              enhancements, to elevate your journey's delight.
              <br />
              <br />
              Customize your experience with us and make every ride truly
              exceptional.
            </p>
          </div>
          <img src="/local.jpeg" alt="" className="w-full h-full" />
        </div>
        <h2 className="text-center text-md md:text-4xl text-slate-500 my-16">
          Weather you seek lavish indulgence or spacious versatility, our
          versatile fleet ensures the ideal ride for every event.
        </h2>
      </div>
      <CallToAction />
    </>
  );
};

export default Local;
