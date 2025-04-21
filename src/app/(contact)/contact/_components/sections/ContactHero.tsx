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
          text="Interested to work with us?"
          mode="h1"
          className="text-5xl xs:text-6xl font-medium lg:text-7xl w-full  mx-auto"
        />
        <Spacer spaceingAmount={4} />
        <ParagraphText
          className="font-medium"
          text="Shoot us an email or you can also schedule a call with us."
          // text="We deliver high-impact creative solutions for fashion, lifestyle, and luxury brands by seamlessly blending strategic branding with compelling visual storytelling. Our services include Graphic Design, Logo Design & Visual Identity, Branding & Rebranding, Motion Graphics, Photography & Product Shoots, Copywriting (web, ads, landing pages), Blog & Article Writing, SEO Content Strategy, Video Production & Editing, Animation & Explainer Videos, and Voiceover & Scriptwriting."
        />
        <Spacer spaceingAmount={2} />
        <ParagraphText className="font-medium" text="Let’s work together." />
      </div>
      <Footer className="hidden md:block" />
    </section>
  );
};

export default HeroSection;



