import React from "react";
import HeaderText from "@/components/Text/HeaderText";
import ParagraphText from "@/components/Text/ParagraphText";
import Spacer from "@/components/Spacer";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation/Navigation";
import CalendlyBadge from "@/components/CalendlyBadge";

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
          text="Born in Nairobi, built for the world — We're a bold studio reshaping digital experiences through smart design, seamless development, and user-first research. No shortcuts. No compromises. Just impactful, forward-thinking solutions."
        />
        <Spacer spaceingAmount={2} />
        <ParagraphText
          className="font-medium"
          text="From UI/UX design to full-stack development, we build sleek e-commerce sites, custom apps, CMS, and API-powered portals. With ongoing support and maintenance, your digital presence stays fast, secure, and future-ready. Let’s build something exceptional."
        />
        
      </div>
      {/* <CalendlyBadge /> */}
      <Footer className="hidden md:block" />
    </section>
  );
};

export default HeroSection;
