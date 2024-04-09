import React, { FC, useState } from "react";
import LocationInput from "../LocationInput";
import GuestsInput from "../GuestsInput";
import ButtonSubmit from "../../../(client-components)/(HeroSearchForm)/ButtonSubmit";
import StayDatesRangeInput from "./StayDatesRangeInput";

const StaySearchForm: FC<{}> = ({}) => {
  const [location, setLocation] = useState();

  // console.log("location in search form", location);

  const renderForm = () => {
    // const searchListings = (e) => {
    //   e.preventDefault();
    //   console.log("listings search");
    // };
    return (
      <form className="relative m-auto mt-12 flex  rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800 ">
        <LocationInput
          location={location}
          setLocation={setLocation}
          className="flex-[1.5]"
        />

        <div className="pr-2 pt-2 xl:pt-4 xl:pr-4">
          <ButtonSubmit href="" />
        </div>
        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
        {/* <StayDatesRangeInput className="flex-1" /> */}
        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
        {/* <GuestsInput
          location={location}
          setLocation={setLocation}
          className="flex-1"
        /> */}
      </form>
    );
  };

  return renderForm();
};

export default StaySearchForm;
