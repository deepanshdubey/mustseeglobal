"use client";

import { Popover, Transition } from "@headlessui/react";
import Input from "@/shared/Input";
import React, { FC, Fragment } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
}

const SearchDropdown: FC<Props> = ({ className = "" }) => {
  const inputRef = React.createRef<HTMLInputElement>();
  const router = useRouter();
  const searchBlogs = (e: any) => {
    e.preventDefault();

    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `https://msny-backend-theta.vercel.app/api/v1/articles?slug=${inputRef?.current?.value}`
        );
        // const response = await axios.get(
        //   `http://localhost:9000/api/v1/articles`
        // );
        const article = response.data;

        const result = article[0]?.slug ?? "";

        if (result) {
          router.push(`/blog/${result}`);
        } else {
          router.push(`/blog`);
        }
        // setArticle(article);
        // setfirstArticle(article);

        //

        // let first = article[0]
        //
        // setLoading(false); // Set loading to false when data is received
      } catch (error) {
        console.error("error while fetching single article", error);
        // setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchArticle();
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      searchBlogs(e);
    }
  };
  return (
    <React.Fragment>
      <Popover className={`relative ${className}`}>
        {({ open }) => {
          if (open) {
            setTimeout(() => {
              inputRef.current?.focus();
            }, 100);
          }

          return (
            <>
              <Popover.Button className="text-2xl md:text-[28px] w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center">
                <i className="las la-search"></i>
              </Popover.Button>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel
                  static
                  className="absolute right-0 z-10 top-full w-screen max-w-sm"
                >
                  <form
                    action=""
                    method="POST"
                    onSubmit={searchBlogs}
                    onKeyDown={handleKeyPress}
                  >
                    <Input
                      ref={inputRef}
                      rounded="rounded-full"
                      type="search"
                      placeholder="Type and press enter"
                    />
                    <input type="submit" hidden value="" />
                  </form>
                </Popover.Panel>
              </Transition>
            </>
          );
        }}
      </Popover>
    </React.Fragment>
  );
};

export default SearchDropdown;
