import React from "react";
import Spacer from "@/components/Spacer";
import HeaderText from "@/components/Text/HeaderText";
import ParagraphText from "@/components/Text/ParagraphText";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation/Navigation";

const HeroSection: React.FC = () => {
  return (
    <section
      className="  md:w-6/12 lg:w-full md:sticky md:py-8 md:top-0
            text-center md:text-left flex flex-col md:h-screen justify-between"
    >
      <Navigation className="hidden md:block" />
      <div className="">
        <Spacer spaceingAmount={2} />
        <HeaderText
          text="Design That Moves Business Forward."
          mode="h1"
          className="text-5xl xs:text-6xl font-medium lg:text-7xl w-full  mx-auto"
        />
        <Spacer spaceingAmount={4} />
        <ParagraphText
          className="font-medium"
          text="We create impactful visual and content solutions for brands—blending strategy and storytelling through design, branding, photography, video, copywriting, and animation."

        />
        <Spacer spaceingAmount={2} />
        <ParagraphText className="font-medium" text="From design and branding to video, copy, and motion—we make every touchpoint work harder, speak louder, and connect deeper. Every detail is intentional, crafted to spark impact and leave a lasting impression.

 " />
      </div>
      <Footer className="hidden md:block" />
    </section>
  );
};

export default HeroSection;
