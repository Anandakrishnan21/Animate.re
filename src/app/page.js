"use client";
import { useEffect, useState } from "react";
import IntroSection from "@/components/sections/IntroSection";
import Header from "@/components/Header";
import TextSection from "@/components/sections/TextSection";
import ZoomSection from "@/components/sections/ZoomSection";
import HorizontalScroll from "@/components/sections/HorizontalScroll";
import EndSection from "@/components/sections/EndSection";
import Footer from "@/components/Footer";
import Loader from "./Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        smooth: true,
        smoothMobile: true,
      });
    };

    const timeout = setTimeout(() => {
      setLoading(false);
      initializeScroll();
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="scroll-smooth flex flex-col items-center bg-stone-950">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <IntroSection />
          <TextSection />
          <ZoomSection />
          <HorizontalScroll />
          <EndSection />
          <Footer />
        </>
      )}
    </main>
  );
}
