"use client";
// @ts-ignore

import React, { FC, useState, useEffect } from "react";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import { StayDataType } from "@/data/types";
import Pagination from "@/shared/Pagination";
import TabFilters from "./TabFilters";
import Heading2 from "@/shared/Heading2";
import StayCard2 from "@/components/StayCard2";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import EventsFilter from "../(stay-listings)/(filters)/EventsFilter";
import ThingsToDoFilter from "../(stay-listings)/(filters)/ThingsToDoFilter";
import FoodFilter from "../(stay-listings)/(filters)/FoodFilter";
import StayFilter from "../(stay-listings)/(filters)/StayFilter";
import SectionHeroArchivePage from "../(server-components)/SectionHeroArchivePage";
import { useSearchContext } from "@/context/searchContext";
import moment from "moment";

export interface SectionGridFilterCardProps {
  className?: string;
}

interface Listing {
  id: number;
  title: string;
  listedOn: string;
  // Add other properties based on your API response
}

const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
  className = "",
}) => {
  const [listings, setListings] = useState<Listing[]>([]);
  const currentPage = usePathname();
  const searchParams = useSearchParams();
  const { search, setSearch } = useSearchContext();
  const [firstSearch, setFirstSearch] = useState(true);

  interface ObjectWithKeys {
    [key: string]: string;
  }

  const object: ObjectWithKeys = {
    food: "restaurant",
    thingstodo: "attraction",
    stay: "hotel",
    safety: "safety",
    maps: "geographic",
    events: "events",
  };

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    //

    const fetchData = async () => {
      if (firstSearch || search.isActive) {
        var currentpage: string = currentPage.slice(1);
        // var name = searchParams.get("name");
        let queryParams = `https://msny-backend-deepansh.vercel.app/api/v1/listings?page=${page}`;

        // if (filter) {
        //   queryParams += `&filter=${filter}`;
        // }

        if (search.isActive && search.page == currentPage && search.name) {
          queryParams += `&name=${search.name}`;
        }

        if (!search.category.isActive) {
          queryParams += `&category.name=${object[currentpage]}`;
        } else if (search.page == currentPage) {
          queryParams += `&category.name=${search.category.name}`;
        }
        try {
          const response = await fetch(queryParams);
          const res = await response.json();

          setListings(res.data);
          setTotalPages(res.totalPages);
          if (firstSearch) setFirstSearch(false);
          //
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [currentPage, page, search.isActive]);

  const handleFilterChange = (value: string) => {
    setFilter(value);
    setPage(1);
  };

  const renderFilter = () => {
    switch (currentPage.slice(1)) {
      case "thingstodo":
        return <ThingsToDoFilter />;
        break;
      case "stay":
        return <StayFilter />;
        break;
      case "food":
        return <FoodFilter />;
        break;
      case "events":
        return <EventsFilter />;
        break;
      default:
        return <TabFilters />;
        break;
    }
  };

  return (
    <>
      <div className="container pt-10 pb-24 lg:pt-16 lg:pb-28">
        <SectionHeroArchivePage currentPage="Stays" currentTab="Stays" />
      </div>
      <div
        className={`nc-SectionGridFilterCard ${className}`}
        data-nc-id="SectionGridFilterCard"
      >
        {/* <div className="">
        <section>
          <h2>Fetched Listings</h2>
          <ul>
            {DEMO_STAY_LISTINGS.map((listing) => (
              <li key={listing.id}>{listing.title}</li>
              // Customize this based on your API response structure
            ))}
          </ul>
        </section>
      </div> */}

        {/* listings[listings.length]?.listedOn */}

        {/* <Heading2 heading={currentPage.slice(1)} listingNum={listings.length} listedOn={moment(listings[listings.length]?.listedOn).subtract(6, 'days').calendar()}/> */}
        <Heading2
          heading={currentPage.slice(1)}
          listingNum={listings.length}
          listedOn={moment(listings[listings.length]?.listedOn).format(
            "MMM Do YYYY"
          )}
        />

        <div className="mb-8 lg:mb-11">
          {renderFilter()}
          {/* <TabFilters /> */}
          {/* <EventsFilter /> */}
          {/* <ThingsToDoFilter /> */}
          {/* <FoodFilter /> */}
          {/* <StayFilter /> */}
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {listings.map((stay) => (
            <StayCard2 key={stay.id} data={stay} />
          ))}
        </div>
        <div className="flex mt-16 justify-center items-center">
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </div>
      </div>
    </>
  );
};

export default SectionGridFilterCard;
