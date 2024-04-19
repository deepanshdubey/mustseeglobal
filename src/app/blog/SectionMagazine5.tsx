"use client";
import React, { FC } from "react";
import { PostDataType } from "@/data/types";
import Card12 from "./Card12";
import Card13 from "./Card13";
import { useArticleContext } from "@/context/articleContext";

// export interface SectionMagazine5Props {
//   posts: PostDataType[];
// }

export interface SectionMagazine5Props {
  posts: PostDataType[];
}

const SectionMagazine5: FC<SectionMagazine5Props> = ({ posts }) => {
  const { articles } = useArticleContext();
  //

  // posts = articles
  return (
    <div className="nc-SectionMagazine5">
      <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
        {posts[0] && <Card12 post={posts[0]} />}
        <div className="grid gap-6 md:gap-8">
          {articles &&
            articles.length > 0 &&
            articles
              .filter((_: any, i: any) => i < 4 && i > 0)
              .map((item: any, index: any) => (
                <Card13 key={index} post={item} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default SectionMagazine5;
