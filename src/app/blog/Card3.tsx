import React, { FC } from "react";
import PostCardMeta from "@/components/PostCardMeta";
import { PostDataType } from "@/data/types";
import CategoryBadgeList from "@/components/CategoryBadgeList";
import PostTypeFeaturedIcon from "@/components/PostTypeFeaturedIcon";
import Link from "next/link";
import Image from "next/image";
import { useArticleContext } from "@/context/articleContext";
import Markdown from "react-markdown";

export interface Card3Props {
  className?: string;
  // post: PostDataType;
  post: any;
}

const Card3: FC<Card3Props> = ({ className = "h-full", post }) => {
  // const { title, href, featuredImage, desc, category, postType } = post;

  // const { title, href, featuredImage, desc, postType, date } = post;

  const {
    articleContent,
    articleTitle,
    category,
    city,
    date,
    datePosted,
    imageUrls,
    lastUpdate,
    thumbnailImage,
    _id,
    slug,
  } = post;
  // console.log("post", post);

  return (
    <div
      className={`nc-Card3 relative flex flex-col-reverse sm:flex-row sm:items-center rounded-[40px] group ${className}`}
    >
      <div className="flex flex-col flex-grow">
        <div className="space-y-5 mb-4">
          {/* <CategoryBadgeList categories={category} /> */}
          <div>
            <h2
              className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 text-xl`}
            >
              <Link
                href={slug ? `/blog/${slug}` : `/`}
                className="line-clamp-2"
                title={articleTitle}
              >
                {articleTitle}
              </Link>
            </h2>
            <div className="hidden sm:block sm:mt-2">
              <span className="text-neutral-500 dark:text-neutral-400 text-base line-clamp-1">
                <Markdown className={"post-card"}>{articleContent}</Markdown>
              </span>
            </div>
          </div>

          {/* <PostCardMeta meta={{ ...post }} /> */}
        </div>
      </div>

      <div
        className={`block flex-shrink-0 sm:w-56 sm:ml-6 rounded-3xl overflow-hidden mb-5 sm:mb-0`}
      >
        <Link
          href={slug ? `/blog/${slug}` : `/`}
          className={`block w-full h-0 aspect-h-10 sm:aspect-h-10 aspect-w-16 `}
        >
          <Image
            fill
            src={thumbnailImage}
            alt={articleTitle}
            sizes="(max-width: 768px) 100vw, 400px"
          />
          <span>
            {/* <PostTypeFeaturedIcon
              className="absolute left-2 bottom-2"
              postType={category}
              wrapSize="w-8 h-8"
              iconSize="w-4 h-4"
            /> */}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Card3;
