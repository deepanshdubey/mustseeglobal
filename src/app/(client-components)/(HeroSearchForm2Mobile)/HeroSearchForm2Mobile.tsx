"use client";

import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Tab, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import ButtonSubmit from "./ButtonSubmit";
import { useTimeoutFn } from "react-use";
import StaySearchForm from "./(stay-search-form)/StaySearchForm";
import CarsSearchForm from "./(car-search-form)/CarsSearchForm";
import FlightSearchForm from "./(flight-search-form)/FlightSearchForm";
import { useSearchContext } from "@/context/searchContext";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";

const HeroSearchForm2Mobile = () => {
  const [showModal, setShowModal] = useState(false);
  const currentPage = usePathname();
  const pageToActiveTab: ObjectWithKeys = {
    "/thingstodo": "Things to do",
    "/food": "Food",
    "/stay": "Stay",
    "/safety": "Safety",
  };
  const [activeTab, setActiveTab] = useState(""); // Initialize active tab index
  const { search, setSearch } = useSearchContext();

  useEffect(() => {
    if (currentPage != "/") {
      setActiveTab(pageToActiveTab[currentPage]);
      setSearch((prevSearch: any) => ({
        ...prevSearch,
        tab: {
          active: pageToActiveTab[currentPage],
          page: currentPage,
        },
      }));
    } else {
      setActiveTab("Things to do");
      setSearch((prevSearch: any) => ({
        ...prevSearch,
        tab: {
          active: "Things to do",
          page: currentPage,
        },
      }));
    }
  }, [currentPage]);

  useEffect(() => {
    if (search.hideModal.isActive && search.hideModal.value) {
      setShowModal(false);
    }
  }, [search.hideModal]);

  const [activeSearch, setActiveSearch] = useState(false);
  const router = useRouter();

  const handleTabClick = (index: any) => {
    if (currentPage == "/") {
      setActiveTab(index);
      setSearch((prevSearch: any) => ({
        ...prevSearch,
        tab: {
          active: index,
          page: currentPage,
        },
      }));
    }
  };
  useEffect(() => {
    setTimeout(() => {}, 2000);
  }, [activeSearch]);

  interface ObjectWithKeys {
    [key: string]: string;
  }
  const object: ObjectWithKeys = {
    "Things to do": "attraction",
    Food: "restaurant",
    Stay: "hotel",
    Safety: "safety",
  };

  const searchListings = () => {
    //Redirection to relevant category page

    setSearch((prevSearch: any) => ({
      ...prevSearch,
      page: currentPage,
      category: {
        ...prevSearch.category,
        name: object[activeTab],
      },
      triggerMobileSearch: true,
    }));

    setActiveSearch(true);

    // setTimeout(() => {
    //   //Implementing searching
    //   setSearch((prevSearch: any) => ({
    //     ...prevSearch,
    //     page: activeTab,
    //     isActive: true,
    //   }));

    //   setTimeout(() => {
    //     setSearch((prevSearch: any) => ({
    //       ...prevSearch,
    //       page: activeTab,
    //       isActive: false,
    //     }));
    //   }, 2000);
    // }, 4000);
  };

  // FOR RESET ALL DATA WHEN CLICK CLEAR BUTTON
  const [showDialog, setShowDialog] = useState(false);
  let [, , resetIsShowingDialog] = useTimeoutFn(() => setShowDialog(true), 1);
  //
  function closeModal() {
    setShowModal(false);
  }

  function openModal() {
    setShowModal(true);
  }

  const renderButtonOpenModal = () => {
    return (
      <button
        onClick={openModal}
        className="relative flex items-center w-full border border-neutral-200 dark:border-neutral-6000 px-4 py-2 pr-11 rounded-full shadow-lg"
      >
        <MagnifyingGlassIcon className="flex-shrink-0 w-5 h-5" />

        <div className="ml-3 flex-1 text-left overflow-hidden py-1">
          <span className="block font-medium text-sm">Where to?</span>
          {/* <span className="block mt-0.5 text-xs font-light text-neutral-500 dark:text-neutral-400 "> */}
          {/* <span className="line-clamp-1"> */}
          {/* Anywhere • Any week • Add guests */}
          {/* Anywhere • Any week • Add guests */}
          {/* </span> */}
          {/* </span> */}
        </div>

        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-6000 dark:text-neutral-300">
          <svg
            viewBox="0 0 16 16"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            className="block w-4 h-4"
            fill="currentColor"
          >
            <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
          </svg>
        </span>
      </button>
    );
  };

  return (
    <div className="HeroSearchForm2Mobile">
      {renderButtonOpenModal()}
      <Transition appear show={showModal} as={Fragment}>
        <Dialog
          as="div"
          className="HeroSearchFormMobile__Dialog relative z-max"
          onClose={closeModal}
        >
          <div className="fixed inset-0 bg-neutral-100 dark:bg-neutral-900">
            <div className="flex h-full">
              <Transition.Child
                as={Fragment}
                enter="ease-out transition-transform"
                enterFrom="opacity-0 translate-y-52"
                enterTo="opacity-100 translate-y-0"
                leave="ease-in transition-transform"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-52"
              >
                <Dialog.Panel className="relative h-full overflow-hidden flex-1 flex flex-col justify-between ">
                  {showDialog && (
                    <Tab.Group manual>
                      <div className="absolute left-4 top-4">
                        <button className="" onClick={closeModal}>
                          <XMarkIcon className="w-5 h-5 text-black dark:text-white" />
                        </button>
                      </div>

                      <Tab.List className="pt-12 flex w-full justify-center font-semibold text-sm sm:text-base text-neutral-500 dark:text-neutral-400 space-x-6 sm:space-x-8">
                        {["New York", "Italy", "Paris", "Chicago"].map(
                          (item, index) => (
                            <Tab key={index} as={Fragment}>
                              {({ selected }) => (
                                <div className="relative focus:outline-none focus-visible:ring-0 outline-none select-none">
                                  <div
                                    className={`${
                                      item == activeTab
                                        ? "text-black dark:text-white"
                                        : ""
                                    }  `}
                                    onClick={() =>
                                      currentPage == "/"
                                        ? handleTabClick(item)
                                        : () => {}
                                    }
                                  >
                                    {item}
                                  </div>
                                  {item == activeTab && (
                                    <span
                                      // onClick={handleTabClick(item)}
                                      className="absolute inset-x-0 top-full border-b-2 border-black dark:border-white "
                                    ></span>
                                  )}
                                </div>
                              )}
                            </Tab>
                          )
                        )}
                      </Tab.List>
                      <div className="flex-1 pt-3 px-1.5 sm:px-4 flex overflow-hidden">
                        <Tab.Panels className="flex-1 overflow-y-auto hiddenScrollbar py-4">
                          <Tab.Panel>
                            <div className="transition-opacity animate-[myblur_0.4s_ease-in-out]">
                              <StaySearchForm />
                            </div>
                          </Tab.Panel>
                          <Tab.Panel>
                            <div className="transition-opacity animate-[myblur_0.4s_ease-in-out]">
                              <StaySearchForm />
                            </div>
                          </Tab.Panel>
                          <Tab.Panel>
                            <div className="transition-opacity animate-[myblur_0.4s_ease-in-out]">
                              {/* <CarsSearchForm /> */}
                              <StaySearchForm />
                            </div>
                          </Tab.Panel>
                          <Tab.Panel>
                            <div className="transition-opacity animate-[myblur_0.4s_ease-in-out]">
                              {/* <FlightSearchForm /> */}
                              <StaySearchForm />
                            </div>
                          </Tab.Panel>
                        </Tab.Panels>
                      </div>
                      <div className="px-4 py-3 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700 flex justify-between">
                        <button
                          type="button"
                          className="underline font-semibold flex-shrink-0"
                          onClick={() => {
                            setShowDialog(false);
                            resetIsShowingDialog();
                          }}
                        >
                          Clear all
                        </button>
                        <ButtonSubmit
                          onClick={() => {
                            closeModal();
                            searchListings();
                          }}
                        />
                      </div>
                    </Tab.Group>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default HeroSearchForm2Mobile;
