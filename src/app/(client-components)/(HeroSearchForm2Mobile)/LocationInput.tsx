"use client";

import { useSearchContext } from "@/context/searchContext";
import { MapPinIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import React, { useState, useEffect, useRef, FC } from "react";

interface Props {
  onClick?: () => void;
  onChange?: (value: string) => void;
  className?: string;
  defaultValue?: string;
  headingText?: string;
}

const LocationInput: FC<Props> = ({
  onChange = () => {},
  className = "",
  defaultValue = "United States",
  headingText = "Where to?",
}) => {
  const [value, setValue] = useState("");
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const { search, setSearch } = useSearchContext();

  useEffect(() => {
    if (search.triggerMobileSearch) {
      setSearch((prevSearch: any) => ({
        ...prevSearch,
        name: value,
        isActive: true,
        category: {
          ...prevSearch.category,
          isActive: true,
        },
      }));

      setTimeout(() => {
        setSearch((prevSearch: any) => ({
          ...prevSearch,
          isActive: false,
          triggerMobileSearch: false,

          category: {
            ...prevSearch.category,
            isActive: false,
          },
        }));
      }, 2000);
    }
  }, [search]);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  interface ObjectWithKeys {
    [key: string]: string;
  }
  const object: ObjectWithKeys = {
    "Things to do": "attraction",
    Food: "restaurant",
    Stay: "hotel",
    Safety: "safety",
  };

  const [listings, setListings] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        let queryParams = `https://msny-backend-theta.vercel.app/api/v1/listings?`;

        if (search.tab.active) {
          queryParams += `category.name=${object[search.tab.active]}`;
        }
        if (value) {
          queryParams += `&name=${value}`;
        }

        const response = await axios.get(queryParams);

        const listing_response = response.data.data;

        setListings(listing_response);
      } catch (error) {
        console.error("errrorr is", error);
      }
    };

    fetchListings();
  }, [value, search.tab]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        let queryParams = `https://msny-backend-theta.vercel.app/api/v1/listings?`;
        if (search.tab.active) {
          queryParams += `category.name=${object[search.tab.active]}`;
        }

        const response = await axios.get(queryParams);

        const listing_response = response.data.data;

        setRecentSearches(listing_response);
      } catch (error) {
        console.error("errrorr is", error);
      }
    };

    fetchListings();
  }, [search.tab]);

  const router = useRouter();
  const handleSelectLocation = (item: any) => {
    setSearch((prevSearch: any) => ({
      ...prevSearch,
      hideModal: {
        isActive: true,
        value: true,
      },
    }));

    // DO NOT REMOVE SETTIMEOUT FUNC
    setTimeout(() => {
      setSearch((prevSearch: any) => ({
        ...prevSearch,
        hideModal: {
          isActive: false,
          value: false,
        },
      }));
      router.push(`/listing-stay-detail/${item.slug}`);
      setValue(item.name);
      onChange && onChange(item.name);
    }, 1000);
  };

  const renderSearchValues = ({
    heading,
    items,
  }: {
    heading: string;
    items: any;
  }) => {
    return (
      <>
        <p className="block font-semibold text-base">
          {heading || "Destinations"}
        </p>
        <div className="mt-3">
          {
            // items

            items.map((item: any, idx: any) => {
              if (idx > 5) return;
              else {
                return (
                  <div
                    className="py-2 mb-1 flex items-center space-x-3 text-sm"
                    onClick={() => handleSelectLocation(item)}
                    key={item.id}
                  >
                    <MapPinIcon className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
                    <span className="">{item.name}</span>
                  </div>
                );
              }
            })
          }
        </div>
      </>
    );
  };

  return (
    <div className={`${className}`} ref={containerRef}>
      <div className="p-5">
        <span className="block font-semibold text-xl sm:text-2xl">
          {headingText}
        </span>
        <div className="relative mt-5">
          <input
            className={`block w-full bg-transparent border px-4 py-3 pr-12 border-neutral-900 dark:border-neutral-200 rounded-xl focus:ring-0 focus:outline-none text-base leading-none placeholder-neutral-500 dark:placeholder-neutral-300 truncate font-bold placeholder:truncate`}
            placeholder={"Search destinations"}
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            ref={inputRef}
          />
          <span className="absolute right-2.5 top-1/2 -translate-y-1/2">
            <MagnifyingGlassIcon className="w-5 h-5 text-neutral-700 dark:text-neutral-400" />
          </span>
        </div>
        <div className="mt-7">
          {
            value
              ? renderSearchValues({
                  heading: "Locations",
                  items: listings,
                })
              : renderSearchValues({
                  heading: "Locations",
                  items: recentSearches,
                })
            // <>

            //   renderSearchValues({
            //     heading: "Popular destinations",
            //     items: [
            //       "Australia",
            //       "Canada",
            //       "Germany",
            //       "United Kingdom",
            //       "United Arab Emirates",
            //     ],
            //   })

            // </>
          }
        </div>
      </div>
    </div>
  );
};

export default LocationInput;
