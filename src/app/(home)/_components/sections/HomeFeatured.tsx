import React from "react";
import Image from "next/image";
import Spacer from "@/components/Spacer";
import ContentCard from "@/components/Card/ContentCard";
import RenderData from "@/components/RenderData";
import Carousel from "@/components/Carousel";
import { logos } from "../../_data/data";

const FeaturedSection: React.FC = () => {
  return (
    <section>
      <ContentCard title={"Technologies we use"}>
        <Carousel>
          <RenderData data={logos}>
            {(logo, index) => (
              <div key={index} className="flex justify-center items-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={1500}
                  height={1500}
                  className="object-contain"
                />
              </div>
            )}
          </RenderData>
        </Carousel>
      </ContentCard>
    </section>
  );
};

export default FeaturedSection;
