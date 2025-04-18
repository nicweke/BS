import React from "react";
import Link from "next/link";
import ParagraphText from "../Text/ParagraphText";
import { Button } from "@/components/ui/button";
import NavigationLinks from "./NavigationLinks";
import Container from "../Container";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface NavigationProps {
  className?: string;
  
}

const Navigation = ({ className }: NavigationProps) => {
  return (
    <nav className={cn(`py-8 md:py-0 md:top-0 ${className}`)}>
      <Container className="flex justify-between items-center md:w-full md:p-0">
        <Link href={"/"} className="flex items-center space-x-2">
          <Image src="/logo1.png" alt="Logo" width={30} height={30} className="hidden md:block" />
          <ParagraphText text="BS Designs" mode="2xl" className="font-medium" />
        </Link>
        {/* Multi Button */}
        <NavigationLinks className="md:hidden" />
      </Container>
    </nav>
  );
};

export default Navigation;
