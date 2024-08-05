"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import Markdown from 'react-markdown'
import { DEMO_POSTS } from "@/data/posts";
import { PostDataType } from "@/data/types";
import Avatar from "@/shared/Avatar";
import Badge from "@/shared/Badge";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";
import Comment from "@/shared/Comment";
import SocialsList from "@/shared/SocialsList";
import Textarea from "@/shared/Textarea";
import Image from "next/image";
import travelhero2Image from "@/images/travelhero2.png";
import Link from "next/link";
import { Route } from "@/routers/types";
import axios from "axios";
import { useScratch } from "react-use";
import ReactMarkdown from "react-markdown";
import { useParams, useRouter } from "next/navigation";
// import PulseLoader from "react-spinners/PulseLoader";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useArticleContext } from "@/context/articleContext";
import moment from "moment";
import BackToUp from "@uiw/react-back-to-top";
import ScrollToTop from "react-scroll-to-top";
import { useThemeMode } from "@/utils/useThemeMode";
import { useListingContext } from "@/context/listingContext";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";

const Page = ({
  params,
  searchParams,
}: {
  params: { stepIndex: string; slug: string[] };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  //

  // const { slug } = router.query;
  //

  // const [article, setArticle] = useState<ArticleType | undefined>(undefined);
  const { articles } = useArticleContext();
  const [firstArticle, setfirstArticle] = useState({
    articleTitle: "",
    articleContent: "",
    category: "",
    thumbnailImage: "",
    datePosted: "",
  });
  interface article {
    articleTitle: string;
    articleContent: string;
    category: string;
    // Add other properties as needed
  }
  interface BackToUpProps {
    children: React.ReactElement<HTMLImageElement>;
    className?: any;
  }

  const [loading, setLoading] = useState(true);
  const { isDarkMode } = useThemeMode();
  const { slug } = params;
  const { listings } = useListingContext();
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `https://msny-backend-theta.vercel.app/api/v1/articles/${slug[0]}`
        );
        // const response = await axios.get(
        //   `http://localhost:9000/api/v1/articles`
        // );
        const article = response.data;

        // setArticle(article);
        setfirstArticle(article);

        //

        // let first = article[0]
        //
        setLoading(false); // Set loading to false when data is received
      } catch (error) {
        console.error("error while fetching single article", error);
        // setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchArticle();
  }, [params]);

  const renderHeader = () => {
    return (
      <header className="container rounded-xl flex">
        <div className="max-w-screen-lg mx-auto space-y-5">
          {/* <Badge color="purple" name="Traveler" /> */}
          <h1
            className=" text-neutral-900 font-bold text-3xl md:text-4xl md:!leading-[120%] lg:text-5xl dark:text-neutral-100 max-w-4xl text-center"
            title="Quiet ingenuity: 120,000 lunches and counting"
          >
            {/* Keep up the spirit of the desire to travel around the world */}

            {firstArticle?.articleTitle}
            <BackToUp
              className={
                isDarkMode ? "darkModeMoveToTop" : "lightModeMoveToTop"
              }
            >
              <button>
                <iframe
                  className="backToTop"
                  src="https://lottie.host/embed/65ccd2cf-eada-41f0-9e29-6a75b0726f22/P3WEtcoyAA.json"
                ></iframe>
              </button>
            </BackToUp>

            {/* <BackToUp
              className={
                isDarkMode ? "darkModeMoveToTop" : "lightModeMoveToTop"
              }
            >
              <iframe className="backToTop" src="https://lottie.host/embed/65ccd2cf-eada-41f0-9e29-6a75b0726f22/P3WEtcoyAA.json"></iframe>            
              🔝
            </BackToUp> */}
          </h1>

          <div className="w-full border-b border-neutral-100 dark:border-neutral-800"></div>
          <div className="flex flex-col items-baseline sm:flex-row sm:justify-between">
            <div className="nc-PostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 text-sm leading-none flex-shrink-0">
              <Avatar
                containerClassName="flex-shrink-0"
                sizeClass="w-8 h-8 sm:h-11 sm:w-11 "
              />
              <div className="ml-3">
                <div className="flex items-center">
                  <a className="block font-semibold" href="/">
                    Fones Mimi
                  </a>
                </div>
                <div className="text-xs mt-[6px]">
                  <span className="text-neutral-700 dark:text-neutral-300">
                    {/* May 20, 2021 */}

                    {moment(firstArticle.datePosted).format("MMMM DD, YYYY")}
                  </span>
                  <span className="mx-2 font-semibold">·</span>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    6 min read
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <SocialsList />
            </div>
          </div>
        </div>
      </header>
    );
  };

  const renderContent = () => {
    return (
      <div
        id="single-entry-content"
        className="prose dark:prose-invert prose-sm !max-w-screen-lg sm:prose lg:prose-lg mx-auto dark:prose-dark"
      >
        {/* <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure vel
        officiis ipsum placeat itaque neque dolorem modi perspiciatis dolor
        distinctio veritatis sapiente, minima corrupti dolores necessitatibus
        suscipit accusantium dignissimos culpa cumque.
      </p> */}

        {/* <p>{article?.articleContent}</p> */}
        <p>
          <ReactMarkdown className={"text-justify blog"}>
            {firstArticle?.articleContent}
          </ReactMarkdown>
        </p>

        {/* <p>
        It is a long established fact that a <strong>reader</strong> will be
        distracted by the readable content of a page when looking at its{" "}
        <strong>layout</strong>. The point of using Lorem Ipsum is that it has
        a more-or-less normal{" "}
        <a href="/#" target="_blank" rel="noopener noreferrer">
          distribution of letters.
        </a>{" "}
      </p>
      <ol>
        <li>We want everything to look good out of the box.</li>
        <li>
          {` Really just the first reason, that's the whole point of the plugin.`}
        </li>
        <li>
          {`   Here's a third pretend reason though a list with three items looks
          more realistic than a list with two items.`}
        </li>
      </ol>
      <h3>Typography should be easy</h3>
      <p>
        {`So that's a header for you — with any luck if we've done our job
        correctly that will look pretty reasonable.`}
      </p>
      <p>Something a wise person once told me about typography is:</p>
      <blockquote>
        <p>
          {` Typography is pretty important if you don't want your stuff to look
          like trash. Make it good then it won't be bad.`}
        </p>
      </blockquote>
      <p>
        {`        It's probably important that images look okay here by default as well:`}
      </p>
      <figure>
        <Image src={travelhero2Image} alt="blog" className="rounded-2xl" />
        <figcaption>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure vel
          officiis ipsum placeat itaque neque dolorem modi perspiciatis dolor
          distinctio veritatis sapiente
        </figcaption>
      </figure>
      <p>
        {` Now I'm going to show you an example of an unordered list to make sure
        that looks good, too:`}
      </p>
      <ul>
        <li>So here is the first item in this list.</li>
        <li>{`In this example we're keeping the items short.`}</li>
        <li>{`Later, we'll use longer, more complex list items.`}</li>
      </ul>
      <p>{`And that's the end of this section.`}</p>
      <h2>Code should look okay by default.</h2>
      <p>
        I think most people are going to use{" "}
        <a href="https://highlightjs.org/">highlight.js</a> or{" "}
        <a href="https://prismjs.com/">Prism</a>{" "}
        {`or something if they want to
        style their code blocks but it wouldn't hurt to make them look`}{" "}
        <em>okay</em> out of the box, even with no syntax highlighting.
      </p>
      <p>
        {`   What I've written here is probably long enough, but adding this final
        sentence can't hurt.`}
      </p>

      <p>Hopefully that looks good enough to you.</p>
      <h3>We still need to think about stacked headings though.</h3>

      <p>
        Phew, with any luck we have styled the headings above this text and
        they look pretty good.
      </p> */}
      </div>
    );
  };

  const renderTags = () => {
    return (
      <div className="max-w-screen-lg mx-auto flex flex-wrap px-12">
        <a
          className="nc-Tag inline-block bg-white text-sm text-neutral-600 dark:text-neutral-300 py-2 rounded-lg border border-neutral-100  md:px-4 dark:bg-neutral-700 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-6000 mr-2 mb-2"
          href="##"
        >
          {firstArticle?.category}
        </a>
        {/* <a
          className="nc-Tag inline-block bg-white text-sm text-neutral-600 dark:text-neutral-300 py-2 rounded-lg border border-neutral-100  md:px-4 dark:bg-neutral-700 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-6000 mr-2 mb-2"
          href="##"
        >
          Jewelry
        </a>
        <a
          className="nc-Tag inline-block bg-white text-sm text-neutral-600 dark:text-neutral-300 py-2 rounded-lg border border-neutral-100  md:px-4 dark:bg-neutral-700 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-6000 mr-2 mb-2"
          href="##"
        >
          Tools
        </a> */}
      </div>
    );
  };

  // const renderAuthor = () => {
  //   return (
  //     <div className="max-w-screen-md mx-auto ">
  //       <div className="nc-SingleAuthor flex">
  //         <Avatar sizeClass="w-11 h-11 md:w-24 md:h-24" />
  //         <div className="flex flex-col ml-3 max-w-lg sm:ml-5 space-y-1">
  //           <span className="text-xs text-neutral-400 uppercase tracking-wider">
  //             WRITEN BY
  //           </span>
  //           <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
  //             <a href="/">Fones Mimi</a>
  //           </h2>
  //           <span className="text-sm text-neutral-500 sm:text-base dark:text-neutral-300">
  //             There’s no stopping the tech giant. Apple now opens its 100th
  //             store in China.There’s no stopping the tech giant.
  //             <a className="text-primary-6000 font-medium ml-1" href="/">
  //               Readmore
  //             </a>
  //           </span>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  // const renderCommentForm = () => {
  //   return (
  //     <div className="max-w-screen-md mx-auto pt-5">
  //       <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
  //         Responses (14)
  //       </h3>
  //       <form className="nc-SingleCommentForm mt-5">
  //         <Textarea />
  //         <div className="mt-2 space-x-3">
  //           <ButtonPrimary>Submit</ButtonPrimary>
  //           <ButtonSecondary>Cancel</ButtonSecondary>
  //         </div>
  //       </form>
  //     </div>
  //   );
  // };

  // const renderCommentLists = () => {
  //   return (
  //     <div className="max-w-screen-md mx-auto">
  //       <ul className="nc-SingleCommentLists space-y-5">
  //         <li>
  //           <Comment />
  //           <ul className="pl-4 mt-5 space-y-5 md:pl-11">
  //             <li>
  //               <Comment isSmall />
  //             </li>
  //           </ul>
  //         </li>
  //         <li>
  //           <Comment />
  //           <ul className="pl-4 mt-5 space-y-5 md:pl-11">
  //             <li>
  //               <Comment isSmall />
  //             </li>
  //           </ul>
  //         </li>
  //       </ul>
  //     </div>
  //   );
  // };

  const renderPostRelated = (article: any) => {
    return (
      <div
        key={article._id}
        className="relative aspect-w-3 aspect-h-4 rounded-3xl overflow-hidden group"
      >
        <Link href={article ? `/blog/${article.slug}` : `/`} />
        <Image
          className="object-cover transform group-hover:scale-105 transition-transform duration-300"
          src={article.thumbnailImage}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          alt=""
        />
        <div>
          <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black"></div>
        </div>
        <div className="flex flex-col justify-end items-start text-xs text-neutral-300 space-y-2.5 p-4">
          {/* <Badge name="Categories" /> */}
          <Badge name={article ? article?.category : "Things To Do"} />
          <h2 className="block text-lg font-semibold text-white ">
            <span className="line-clamp-2">{article?.articleTitle}</span>
          </h2>

          <div className="flex">
            {/* <span className="block text-neutral-200 hover:text-white font-medium truncate">
              {post.author.displayName}
            </span> */}
            <span className="mx-1.5 font-medium">{articles?.articleTitle}</span>
            {/* <span className="font-normal truncate">{post.date}</span>  */}
          </div>
        </div>
        <Link href={article ? `/blog/${article.slug}` : `/`} />
      </div>
    );
  };

  return (
    <>
      {loading ? (
        <ScaleLoader className="loader" color="#009aff" />
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Initial animation state (opacity 0 and move 50px down)
            animate={{ opacity: 1, y: 0 }} // Animation when component mounts (opacity 1 and move to initial position)
            transition={{ duration: 0.4, delay: 0.3 }} // Animation duration
          >
            <div className="nc-PageSingle ">
              {firstArticle.thumbnailImage && (
                <div
                  className="relative left-0 w-full h-full"
                  style={{
                    backgroundImage: `url(${firstArticle.thumbnailImage})`,
                    backgroundPosition: "50% 25%",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    opacity: "1",
                    height: "50vh",
                    margin: "0 auto",
                    marginBottom: "2rem",
                  }}
                ></div>
              )}
              {/* <div className=" my-40 sm:my-12 w-full relative h-full mt-0">
            <Image
              // className="rounded-xl w-full h-auto"
              src={firstArticle.thumbnailImage}
              alt=""
              width={800} // Set the width property to the original width of the image
              height={200}
              // objectFit="cover"
              // fill
              // style={{
              //   position: "absolute",
              //   top: "0",
              //   left: "0",
              //   width: "100%",
              //   paddingBottom: "500px",
              // }}
            />
          </div> */}
              {renderHeader()}

              {/* <div className="relative flex"> */}

              {/* </div> */}

              {/* </div> */}

              <div className="nc-SingleContent container space-y-10 px-4">
                {renderContent()}
                {renderTags()}
                <div className="max-w-screen-lg mx-auto border-b border-t border-neutral-100 dark:border-neutral-700"></div>
                {/* {renderAuthor()} */}
                {/* {renderCommentForm()} */}
                {/* {renderCommentLists()} */}
              </div>
              <div className="relative bg-neutral-100 dark:bg-neutral-800 py-16 lg:py-28 mt-16 lg:mt-24">
                <div className="container ">
                  <h2 className="text-3xl font-semibold">Related posts</h2>
                  <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                    {/*  */}
                    {/* {DEMO_POSTS.filter((_, i) => i < 4).map(renderPostRelated)} */}
                    {articles &&
                      articles
                        .filter((_: any, i: any) => i < 4)
                        .map((article: any) => renderPostRelated(article))}
                  </div>
                </div>
              </div>
              <div className="container py-24 lg:py-32">
                <SectionSliderNewCategories
                  // categories={DEMO_CATS_2}
                  categories={listings.data}
                  categoryCardType="card5"
                  itemPerRow={5}
                  heading="Suggestions for discovery"
                  subHeading="Popular places to stay that Must See New York recommends for you"
                  sliderStyle="style2"
                  from="/"
                  className=""
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default Page;
