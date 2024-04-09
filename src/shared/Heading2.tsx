import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { ReactNode } from "react";

export interface Heading2Props {
  heading?: ReactNode;
  subHeading?: ReactNode;
  className?: string;
}

const Heading2: React.FC<Heading2Props> = ({
  className = "",
  heading = "Stays in New York",
  // heading = "",
  subHeading,
}) => {
  const object = {
    food: "Food",
    thingstodo: "Things to Do",
    stay: "Stay",
    safety: "Safety",
    maps: "Maps",
    events: "Events",
  };

  return (
    <div className={`mb-12 lg:mb-16 ${className}`}>
      <h2 className="text-4xl font-semibold">
        {/* @ts-ignore */}
        {object[`${heading}`]} in New York
      </h2>
      {subHeading ? (
        subHeading
      ) : (
        <span className="block text-neutral-500 dark:text-neutral-400 mt-3">
          4 stays
          <span className="mx-2">·</span>
          Feb 20 - 22
          <span className="mx-2">·</span>2 Guests
        </span>
      )}
    </div>
  );
};

export default Heading2;
