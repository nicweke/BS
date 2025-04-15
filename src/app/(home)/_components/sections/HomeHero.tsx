import React from "react";
import HeaderText from "@/components/Text/HeaderText";
import ParagraphText from "@/components/Text/ParagraphText";
import Spacer from "@/components/Spacer";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation/Navigation";

const HeroSection: React.FC = () => {
  return (
    <section
      className=" md:w-6/12 lg:w-full md:sticky md:py-8 md:top-0
            text-center md:text-left flex flex-col md:h-screen justify-between"
    >
      <Navigation className="hidden md:block" />
      <div>
        <Spacer spaceingAmount={2} />
        <HeaderText
          text="Don’t Just Be Online, Be Unforgettable. "
          mode="h1"
          className="text-5xl sm:text-6xl font-medium lg:text-7xl w-full mx-auto"
        />
        <Spacer spaceingAmount={4} />
        <ParagraphText
          className="font-medium"
          text="Born in Nairobi, built for the world — We’re a forward-thinking studio redefining the digital landscape through innovative design, seamless development, and user-centered research. No shortcuts. No compromises. Just bold, forward-thinking solutions that connect, engage, and inspire."
        />
      </div>
      <Footer className="hidden md:block" />
    </section>
  );
};

export default HeroSection;
