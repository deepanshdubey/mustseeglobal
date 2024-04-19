"use client";
import React, { FC, useEffect, useState } from "react";
import { TaxonomyType } from "@/data/types";
import convertNumbThousand from "@/utils/convertNumbThousand";
import Link from "next/link";
import Image from "next/image";
import { log } from "console";

export interface CardCategory5Props {
  className?: string;
  // taxonomy: TaxonomyType;
  taxonomy: any;
  from?: any;
}

const CardCategory5: FC<CardCategory5Props> = ({
  className = "",
  taxonomy,
  from,
}) => {
  // const { count, name, href = "/", thumbnail } = taxonomy;
  //

  if (from == "/") {
    const {
      count,
      name,
      href = "/",
      thumbnailImage,
      listingType,
      imageUrls,
      _id,
      slug,
    } = taxonomy;

    useEffect(() => {
      renderImages(imageUrls);
    }, [imageUrls]);

    const [images, setImages] = useState<any>();

    const renderImages = (imageUrls: any) => {
      const imageArray = [];
      for (const key in imageUrls) {
        //

        if (imageUrls.hasOwnProperty(key)) {
          const value = imageUrls[key];
          imageArray.push(value);
        }
        //
      }
      setImages(imageArray);
    };
    return (
      <Link
        href={slug ? `/listing-stay-detail/${slug}` : `/`}
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
          {/* <span
            className={`block mt-2 text-sm text-neutral-6000 dark:text-neutral-400`}
          >
            {convertNumbThousand(count || 0)}
            {` `}
            {(!listingType || listingType === "stay") && "properties"}
            {listingType === "car" && "cars"}
            {listingType === "experiences" && "experiences"}
          </span> */}
        </div>
      </Link>
    );
  } else {
    const { articleTitle, thumbnailImage, imageUrls, _id, slug } = taxonomy;

    //

    return (
      <Link
        href={slug ? `/blog/${slug}` : `/`}
        className={`nc-CardCategory5 flex flex-col ${className}`}
        data-nc-id="CardCategory5"
      >
        <div
          className={`flex-shrink-0 relative w-full aspect-w-3 aspect-h-3 h-0 rounded-2xl overflow-hidden group`}
        >
          <Image
            fill
            alt=""
            src={thumbnailImage ? thumbnailImage : ""}
            className="object-cover w-full h-full rounded-2xl"
            sizes="(max-width: 400px) 100vw, 400px"
          />
          <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
        </div>
        <div className="mt-4 px-3 truncate">
          <h2
            className={`text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-medium truncate`}
          >
            {articleTitle}
          </h2>
          <span
            className={`block mt-2 text-sm text-neutral-6000 dark:text-neutral-400`}
          >
            {/* {convertNumbThousand(count)} properties */}
          </span>
        </div>
      </Link>
    );
  }
};

export default CardCategory5;
