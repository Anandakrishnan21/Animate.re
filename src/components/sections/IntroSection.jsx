import Image from "next/image";
import React from "react";

function IntroSection() {

  return (
    <div className="relative w-full h-screen flex justify-center">
      <div className="backgroundImg w-10/12 h-full absolute ">
        <Image
          src="/img/image9.jpg"
          alt="backgroundImg"
          fill={true}
          priority={true}
          className="object-cover"
        />
      </div>
      <div className="flex justify-center items-center relative ">
        <div
          className="w-[350px] h-[475px] absolute will-change-transform"
          data-scroll
          data-scroll-speed="3"
        >
          <Image
            src="/img/image8.jpg"
            alt="Img"
            fill={true}
            priority={true}
            className="object-cover object-top"
          />
        </div>
        <h1
          data-scroll
          data-scroll-speed="7"
          className="text-white z-[3] text-center text-5xl whitespace-nowrap"
        >
          LET'S DIVE INTO WORLD OF ANIMATION
        </h1>
      </div>
    </div>
  );
}

export default IntroSection;
