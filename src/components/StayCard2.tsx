"use client";
import React, { FC, useEffect, useState } from "react";
import GallerySlider from "@/components/GallerySlider";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import { StayDataType } from "@/data/types";
import StartRating from "@/components/StartRating";
import BtnLikeIcon from "@/components/BtnLikeIcon";
import SaleOffBadge from "@/components/SaleOffBadge";
import Badge from "@/shared/Badge";
import Link from "next/link";

export interface StayCard2Props {
  className?: string;
  // data?: StayDataType;
  data?: any;
  size?: "default" | "small";
}

const DEMO_DATA = DEMO_STAY_LISTINGS[0];

const StayCard2: FC<StayCard2Props> = ({
  size = "default",
  className = "",
  data = DEMO_DATA,
}) => {
  // const {
  //   galleryImgs,
  //   listingCategory,
  //   address,
  //   title,
  //   bedrooms,
  //   href,
  //   like,
  //   saleOff,
  //   isAds,
  //   price,
  //   reviewStart,
  //   reviewCount,
  //   _id,
  // } = data;

  //

  const {
    count,
    name,
    href = "/",
    thumbnailImage,
    listingType,
    imageUrls,
    _id,
    address,
    slug,
  } = data;

  useEffect(() => {
    renderImages(imageUrls);
  }, [imageUrls]);

  const [images, setImages] = useState<any>();

  const renderImages = (imageUrls: any) => {
    const imageArray = [];
    for (const key in imageUrls) {
      //

      if (imageUrls?.hasOwnProperty(key)) {
        const value = imageUrls[key];
        imageArray.push(value);
      }
      //
    }
    setImages(imageArray);
  };

  const renderSliderGallery = () => {
    return (
      <div className="relative w-full">
        {images && (
          <GallerySlider
            uniqueID={`StayCard2_${_id}`}
            ratioClass="aspect-w-12 aspect-h-11"
            galleryImgs={images}
            imageClass="rounded-lg"
            href={`/listing-stay-detail/${slug}`}
          />
        )}
        {/* <BtnLikeIcon isLiked={like} className="absolute right-3 top-3 z-[1]" /> */}
        {/* {saleOff && <SaleOffBadge className="absolute left-3 top-3" />} */}
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className={size === "default" ? "mt-3 space-y-3" : "mt-2 space-y-2"}>
        <div className="space-y-2">
          <span className="text-sm text-neutral-500 dark:text-neutral-400">
            {name}
            {/* · {bedrooms} beds */}
          </span>
          <div className="flex items-center space-x-2">
            {/* {isAds && <Badge name="ADS" color="green" />} */}
            <h2
              className={`font-semibold capitalize text-neutral-900 dark:text-white ${
                size === "default" ? "text-base" : "text-base"
              }`}
            >
              <span className="line-clamp-1">{name}</span>
            </h2>
          </div>
          <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm space-x-1.5">
            {size === "default" && (
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
            <span className="">{address.address_string}</span>
          </div>
        </div>
        <div className="w-14 border-b border-neutral-100 dark:border-neutral-800"></div>
        <div className="flex justify-between items-center">
          {/* <span className="text-base font-semibold">
            {price}
            {` `}
            {size === "default" && (
              <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
                /night
              </span>
            )}
          </span> */}
          {/* {!!reviewStart && (
            <StartRating reviewCount={reviewCount} point={reviewStart} />
          )} */}
        </div>
      </div>
    );
  };

  return (
    <div className={`nc-StayCard2 group relative ${className}`}>
      {renderSliderGallery()}
      <Link href={slug ? `/listing-stay-detail/${slug}` : `/`}>
        {renderContent()}
      </Link>
    </div>
  );
};

export default StayCard2;
