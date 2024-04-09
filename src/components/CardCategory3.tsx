import React, { FC } from "react";
import { TaxonomyType } from "@/data/types";
import convertNumbThousand from "@/utils/convertNumbThousand";
import Link from "next/link";
import Image from "next/image";

export interface CardCategory3Props {
  className?: string;
  taxonomy: TaxonomyType;
}

const CardCategory3: FC<CardCategory3Props> = ({
  className = "",
  taxonomy,
}) => {
  // const { count, name, href = "/", thumbnail } = taxonomy;
  const { thumbnailImage, name, imageUrls, _id } = taxonomy;
  // console.log(thumbnailImage, name);
  imageUrls && console.log(Object.values(imageUrls)[0]);

  return (
    <Link
      href={`/listing-stay-detail/${_id}` || "/"}
      className={`nc-CardCategory3 flex flex-col ${className}`}
    >
      <div
        className={`flex-shrink-0 relative w-full aspect-w-5 aspect-h-5 sm:aspect-h-6 h-0 rounded-2xl overflow-hidden group`}
      >
        <Image
          src={imageUrls ? (Object.values(imageUrls)[0] as string) : ""}
          className="object-cover w-full h-full rounded-2xl"
          alt="places"
          fill
          sizes="(max-width: 400px) 100vw, 300px"
        />
        <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
      </div>
      <div className="mt-4 truncate">
        <h2
          className={`text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-medium truncate`}
        >
          {name}
        </h2>
        <span
          className={`block mt-1.5 text-sm text-neutral-6000 dark:text-neutral-400`}
        >
          {/* {convertNumbThousand(count || 0)} properties */}
        </span>
      </div>
    </Link>
  );
};

export default CardCategory3;
