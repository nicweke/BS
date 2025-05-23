"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ParagraphText from "./Text/ParagraphText";
import Image from "next/image";

const Intro = () => {
  const introRef = useRef(null);
  const firstLayerRef = useRef(null);
  const secondLayerRef = useRef(null);
  const mainLayerRef = useRef(null);
  const paragraphRef = useRef(null);

  useGSAP(
    () => {
      document.body.classList.add("no-scroll");
      let tl = gsap.timeline({});
      tl.to(introRef.current, {
        display: "block",
        visibility: "visible",
      })
        .to(firstLayerRef.current, {
          y: "100%",
          duration: 0.5,
          ease: "power2.inOut",
          display: "none",
          visibility: "invisible",
        })
        .to(secondLayerRef.current, {
          y: "100%",
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to(
          introRef.current,
          {
            height: 0,
            display: "none",
            duration: 1,
            opacity: 0,
            y: "-100%",
            ease: "power2.inOut",
          },
          "+=.5"
        )
        .to(
          mainLayerRef.current,
          {
            height: 0,
            duration: 1,
            background: "white",
            opacity: 0,
            y: "-100%",
            ease: "power2.inOut",
          },
          "<"
        );
      // Enable scroll after animation completes
      tl.eventCallback("onComplete", () => {
        document.body.classList.remove("no-scroll");
      });

      return tl;
    },
    { scope: introRef }
  );

  return (
    // <div ref={introRef} className="relative invisible md:block">
    //   <div
    //     ref={firstLayerRef}
    //     className="h-screen w-full bg-black absolute top-0 left-0 z-20"
    //   ></div>
    //   <div
    //     ref={secondLayerRef}
    //     className="h-screen w-full bg-white absolute top-0 left-0 z-10"
    //   ></div>
    //   <div
    //     ref={mainLayerRef}
    //     className="h-screen w-full flex bg-black justify-center 
    //       items-center top-0 left-0 z-0  space-x-2"
    //   >
    //     <Image src="/logo1.png" alt="Logo" width={100} height={100}  />
    //     <ParagraphText
    //       ref={paragraphRef}
    //       text="BS Designs"
    //       mode="7xl"
    //       className="font-medium text-white"
    //     />
    //   </div>
    // </div>

    <div ref={introRef} className="relative block w-full h-screen">
  <div
    ref={firstLayerRef}
    className="absolute top-0 left-0 w-full h-full bg-black z-20"
  ></div>

  <div
    ref={secondLayerRef}
    className="absolute top-0 left-0 w-full h-full bg-white z-10"
  ></div>

  <div
    ref={mainLayerRef}
    className="absolute top-0 left-0 w-full h-full flex flex-col sm:flex-row justify-center items-center bg-black z-0 space-y-4 sm:space-y-0 sm:space-x-2 px-4"
  >
    <Image
      src="/logo1.png"
      alt="Logo"
      width={80}
      height={80}
      className="w-20 h-20 sm:w-[100px] sm:h-[100px]"
    />
    <ParagraphText
      ref={paragraphRef}
      text="BS Designs"
      mode="7xl"
      className="font-medium text-white text-center"
    />
  </div>
</div>

  );
};

export default Intro;
