import { useSearchContext } from "@/context/searchContext";
import { PathName } from "@/routers/types";
import Button from "@/shared/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

interface Props {
  // href?: PathName;
  href?: any;
  location?: any;
}

const ButtonSubmit: FC<Props> = ({ href = "/listing-stay-map", location }) => {
  // console.log("location in submit button", location);

  const { search, setSearch } = useSearchContext();
  const currentPage = usePathname();
  const searchListings = (e: any) => {
    e.preventDefault();
    console.log("listings search");
    setSearch((prevSearch: any) => ({
      ...prevSearch,
      page: currentPage,
      isActive: true,
    }));

    setTimeout(() => {
      setSearch((prevSearch: any) => ({
        ...prevSearch,
        page: currentPage,
        isActive: false,
      }));
    }, 2000);
  };

  return (
    // <Link
    <Button
      // href={href}
      //@ts-ignore
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        searchListings(e);
      }}
      type="button"
      className="h-14 md:h-16 w-full md:w-16 rounded-full bg-primary-6000 hover:bg-primary-700 flex items-center justify-center text-neutral-50 focus:outline-none"
    >
      <span className="mr-3 md:hidden">Search</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </Button>
  );
};

export default ButtonSubmit;
