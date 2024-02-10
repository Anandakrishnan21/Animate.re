import Image from "next/image";
import React from "react";

function IntroSection() {

  return (
    <div id="intro" className="relative w-full h-screen flex justify-center">
      <div className="w-10/12 h-full absolute brightness-70">
        <Image
          src="/img/image1.jpg"
          alt="backgroundImg"
          fill="true"
          priority="true"
          className="object-cover"
        />
      </div>
      <div className="flex justify-center items-center relative ">
        <div
          className="w-[280px] md:w-[350px] h-[475px] absolute will-change-transform"
          data-scroll
          data-scroll-speed="0.3"
        >
          <Image
            src="/img/image2.jpg"
            alt="Img"
            fill="true"
            className=" object-cover object-top"
          />
        </div>
        <h1
          data-scroll
          data-scroll-speed="0.7"
          className="text-white z-[3] text-center text-base md:text-3xl lg:text-5xl whitespace-nowrap"
        >
          LET&apos;S DIVE INTO WORLD OF ANIMATION
        </h1>
      </div>
    </div>
  );
}

export default IntroSection;
