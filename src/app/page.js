"use client";
import { useEffect} from "react";
import IntroSection from "@/components/sections/IntroSection";
import Header from "@/components/Header";

export default function Home() {

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main
      className="flex flex-col items-center bg-stone-950"
    >
          <Header />
          <IntroSection />
    </main>
  ); 
}
