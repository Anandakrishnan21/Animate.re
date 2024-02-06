"use client";
import React, { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";
import TextMask from "../TextMask";

function EndSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const app = new Application(canvasRef.current);
    app.load('https://prod.spline.design/AVy8Naek6bB0gmDw/scene.splinecode');
    return () => {
      app.dispose();
    };
  }, []);

  return (
    <div id="mask" className="w-full md:w-6/12 h-screen flex flex-col md:flex-row justify-center items-center text-justify text-white gap-4">
      <div className="w-10/12 md:w-1/3 h-64 rounded">
        <canvas ref={canvasRef} className="rounded-xl cursor-pointer" />
      </div>
      <div className="w-10/12 md:w-2/3">
        <TextMask />
      </div>
    </div>
  );
}

export default EndSection;