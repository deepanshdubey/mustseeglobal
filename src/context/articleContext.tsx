"use client";
import { PostDataType } from "@/data/types";
import axios from "axios";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

// interface Article_Datatype {
//   articleTitle: string;
//   articleContent: string;
//   datePosted: Date;
//   lastUpdate: Date;
//   category: string;
//   city: string;
//   imageUrls?: string[];
// }

interface ArticleContextType {
  articles: PostDataType[] | undefined;
  cities: string[] | undefined;
}

//creating context
const ArticleContext = createContext<any>(undefined);

export const useArticleContext = () => {
  const context = useContext(ArticleContext);

  if (!context) {
    throw new Error("useArticleContext must be used within an ArticleProvider");
  }

  return context;
};

interface childrenType {
  children: ReactNode;
}

export const ArticleProvider = ({ children }: childrenType) => {
  const [articles, setArticles] = useState<PostDataType[]>();
  const [cities, setCities] = useState<string[]>();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `https://msny-backend-deepansh.vercel.app/api/v1/articles`
        );
        // const response = await axios.get(
        //   `http://localhost:9000/api/v1/articles`
        // );
        const articles_response = response.data;
        //

        setArticles(articles_response);

        //filter all cities
        const cities = articles_response.map((article: PostDataType) => {
          return article.city;
        });
        setCities(cities);
        //
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticle();
  }, []);

  return (
    <ArticleContext.Provider value={{ articles, cities }}>
      {children}
    </ArticleContext.Provider>
  );
};
