import BackgroundSection from "@/components/BackgroundSection";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import SectionGridAuthorBox from "@/components/SectionGridAuthorBox";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import React, { ReactNode } from "react";
import SectionHeroArchivePage from "../(server-components)/SectionHeroArchivePage";
// import PulseLoader from "react-spinners/PulseLoader";
// import ScaleLoader from "react-spinners/ScaleLoader";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`nc-ListingStayPage relative `}>
      <BgGlassmorphism />

      {/* SECTION HERO */}

      {children}

      <div className="container overflow-hidden">
        {/* SECTION 1 */}
        <div className="relative py-16 mb-20">
          <BackgroundSection />
          <SectionSliderNewCategories
            // heading="Explore by types of stays"
            heading="Traveler's Tales"
            // subHeading="Explore houses based on 10 types of stays"
            subHeading="Explore the World Through Our Blogs"
            categoryCardType="card5"
            itemPerRow={5}
            sliderStyle="style2"
            from="/listing-stay"
          />
        </div>

        {/* SECTION */}
        {/* <SectionSubscribe2 className="py-24 lg:py-28" /> */}

        {/* SECTION */}
        {/* <div className="relative py-16 mb-24 lg:mb-28"> */}
        {/* <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " /> */}
        {/* <SectionGridAuthorBox /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Layout;
