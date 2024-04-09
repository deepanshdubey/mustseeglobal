"use client";
import React, { FC, useEffect, useState } from "react";
import { TaxonomyType } from "@/data/types";
import convertNumbThousand from "@/utils/convertNumbThousand";
import Link from "next/link";
import Image from "next/image";

export interface CardCategory4Props {
  className?: string;
  taxonomy: TaxonomyType;
}

const CardCategory4: FC<CardCategory4Props> = ({
  className = "",
  taxonomy,
}) => {
  const {
    count,
    name,
    href = "/",
    thumbnailImage,
    listingType,
    imageUrls,
    _id,
  } = taxonomy;

  console.log("i am in card 4", taxonomy);

  const [images, setImages] = useState<any>();

  useEffect(() => {
    renderImages(imageUrls);
  }, [imageUrls]);

  const renderImages = (imageUrls: any) => {
    const imageArray = [];
    for (const key in imageUrls) {
      // console.log("keysss", key);

      if (imageUrls.hasOwnProperty(key)) {
        const value = imageUrls[key];
        imageArray.push(value);
      }
      // console.log("imagesssssssss", imageArray);
    }
    setImages(imageArray);
  };

  return (
    <Link
      href={_id ? `/listing-stay-detail/${_id}` : `/`}
      className={`nc-CardCategory4 flex flex-col ${className}`}
      data-nc-id="CardCategory4"
    >
      <div
        className={`flex-shrink-0 relative w-full aspect-w-5 aspect-h-5 sm:aspect-h-6 h-0 rounded-2xl overflow-hidden group`}
      >
        <Image
          src={images ? images[0] : ""}
          className="object-cover w-full h-full rounded-2xl"
          fill
          alt="archive"
          sizes="(max-width: 400px) 100vw, 400px"
        />
        <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
      </div>
      <div className="mt-4 px-2 truncate text-center">
        <h2
          className={`text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-medium truncate`}
        >
          {name}
        </h2>
        <span
          className={`block mt-2 text-sm text-neutral-6000 dark:text-neutral-400`}
        >
          {/* {convertNumbThousand(count || 0)} */}
          {` `}
          {/* {(!listingType || listingType === "stay") && "properties"} */}
          {listingType === "car" && "cars"}
          {listingType === "experiences" && "experiences"}
        </span>
      </div>
    </Link>
  );
};

export default CardCategory4;
