import React, { FC } from "react";
import Heading from "@/shared/Heading";

export interface Statistic {
  id: string;
  heading: string;
  subHeading: string;
}

const FOUNDER_DEMO: Statistic[] = [
  {
    id: "1",
    heading: "Embarking on a Journey",
    subHeading:
      "Ready to enhance your journey with expertly curated guides and articles on dining, stays, events, safety and many more.",
  },
  {
    id: "2",
    heading: "Inspiring Adventures",
    subHeading:
      "Whether you're planning or dreaming, our content aims to spark your next journey. Join us in exploring the world's most captivating cities.",
  },
  {
    id: "3",
    heading: "Evolving Together",
    subHeading: "Your engagement drives our growth, shaping a platform that reflects its vibrant community.",
  },
  
];

export interface SectionStatisticProps {
  className?: string;
}

const SectionStatistic: FC<SectionStatisticProps> = ({ className = "" }) => {
  return (
    <div className={`nc-SectionStatistic relative ${className}`}>
      <Heading
        desc="At Must See Global, we're dedicated to providing world-class travel content and programs daily. Join our global community and explore with us!"
      >
        🚀 Fast Facts
      </Heading>
      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8">
        {FOUNDER_DEMO.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800"
          >
            <h3 className="text-2xl font-semibold leading-none text-neutral-900 md:text-3xl dark:text-neutral-200">
              {item.heading}
            </h3>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
              {item.subHeading}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionStatistic;
