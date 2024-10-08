"use client";

import { ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";
import React, { useState, useRef, useEffect, FC } from "react";
import ClearDataButton from "./ClearDataButton";
import { log } from "console";
import { useSearchContext } from "@/context/searchContext";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";

export interface LocationInputProps {
  placeHolder?: string;
  desc?: string;
  className?: string;
  divHideVerticalLineClass?: string;
  autoFocus?: boolean;
  location?: any;
  setLocation?: any;
}

const LocationInput: FC<LocationInputProps> = ({
  autoFocus = false,
  placeHolder = "Location",
  desc = "Where are you going?",
  className = "nc-flex-1.5",
  divHideVerticalLineClass = "left-10 -right-0.5",
  location,
  setLocation,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState("");
  const [showPopover, setShowPopover] = useState(autoFocus);

  const { search, setSearch } = useSearchContext();

  useEffect(() => {
    setShowPopover(autoFocus);
  }, [autoFocus]);

  useEffect(() => {
    if (eventClickOutsideDiv) {
      document.removeEventListener("click", eventClickOutsideDiv);
    }
    showPopover && document.addEventListener("click", eventClickOutsideDiv);
    return () => {
      document.removeEventListener("click", eventClickOutsideDiv);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showPopover]);

  useEffect(() => {
    if (showPopover && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showPopover]);

  const eventClickOutsideDiv = (event: MouseEvent) => {
    if (!containerRef.current) return;
    // CLICK IN_SIDE
    if (!showPopover || containerRef.current.contains(event.target as Node)) {
      return;
    }
    // CLICK OUT_SIDE
    setShowPopover(false);
  };
  const currentPage = usePathname();
  const router = useRouter();
  const handleSelectLocation = (item: any) => {
    setValue(item);
    setLocation(item);
    setShowPopover(false);
    // setSearch((prevSearch: any) => ({
    //   ...prevSearch,
    //   name: item.name,
    // }));

    if (item == "New York") {
      window.open("https://www.mustseenewyork.com/", "_blank");
    } else {
      router.push("/comingsoon");
    }
  };

  const [listings, setListings] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [searchValues, setSearchValues] = useState([]);

  const [firstSearch, setFirstSearch] = useState(true);

  interface ObjectWithKeys {
    [key: string]: string;
  }

  const object: ObjectWithKeys = {
    "/food": "restaurant",
    "/thingstodo": "attraction",
    "/stay": "hotel",
    "/safety": "safety",
    "/maps": "geographic",
    "/events": "events",
  };

  // useEffect(() => {
  //   const fetchListings = async () => {
  //     if (firstSearch || search.category.isActive) {
  //       try {
  //         let queryParams = `https://msny-backend-theta.vercel.app/api/v1/listings?`;
  //         if (search.category.isActive && currentPage == "/") {
  //           queryParams += `category.name=${search.category.name}`;
  //         } else if (currentPage != "/") {
  //           queryParams += `category.name=${object[currentPage]}`;
  //         }

  //         const response = await axios.get(queryParams);

  //         const listing_response = response.data.data;

  //         setListings(listing_response);
  //         //@ts-ignore
  //         const arr: any = [];
  //         listing_response.slice(0, 5).map((listing: any) => {
  //           arr.push(listing);
  //         });
  //         setRecentSearches(arr);
  //         setSearchValues(arr);
  //         setFirstSearch(false);
  //       } catch (error) {
  //         console.error("errrorr is", error);
  //       }
  //     }
  //   };

  //   fetchListings();
  // }, [search, currentPage]);

  // useEffect(() => {
  //   setSearchValues((prevValue) => {
  //     const arr = listings?.filter((listing: any) =>
  //       listing.name.toLowerCase().includes(value.toLowerCase())
  //     );

  //     return arr?.slice(0, 5);
  //   });
  // }, [listings, value]);

  const cities = [
    "New York",
    "Singapore",
    "Paris",
    "Tokyo",
    "Maldives",
    "Amsterdam",
    "Antalya",
    "Athens",
    "Austin",
    "Bali",
    "Bangkok",
    "Barcelona",
    "Beijing",
    "Belgrade",
    "Bern",
    "Bogota",
    "Brussels",
    "Budapest",
    "Buenos Aires",
    "Cairo",
    "Cancun",
    "Capetown",
    "Caracas",
    "Copenhagen",
    "Corfu",
    "Costarica",
    "Cozumel",
    "Crete",
    "Dallas",
    "Delhi",
    "Dublin",
    "Edinburgh",
    "Florence",
    "Guangzhou",
    "Havana",
    "Helsinki",
    "Hong Kong",
    "Ibiza",
    "Isla Mujeres",
    "Istanbul",
    "Jakarta",
    "Kuala Lumpur",
    "Kyiv",
    "Lapaz",
    "Las Vegas",
    "Lima",
    "Lisbon",
    "Luxembourg",
    "Lyon",
    "Marrakech",
    "Maui",
    "Medelin",
    "Medellin",
    "Monaco",
    "Montevideo",
    "Moscow",
    "Mumbai",
    "Mykonos",
    "New York City",
    "Nice",
    "Nicosia",
    "Ny",
    "Osaka",
    "Oslo",
    "Panama",
    "Phuket",
    "Prague",
    "Puerto Rico",
    "Puerto Vallarta",
    "Quebec",
    "Quito",
    "Reykjavik",
    "Riga",
    "Rio De Janeiro",
    "Rome",
    "San Jose",
    "Santiago",
    "Santorini",
    "Sao Paulo",
    "Seoul",
    "Seville",
    "Shanghai",
    "Stockholm",
    "Strasbourg",
    "Taipei",
    "Toronto",
    "Tulum",
    "Valencia",
    "Valletta",
    "Vancouver",
    "Venice",
    "Vienna",
    "Warsaw",
    "Zagreb",
  ];

  const renderRecentSearches = () => {
    return (
      <>
        <h3 className="block mt-2 sm:mt-0 px-4 sm:px-8 font-semibold text-base sm:text-lg text-neutral-800 dark:text-neutral-100">
          Recent searches
        </h3>
        <div className="mt-2">
          {cities.map((item: any) => (
            <span
              onClick={() => handleSelectLocation(item)}
              key={item}
              className="flex px-4 sm:px-8 items-center space-x-3 sm:space-x-4 py-4 hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer"
            >
              <span className="block text-neutral-400">
                <ClockIcon className="h-4 sm:h-6 w-4 sm:w-6" />
              </span>
              <span className=" block font-medium text-neutral-700 dark:text-neutral-200">
                {item}
              </span>
            </span>
          ))}
        </div>
      </>
    );
  };

  const renderSearchValue = () => {
    return (
      <>
        {
          // [
          //   "Ha Noi, Viet Nam",
          //   "San Diego, CA",
          //   "Humboldt Park, Chicago, IL",
          //   "Bangor, Northern Ireland",
          // ]
          cities?.map((item: any) => (
            <span
              onClick={() => handleSelectLocation(item)}
              key={item}
              className="flex px-4 sm:px-8 items-center space-x-3 sm:space-x-4 py-4 hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer"
            >
              <span className="block text-neutral-400">
                <ClockIcon className="h-4 w-4 sm:h-6 sm:w-6" />
              </span>
              <span className="block font-medium text-neutral-700 dark:text-neutral-200">
                {item.name}
              </span>
            </span>
          ))
        }
      </>
    );
  };

  return (
    <div className={`relative flex ${className}`} ref={containerRef}>
      <div
        onClick={() => setShowPopover(true)}
        className={`flex z-10 flex-1 relative [ nc-hero-field-padding ] flex-shrink-0 items-center space-x-3 cursor-pointer focus:outline-none text-left  ${
          showPopover ? "nc-hero-field-focused" : ""
        }`}
      >
        <div className="text-neutral-300 dark:text-neutral-400">
          <MapPinIcon className="w-5 h-5 lg:w-7 lg:h-7" />
        </div>
        <div className="flex-grow">
          <input
            className={`block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none focus:placeholder-neutral-300 xl:text-lg font-semibold placeholder-neutral-800 dark:placeholder-neutral-200 truncate`}
            placeholder={placeHolder}
            value={value}
            autoFocus={showPopover}
            onChange={(e) => {
              setValue(e.currentTarget.value);

              setSearch((prevSearch: any) => ({
                ...prevSearch,
                page: currentPage,
                name: e.target.value,
              }));
            }}
            ref={inputRef}
          />
          <span className="block mt-0.5 text-sm text-neutral-400 font-light ">
            <span className="line-clamp-1">{!!value ? placeHolder : desc}</span>
          </span>
          {value && showPopover && (
            <ClearDataButton
              onClick={() => {
                setValue("");
              }}
            />
          )}
        </div>
      </div>

      {showPopover && (
        <div
          className={`h-8 absolute self-center top-1/2 -translate-y-1/2 z-0 bg-white dark:bg-neutral-800 ${divHideVerticalLineClass}`}
        ></div>
      )}

      {showPopover && (
        <div className="absolute left-0 z-40 w-full min-w-[300px] sm:min-w-[500px] bg-white dark:bg-neutral-800 top-full mt-3 py-3 sm:py-6 rounded-3xl shadow-xl max-h-96 overflow-y-auto">
          {value ? renderSearchValue() : renderRecentSearches()}
        </div>
      )}
    </div>
  );
};

export default LocationInput;
