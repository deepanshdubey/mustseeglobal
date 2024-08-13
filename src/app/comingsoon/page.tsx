import rightImg from "@/images/about-us-banner.png";
import React, { FC } from "react";
import SectionFounder from "./SectionFounder";
import SectionStatistic from "./SectionStatistic";
import SectionHero from "./SectionHero";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import BackgroundSection from "@/components/BackgroundSection";
import SectionClientSay from "@/components/SectionClientSay";
import SectionSubscribe2 from "@/components/SectionSubscribe2";

export interface PageAboutProps {}

const PageAbout: FC<PageAboutProps> = ({}) => {
  return (
    <div className={`nc-PageAbout overflow-hidden relative`}>
      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <SectionHero
          rightImg={rightImg}
          heading="👋 Coming Soon"
          btnText=""
          subHeading="Discover the essence of the Big Apple with Must See Global. From iconic landmarks to hidden gems, our curated guides offer the best things to do, places to eat, and where to stay. Stay updated on the latest events and navigate the city like a local with our detailed maps and safety tips. Let MustSee Global be your companion in exploring the vibrant and dynamic cities of the World."
        />

        <SectionFounder />
        {/* <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay />
        </div> */}

        <SectionStatistic />

        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default PageAbout;
