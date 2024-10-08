"use client";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import { StayDataType } from "@/data/types";
import ButtonPrimary from "@/shared/ButtonPrimary";
import HeaderFilter from "./HeaderFilter";
import StayCard from "./StayCard";
import StayCard2 from "./StayCard2";
import { useListingContext } from "@/context/listingContext";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Pagination from "@/shared/Pagination";
import { useSearchContext } from "@/context/searchContext";
import { useScratch } from "react-use";
// import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

// OTHER DEMO WILL PASS PROPS
const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS.filter((_, i) => i < 8);

//
export interface SectionGridFeaturePlacesProps {
  stayListings?: StayDataType[];
  gridClass?: string;
  heading?: ReactNode;
  subHeading?: ReactNode;
  headingIsCenter?: boolean;
  tabs?: string[];
  cardType?: "card1" | "card2";
  from?: any;
}

const SectionGridFeaturePlaces: FC<SectionGridFeaturePlacesProps> = ({
  stayListings = DEMO_DATA,
  gridClass = "",
  heading = "Featured places to stay",
  subHeading = "Popular places to stay that Must See Global recommends for you",
  headingIsCenter,
  // tabs = ["New York", "Tokyo", "Paris", "London"],
  tabs = ["Must See Global"],
  cardType = "card2",
  from,
}) => {
  //

  const renderCard = (stay: StayDataType) => {
    let CardName = StayCard;
    switch (cardType) {
      case "card1":
        CardName = StayCard;
        break;
      // case "card2":
      //   CardName = StayCard2;
      //   break;

      default:
        CardName = StayCard;
    }

    return <CardName key={stay.id} data={stay} />;
  };
  // const { listings } = useListingContext();
  const [listings, setListings] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const { search, setSearch } = useSearchContext();
  const [firstSearch, setFirstSearch] = useState(true);
  const [pageChanged, setPageChanged] = useState(true);
  const [oldQuery, setOldQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const currentPage = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      if (firstSearch || search.isActive || search.category.isActive) {
        let queryParams = `https://msny-backend-theta.vercel.app/api/v1/listings?`;

        if (page) {
          queryParams += `page=1&limit=16`;
        }
        if (search.isActive && search.name && search.page == currentPage) {
          queryParams += `&name=${search.name}`;
          // setSearch((prevValue) => ({ ...prevValue, isActive: false }));
        }

        if (
          search.category.isActive &&
          search.category.name &&
          search.page == currentPage
        ) {
          queryParams += `&category.name=${search.category.name}`;
        }

        setOldQuery(queryParams);

        console.log("query params is", queryParams);

        try {
          const response = await fetch(
            // `https://msny-backend-deepansh.vercel.app/api/v1/listings?category.name=${object[page]}`
            queryParams
          );
          const res = await response.json();

          //

          setListings(res.data);
          setTotalPages(res.totalPages);
          if (firstSearch) setFirstSearch(false);
          //
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else if (pageChanged) {
        // Split the query string into an array of key-value pairs
        let paramsArray = oldQuery.split("?")[1].split("&");

        // Filter out the 'page' parameter
        paramsArray = paramsArray.filter((param) => !param.startsWith("page="));

        // Reconstruct the updated query string
        let updatedQueryString = paramsArray.join("&");

        setPageChanged(false);
        const queryParams = `?page=${page}&` + updatedQueryString;

        try {
          const response = await fetch(
            `https://msny-backend-theta.vercel.app/api/v1/listings` +
              queryParams
          );

          setOldQuery(
            `https://msny-backend-theta.vercel.app/api/v1/listings` +
              queryParams
          );
          const res = await response.json();

          setListings(res.data);
          setTotalPages(res.totalPages);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      setLoading(false);
    };

    fetchData();
  }, [page, search.isActive, search.category.isActive]);

  return (
    <>
      {!loading ? (
        <div className="nc-SectionGridFeaturePlaces relative">
          <HeaderFilter
            tabActive={"New York"}
            subHeading={subHeading}
            tabs={tabs}
            heading={heading}
            from={from}
          />
          <div
            className={`grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${gridClass}`}
          >
            {/* {stayListings.map((stay) => renderCard(stay))} */}
            {/* {listings.map((stay) => renderCard(stay))} */}
          </div>
          <div className="flex mt-8 mb-8 justify-center items-center">
            {/* <ButtonPrimary loading>Show me more</ButtonPrimary> */}
            {/* <Link href={"/listings"}>
          <ButtonPrimary>Show me more</ButtonPrimary>
        </Link> */}
            {/* <Pagination
              page={page}
              setPage={setPage}
              totalPages={totalPages}
              setPageChanged={setPageChanged}
            /> */}
          </div>
        </div>
      ) : (
        <>
          <div className="listingSkeleton">
            <Box sx={{ pt: 0.5 }}>
              <Skeleton width="70%" />
              <Skeleton width="20%" />
              <Skeleton width="20%" />
              <Skeleton width="50%" />
              <Skeleton width="50%" />
              <Skeleton width="70%" />
            </Box>
            <Box sx={{ pt: 0.5 }}>
              <Skeleton width="70%" />
              <Skeleton width="20%" />
              <Skeleton width="20%" />
              <Skeleton width="50%" />
              <Skeleton width="50%" />
              <Skeleton width="70%" />
            </Box>
            <Box sx={{ pt: 0.5 }}>
              <Skeleton width="70%" />
              <Skeleton width="20%" />
              <Skeleton width="20%" />
              <Skeleton width="50%" />
              <Skeleton width="50%" />
              <Skeleton width="70%" />
            </Box>
            <Box sx={{ pt: 0.5 }}>
              <Skeleton width="70%" />
              <Skeleton width="20%" />
              <Skeleton width="20%" />
              <Skeleton width="50%" />
              <Skeleton width="50%" />
              <Skeleton width="70%" />
            </Box>
          </div>
        </>

        // <Skeleton variant="rectangular" width={210} height={118} />
      )}
    </>
  );
};

export default SectionGridFeaturePlaces;
