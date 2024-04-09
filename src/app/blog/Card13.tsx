"use client";
import React, { FC } from "react";
import PostCardMeta from "@/components/PostCardMeta";
import { PostDataType } from "@/data/types";
import PostTypeFeaturedIcon from "@/components/PostTypeFeaturedIcon";
import Link from "next/link";
import Image from "next/image";
import { useArticleContext } from "@/context/articleContext";
import Markdown from "react-markdown";
import { UrlObject } from "url";
import { useRouter } from "next/navigation";
import { Route } from "next";

export interface Card13Props {
  className?: string;
  post: PostDataType;
  key: number;
}

const Card13: FC<Card13Props> = ({ className = "", post, key }) => {
  const { articles } = useArticleContext();
  // console.log("articles in card12.tsx", articles);

  const {
    title: postTitle,
    href,
    featuredImage,
    desc: postDesc,
    postType,
    date: postDate,
  } = post;

  // console.log("post", post);

  const title =
    (articles && articles.length > 0 ? post.articleTitle : "") || postTitle;
  // console.log(title);

  const desc =
    (articles && articles.length > 0 ? post.articleContent : "") || postDesc;

  const date =
    (articles && articles.length > 0 ? post.lastUpdate : "") || postDate;

  const postId: string = post._id;

  const router = useRouter();

  return (
    <div className={`nc-Card13 relative flex ${className}`} data-nc-id="Card13">
      <div className="flex flex-col h-full py-2">
        <h2 className={`nc-card-title block font-semibold text-base`}>
          <Link
            // href={`/blog/${postId}`}
            href={postId ? `/blog/${postId}` : "/"}
            className="line-clamp-2"
            title={title}
          >
            {title}
          </Link>
        </h2>
        <span className="hidden sm:block my-3 text-neutral-500 dark:text-neutral-400 ">
          <span className="line-clamp-2">
            {" "}
            <Markdown className="post-card">{desc}</Markdown>
          </span>
        </span>
        {/* <span className="mt-4 block sm:hidden text-sm text-neutral-500 ">
          Posted on {date}
        </span> */}

        {/* <div className="mt-auto hidden sm:block">
          <PostCardMeta meta={{ ...post }} />
        </div> */}
      </div>

      <Link
        href={postId ? `/blog/${postId}` : "/"}
        className={`block relative h-full flex-shrink-0 w-2/5 sm:w-1/3 ml-3 sm:ml-5`}
      >
        <Image
          fill
          className="object-cover rounded-xl sm:rounded-3xl"
          src={post.thumbnailImage}
          alt={title}
          sizes="(max-width: 768px) 100vw, 400px"
        />
        {/* <PostTypeFeaturedIcon
          className="absolute bottom-2 left-2"
          postType={post.category}
          wrapSize="w-8 h-8"
          iconSize="w-4 h-4"
        /> */}
      </Link>
    </div>
  );
};

export default Card13;
