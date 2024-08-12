"use client";

import React, { FC, useState } from "react";
import StaySearchForm from "./(stay-search-form)/StaySearchForm";
import ExperiencesSearchForm from "./(experiences-search-form)/ExperiencesSearchForm";
import RentalCarSearchForm from "./(car-search-form)/RentalCarSearchForm";
import FlightSearchForm from "./(flight-search-form)/FlightSearchForm";
import { useSearchContext } from "@/context/searchContext";
import { usePathname } from "next/navigation";

export type SearchTab =
  | "Stays"
  | "Experiences"
  | "Cars"
  | "Flights"
  | "New York"
  | "Italy"
  | "Paris"
  | "Chicago"
  | "New Delhi";

export interface HeroSearchFormProps {
  className?: string;
  currentTab?: SearchTab;
  currentPage?: "Stays" | "Experiences" | "Cars" | "Flights";
}

const HeroSearchForm: FC<HeroSearchFormProps> = ({
  className = "",
  currentTab = "Stays",
  currentPage,
}) => {
  const tabs: SearchTab[] = ["New York", "Italy", "Paris", "Chicago", "New Delhi"];

  interface ObjectWithKeys {
    [key: string]: string;
  }

  interface Categories {
    [key: string]: string;
  }

  const categories: Categories = {
    "https://www.mustseenewyork.com/": "New York",
    "//italy": "Italy",
    "/comingsoon/paris": "Paris",
    "/comingsoon/chicago": "Chicago",
    "/comingsoon": "New Delhi",
  };

  const page = usePathname();

  const object: ObjectWithKeys = {
    Food: "restaurant",
    "Things to do": "attraction",
    Stay: "hotel",
    Safety: "safety",
    Maps: "geographic",
    events: "events",
  };

  const [tabActive, setTabActive] = useState<SearchTab>(categories[page as string] as SearchTab);
  const { search, setSearch } = useSearchContext();

  const renderTab = () => {
    return (
      <ul className="ml-2 sm:ml-6 md:ml-12 flex space-x-5 sm:space-x-8 lg:space-x-11 overflow-x-auto hiddenScrollbar">
        {tabs.map((tab) => {
          const active = tab === tabActive;
          return (
            <li
              onClick={
                page == "/"
                  ? () => {
                      if (tab === "New York") {
                        window.open("https://www.mustseenewyork.com/", "_blank");
                      } else {
                        setTabActive(tab);
                        setSearch((prevSearch: any) => ({
                          ...prevSearch,
                          page,
                          category: {
                            name: object[tab],
                            isActive: true,
                          },
                        }));

                        setTimeout(() => {
                          setSearch((prevSearch: any) => ({
                            ...prevSearch,
                            category: {
                              name: object[tab],
                              isActive: false,
                            },
                          }));
                        }, 2000);
                      }
                    }
                  : () => {}
              }
              className={`flex-shrink-0 flex items-center cursor-pointer text-sm lg:text-base font-medium ${
                active
                  ? ""
                  : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-400"
              } `}
              key={tab}
            >
              {active && (
                <span className="block w-2.5 h-2.5 rounded-full bg-neutral-800 dark:bg-neutral-100 mr-2" />
              )}
              <span>{tab}</span>
            </li>
          );
        })}
      </ul>
    );
  };

  const renderForm = () => {
    switch (tabActive) {
      case "Stays":
        return <StaySearchForm />;
      case "Experiences":
        return <ExperiencesSearchForm />;
      case "Cars":
        return <RentalCarSearchForm />;
      case "Flights":
        return <FlightSearchForm />;
      default:
        return <StaySearchForm />;
    }
  };

  return (
    <div
      className={`nc-HeroSearchForm w-full max-w-6xl py-5 lg:py-0 ${className}`}
    >
      {renderTab()}
      {renderForm()}
    </div>
  );
};

export default HeroSearchForm;
