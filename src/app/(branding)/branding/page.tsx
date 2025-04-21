import React from "react";
import Container from "@/components/Container";
import HeroSection from "./_components/sections/BrandingHero";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import { Metadata } from "next";
import ProjectSection from "./_components/sections/BrandingProject";

export const metadata: Metadata = {
  title: "BS Designs –  Crafting digital identities that connect.",
  description:
    "We fuel next-gen brands with smart design and zero-compromise execution."};

const page = () => {
  return (
    <>
      <Intro />
      <Navigation className="md:hidden" />
      <main className="flex flex-col items-center justify-center ">
        <Container
          className="md:flex sm:justify-between lg:justify-end 
            md:space-x-10 md:relative md:w-full"
        >
          <HeroSection />
          <ProjectSection />
        </Container>
      </main>
      
      <Footer className="md:hidden " />
    </>
  );
};

export default page;
