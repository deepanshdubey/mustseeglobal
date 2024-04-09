"use client";
import { DEMO_POSTS } from "@/data/posts";
import { PostDataType } from "@/data/types";
import React, { FC } from "react";
import Card3Small from "./Card3Small";
import WidgetHeading1 from "./WidgetHeading1";
import { useArticleContext } from "@/context/articleContext";

export interface WidgetPostsProps {
  className?: string;
  posts?: PostDataType[];
}

// const widgetPostsDemo: any[] = articles.filter(
//   (_: any, i: any) => i > 2 && i < 7
// );

const WidgetPosts: FC<WidgetPostsProps> = ({
  className = "bg-neutral-100 dark:bg-neutral-800",
  // posts = widgetPostsDemo,
  posts,
}) => {
  const { articles } = useArticleContext();

  return (
    <div className={`nc-WidgetPosts rounded-3xl overflow-hidden ${className}`}>
      <WidgetHeading1
        title="🎯 Popular Posts"
        viewAll={{ label: "View all", href: "/#" }}
      />
      <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700">
        {articles &&
          articles.map((post: any) => (
            <Card3Small
              className="p-4 xl:px-5 xl:py-6 hover:bg-neutral-200 dark:hover:bg-neutral-700"
              key={post._id}
              post={post}
            />
          ))}
      </div>
    </div>
  );
};

export default WidgetPosts;
