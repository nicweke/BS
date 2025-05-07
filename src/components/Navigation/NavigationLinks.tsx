// "use client";
// import React from "react";
// import Link from "next/link";
// import ParagraphText from "../Text/ParagraphText";
// import { Button } from "@/components/ui/button";
// import { usePathname } from "next/navigation";
// import { cn } from "@/lib/utils";


// interface NavigationLinksProps {
//   className?: string;
// }

// const NavigationLinks = ({ className = "" }: NavigationLinksProps) => {
//   const pathname = usePathname();

//   return (
//     <div className={cn(`flex items-center justify-center ${className}`)}>
//       <div className="bg-zinc-200 rounded-full p-1 space-x-1 ">
//         <Button
//           className={cn("rounded-3xl py-1 px-2 h-fit", {
//             "bg-transparent hover:bg-zinc-300 text-black": pathname !== "/", // Apply bg-transparent if pathname is not '/studio'
//           })}
//           asChild
//         >
//           <Link href="/">
//             <ParagraphText text="Web & SEO" mode="sm" className="font-medium" />
//           </Link>
//         </Button>
//         <Button
//           className={cn("rounded-3xl py-1 px-2 h-fit", {
//             "bg-transparent hover:bg-zinc-300 text-black":
//               pathname !== "/creative", // Apply bg-transparent if pathname is not '/agency'
//           })}
//           asChild
//         >
//           <Link href="/creative">
//             <ParagraphText text="Creative & Visual Design" mode="sm" className="font-medium" />
//           </Link>
//         </Button>
//         <Button
//           className={cn("rounded-3xl py-1 px-2 h-fit", {
//             "bg-transparent hover:bg-zinc-300 text-black":
//               pathname !== "/contact", // Apply bg-transparent if pathname is not '/agency'
//           })}
//           asChild
//         >
//           <Link href="/contact">
//             <ParagraphText text="Get in Touch" mode="sm" className="font-medium" />
//           </Link>
//         </Button>
       
//       </div>
     
//     </div>
//   );
// };

// export default NavigationLinks;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import ParagraphText from "../Text/ParagraphText";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

interface NavigationLinksProps {
  className?: string;
}

const NavigationLinks = ({ className = "" }: NavigationLinksProps) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Web & SEO" },
    { href: "/creative", label: "Creative & Visual Design" },
    { href: "/contact", label: "Get in Touch" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <div className={cn(`hidden md:flex items-center justify-center ${className}`)}>
        <div className="bg-zinc-200 rounded-full p-1 space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.href}
              className={cn("rounded-3xl py-1 px-2 h-fit", {
                "bg-transparent hover:bg-zinc-300 text-black": pathname !== item.href,
              })}
              asChild
            >
              <Link href={item.href}>
                <ParagraphText text={item.label} mode="sm" className="font-medium" />
              </Link>
            </Button>
          ))}
        </div>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 focus:outline-none"
          aria-label="Open navigation menu"
        >
          <Menu className="w-6 h-6 text-black" />
        </button>
      </div>

      {/* Mobile Full-Screen Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-white transition-all duration-300">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 p-2"
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation Links */}
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default NavigationLinks;

