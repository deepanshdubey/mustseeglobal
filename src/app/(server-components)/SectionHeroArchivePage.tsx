"use client";
import React, { FC, ReactNode, useEffect, useState } from "react";
import imagePng from "@/images/hero-right2.png";
// import React, { FC, ReactNode } from "react";
import eventsPng from "@/images/Category Banners/Events.png";
import foodPng from "@/images/Category Banners/Food.png";
import mapsPng from "@/images/Category Banners/Maps.png";
import safetyPng from "@/images/Category Banners/Safety.png";
import stayPng from "@/images/Category Banners/Stay.png";
import thingsToDoPng from "@/images/Category Banners/Things to do.png";
import HeroSearchForm, {
  SearchTab,
} from "../(client-components)/(HeroSearchForm)/HeroSearchForm";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import axios from "axios";

export interface SectionHeroArchivePageProps {
  className?: string;
  listingType?: ReactNode;
  currentPage: "Stays" | "Experiences" | "Cars" | "Flights";
  currentTab: SearchTab;
  rightImage?: StaticImageData;
}

const SectionHeroArchivePage: FC<SectionHeroArchivePageProps> = ({
  className = "",
  listingType,
  currentPage,
  currentTab,
  rightImage = thingsToDoPng,
}) => {
  const page = usePathname();
  // console.log("page", page);

  interface Categories {
    [key: string]: string;
  }
  const categories: Categories = {
    "/thingstodo": "Things to do",
    "/food": "Food",
    "/stay": "Stay",
    "/safety": "Safety",
    "/maps": "Maps",
    "/events": "Events",
  };

  const herosectionpage = usePathname();

  interface ObjectWithKeys {
    [key: string]: string;
  }

  const object: ObjectWithKeys = {
    food: "restaurant",
    thingstodo: "attraction",
    stay: "hotel",
    safety: "safety",
    maps: "geographic",
    events: "events",
  };

  const [listingsCount, setListingsCount] = useState();

  useEffect(() => {
    const fetchListings = async () => {
      console.log("object is", object[herosectionpage.slice(1)]);

      try {
        const response = await axios.get(
          `https://msny-backend-deepansh.vercel.app/api/v1/listings?category.name=${
            object[herosectionpage.slice(1)]
          }`
        );

        const listing_response = response.data.totalResults;
        console.log("response is", listing_response);

        setListingsCount(listing_response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchListings();
  }, []);

  switch (categories[page as string]) {
    case "Things to do":
      rightImage = thingsToDoPng;
      break;
    case "Food":
      rightImage = foodPng;
      break;
    case "Stay":
      rightImage = stayPng;
      break;
    case "Safety":
      rightImage = safetyPng;
      break;
    case "Maps":
      rightImage = mapsPng;
      break;
    case "Events":
      rightImage = eventsPng;
      break;
    default:
  }

  return (
    <div
      className={`nc-SectionHeroArchiveherosectionpage flex flex-col relative ${className}`}
      data-nc-id="SectionHeroArchiveherosectionpage"
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-6 lg:space-y-10 pb-14 lg:pb-64 xl:pb-80 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl leading-[110%]">
            {/* New York City, NY           */}
            {/* Things to do */}
            {categories[herosectionpage as string]}
          </h2>
          <div className="flex items-center text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            <i className="text-2xl las la-map-marked"></i>
            <span className="ml-2.5">New York</span>
            <span className="mx-5"></span>
            {listingType ? (
              listingType
            ) : (
              <>
                <i className="text-2xl las la-hotel"></i>
                <span className="ml-2.5">{listingsCount} listings</span>
              </>
            )}
          </div>
        </div>
        <div className="flex-grow">
          <Image
            className="w-full"
            src={rightImage}
            alt="hero"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </div>
      </div>

      <div className="hidden lg:flow-root w-full">
        <div className="z-10 lg:-mt-40 xl:-mt-56 w-full">
          <HeroSearchForm currentPage={currentPage} currentTab={currentTab} />
        </div>
      </div>
    </div>
  );
};

export default SectionHeroArchivePage;
