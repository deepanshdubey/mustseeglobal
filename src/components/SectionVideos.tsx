"use client";

import Heading from "@/shared/Heading";
import NcPlayIcon from "@/shared/NcPlayIcon";
import NcPlayIcon2 from "@/shared/NcPlayIcon2";
import Image from "next/image";
import React, { FC, useState } from "react";

export interface VideoType {
  id: string;
  title: string;
  thumbnail: string;
}

export interface SectionVideosProps {
  videos?: VideoType[];
  className?: string;
}

// const VIDEOS_DEMO: VideoType[] = [
//   {
//     id: "Ao7e4iisKMs",
//     title: "Magical Scotland - 4K Scenic Relaxation Film with Calming Music",
//     thumbnail:
//       "https://images.pexels.com/photos/131423/pexels-photo-131423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//   },
//   {
//     id: "a5V6gdu5ih8",
//     title: "Magical Scotland - 4K Scenic Relaxation Film with Calming Music",
//     thumbnail:
//       "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//   },
//   {
//     id: "MuB7HHeuNbc",
//     title: "Magical Scotland - 4K Scenic Relaxation Film with Calming Music",
//     thumbnail:
//       "https://images.pexels.com/photos/1660995/pexels-photo-1660995.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//   },
//   {
//     id: "eEaZvEZye84",
//     title: "Magical Scotland - 4K Scenic Relaxation Film with Calming Music",
//     thumbnail:
//       "https://images.pexels.com/photos/4983184/pexels-photo-4983184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//   },
//   {
//     id: "EuDJZDaSP0Q",
//     title: "Magical Scotland - 4K Scenic Relaxation Film with Calming Music",
//     thumbnail:
//       "https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//   },
// ];

const VIDEOS_DEMO: any[] = [
  {
    id: "Ao7e4iisKMs",
    title: "Magical Scotland - 4K Scenic Relaxation Film with Calming Music",
    thumbnail:
      "https://ik.imagekit.io/ziw5issdz/Thumbnail%20Images/thomas-habr-6NmnrAJPq7M-unsplash.jpg?updatedAt=1710343433578",
    video:
      "https://ik.imagekit.io/ziw5issdz/Pexels-Cityxcape-5796436%20(1080P)%20(1)(1).mp4?updatedAt=1710341430145",
  },
  {
    id: "a5V6gdu5ih8",
    title: "Magical Scotland - 4K Scenic Relaxation Film with Calming Music",
    thumbnail:
      "https://ik.imagekit.io/ziw5issdz/Video%20Thumbnail%20Images/video-capture-9147.png?updatedAt=1710362821601",
    video:
      "https://ik.imagekit.io/ziw5issdz/Production%20Id%205180403%20(1080P).mp4?updatedAt=1710342827354",
  },
  {
    id: "MuB7HHeuNbc",
    title: "Magical Scotland - 4K Scenic Relaxation Film with Calming Music",
    thumbnail:
      "https://ik.imagekit.io/ziw5issdz/Video%20Thumbnail%20Images/video-capture-344.png?updatedAt=1710362821537",
    video:
      "https://ik.imagekit.io/ziw5issdz/Pexels-Joseph-A-Eulo-5656146%20(1080P)(1).mp4?updatedAt=1710342212590",
  },
  {
    id: "eEaZvEZye84",
    title: "Magical Scotland - 4K Scenic Relaxation Film with Calming Music",
    thumbnail:
      "https://ik.imagekit.io/ziw5issdz/Video%20Thumbnail%20Images/video-capture-2345.png?updatedAt=1710362821697",
    video:
      "https://ik.imagekit.io/ziw5issdz/MSNY%201.mp4?updatedAt=1710340480120",
  },
  {
    id: "EuDJZDaSP0Q",
    title: "Magical Scotland - 4K Scenic Relaxation Film with Calming Music",
    thumbnail:
      "https://ik.imagekit.io/ziw5issdz/Video%20Thumbnail%20Images/video-capture-3168.png?updatedAt=1710362821642",
    video:
      "https://ik.imagekit.io/ziw5issdz/pexels-cityxcape-5727833%20(1080p).mp4?updatedAt=1710340479254",
  },
];

const SectionVideos: FC<SectionVideosProps> = ({
  videos = VIDEOS_DEMO,
  className = "",
}) => {
  const [isPlay, setIsPlay] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);

  const renderMainVideo = () => {
    // const video: VideoType = videos[currentVideo];
    const video: any = videos[currentVideo];
    return (
      <div
        className="group aspect-w-16 aspect-h-16 sm:aspect-h-9 bg-neutral-800 rounded-3xl overflow-hidden border-4 border-white dark:border-neutral-900 sm:rounded-[50px] sm:border-[10px] will-change-transform"
        title={video.title}
      >
        {isPlay ? (
          <iframe
            // src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            src={video.video}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <div
              onClick={() => setIsPlay(true)}
              className="cursor-pointer absolute inset-0 flex items-center justify-center z-10"
            >
              <NcPlayIcon />
            </div>

            <Image
              fill
              className="object-cover w-full h-full transform transition-transform group-hover:scale-105 duration-300 "
              src={video.thumbnail}
              title={video.title}
              alt={video.title}
              sizes="(max-width: 1000px) 100vw,
                (max-width: 1200px) 75vw,
                50vw"
            />
          </>
        )}
      </div>
    );
  };

  const renderSubVideo = (video: VideoType, index: number) => {
    if (index === currentVideo) return null;
    return (
      <div
        className="group relative aspect-h-16 aspect-w-16 rounded-2xl cursor-pointer overflow-hidden sm:aspect-h-12 sm:rounded-3xl lg:aspect-h-9 "
        onClick={() => {
          setCurrentVideo(index);
          !isPlay && setIsPlay(true);
        }}
        title={video.title}
        key={String(index)}
      >
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <NcPlayIcon2 />
        </div>
        <Image
          fill
          className="object-cover w-full h-full transform transition-transform group-hover:scale-110 duration-300 "
          src={video.thumbnail}
          title={video.title}
          alt={video.title}
          sizes="(max-width: 300px) 100vw,
          (max-width: 1200px) 50vw,
          25vw"
        />
      </div>
    );
  };

  return (
    <div className={`nc-SectionVideos ${className}` }>
      <Heading className="flex flex-col-12" desc="Embark on a visual journey through iconic landmarks and hidden gems of cities worldwide, experiencing stunning landscapes and unique attractions that make each city unforgettable.">
        🎬 Discover famous cities in Action!
      </Heading>

      <div className="flex flex-col relative sm:pr-4 sm:py-1 md:pr-6 md:py-2 xl:pr-5 xl:py-5 lg:flex-row">
        <div className="absolute -top-4 -bottom-4 -right-4 w-2/3 rounded-3xl bg-primary-100 bg-opacity-40 z-0 sm:rounded-[50px] md:top-0 md:bottom-0 md:right-0 xl:w-1/2 dark:bg-neutral-800 dark:bg-opacity-40"></div>
        <div className="flex-grow relative pb-2 sm:pb-4 lg:pb-0 lg:pr-5 xl:pr-6">
          {renderMainVideo()}
        </div>
        <div className="flex-shrink-0 grid gap-2 grid-cols-4 sm:gap-6 lg:grid-cols-1 lg:w-36 xl:w-40">
          {videos.map(renderSubVideo)}
        </div>
      </div>
    </div>
  );
};

export default SectionVideos;
