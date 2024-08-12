"use client";

import BackgroundSection from "@/components/BackgroundSection";
import ListingImageGallery from "@/components/listing-image-gallery/ListingImageGallery";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { ReactNode } from "react";
import MobileFooterSticky from "./(components)/MobileFooterSticky";
import { imageGallery as listingStayImageGallery } from "./listing-stay-detail/constant";
import { imageGallery as listingCarImageGallery } from "./listing-car-detail/constant";
import { imageGallery as listingExperienceImageGallery } from "./listing-experiences-detail/constant";
import { Route } from "next";
import { useListingContext } from "@/context/listingContext";

const DetailtLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const thisPathname = usePathname();
  const searchParams = useSearchParams();
  const modal = searchParams?.get("modal");
  const { listings } = useListingContext();
  const path = usePathname();
  const slug = path.split("/")[2];

  const handleCloseModalImageGallery = () => {
    let params = new URLSearchParams(document.location.search);
    params.delete("modal");
    router.push(`${thisPathname}/?${params.toString()}` as Route);
  };

  const fetchListing = (id: any) => {
    return fetch(
      `https://msny-backend-theta.vercel.app/api/v1/listings/${slug}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        return Object.values(data.data?.imageUrls);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        return null;
      });
  };

  const getImageGalleryListing = () => {
    //
    var page = thisPathname.slice(1);
    page = page.split("/").pop() as any;

    //

    if (thisPathname?.includes("/listing-stay-detail")) {
      const data = fetchListing(page)
        .then((data) => {
          return data;
        })
        .catch((err) => {
          //

          return [];
        });
      // return listingStayImageGallery;

      // return data;
    }
    if (thisPathname?.includes("/listing-car-detail")) {
      return listingCarImageGallery;
    }
    if (thisPathname?.includes("/listing-experiences-detail")) {
      return listingExperienceImageGallery;
    }

    return [];
  };

  return (
    <div className="ListingDetailPage">
      <ListingImageGallery
        isShowModal={modal === "PHOTO_TOUR_SCROLLABLE"}
        onClose={handleCloseModalImageGallery}
        images={getImageGalleryListing()}
      />

      <div className="container ListingDetailPage__content">{children}</div>

      {/* OTHER SECTION */}
      <div className="container py-24 lg:py-32">
        <div className="relative py-16">
          <BackgroundSection />
          <SectionSliderNewCategories
            heading="Explore by types of stays"
            subHeading="Explore the World Through Our Blogs"
            categoryCardType="card5"
            itemPerRow={5}
            sliderStyle="style2"
          />
        </div>
        <SectionSubscribe2 className="pt-24 lg:pt-32" />
        <SectionSliderNewCategories
          // categories={DEMO_CATS_2}
          categories={listings.data}
          categoryCardType="card5"
          itemPerRow={5}
          heading="Suggestions for discovery"
          subHeading="Popular places to stay that MustSee Global recommends for you"
          sliderStyle="style2"
          from="/"
          className="pt-24 lg:pt-32"
        />
      </div>

      {/* STICKY FOOTER MOBILE */}
      <MobileFooterSticky />
    </div>
  );
};

export default DetailtLayout;
