import Heading from "@/shared/Heading";
import Image from "next/image";
import React from "react";

export interface People {
  id: string;
  name: string;
  job: string;
  avatar: string;
}

const FOUNDER_DEMO: People[] = [
  {
    id: "1",
    name: `Paris`,
    job: "City of Light and Romance",
    avatar:
      "https://ik.imagekit.io/ziw5issdz/New%20Folder/eiffel-tower-3349075_1280.jpg?updatedAt=1712449273547",
  },
  {
    id: "4",
    name: `Delhi`,
    job: "City of Love",
    avatar:
      "https://ik.imagekit.io/ziw5issdz/New%20Folder/junaid-ahmad-ansari-9WP-NVh2d6U-unsplash.jpg?updatedAt=1712449275150",
  },
  {
    id: "3",
    name: `Maldives`,
    job: "Paradise of Serenity",
    avatar:
      "https://ik.imagekit.io/ziw5issdz/New%20Folder/rayyu-maldives-xPsFXsbXJRg-unsplash.jpg?updatedAt=1712449276387",
  },
  {
    id: "2",
    name: `Rome`,
    job: "Eternal City of History",
    avatar:
      "https://ik.imagekit.io/ziw5issdz/New%20Folder/bastien-nvs-SprV1eqNrqM-unsplash.jpg?updatedAt=1712449308034",
  },
];

const SectionFounder = () => {
  return (
    <div className="nc-SectionFounder relative">
      <Heading
        desc="Discover the world's top cities with Must See Global! From Paris to Tokyo, Las Vegas to Rome, and Delhi to Phuket, our network of websites provides comprehensive guides to each destination's best attractions, dining, and accommodations. Start exploring with Must See Global today!"
      >
        ⛱ Must See Global
      </Heading>
      <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 xl:gap-x-8">
        {FOUNDER_DEMO.map((item) => (
          <div key={item.id} className="max-w-sm">
            <div className="relative h-0 aspect-h-1 aspect-w-1 rounded-xl overflow-hidden">
              <Image
                fill
                className=" object-cover"
                src={item.avatar}
                alt=""
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 30vw"
              />
            </div>

            <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">
              {item.name}
            </h3>
            <span className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400">
              {item.job}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFounder;
