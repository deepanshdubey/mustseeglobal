import { MegamenuItem, NavItemType } from "@/shared/Navigation/NavigationItem";
import ncNanoId from "@/utils/ncNanoId";
import { Route } from "@/routers/types";
import __megamenu from "./jsons/__megamenu.json";

const otherPageChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/listings",
    // href: "/blog",
    // href: "/listing-stay",
    name: "Location Directory",
    // name: "Tours & Sightseeing",
  },
  {
    id: ncNanoId(),
    href: "/blog",
    // href: "/blog",
    // href: "/listing-stay",
    // name: "Night Life",
    name: "Travel Insights",
    isNew: true,
  },
];

export const NAVIGATION_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    // href: "/blog",
    href: "/thingstodo",
    // href: "/listing-stay",
    name: "Things To Do",
    type: "none",
  },
  {
    id: ncNanoId(),
    // href: "/blog",
    href: "/food",
    name: "Food",
    type: "none",
  },
  {
    id: ncNanoId(),
    // href: "/blog",
    href: "/stay",
    name: "Stay",
    type: "none",
  },
  {
    id: ncNanoId(),
    // href: "/blog",
    href: "/safety",
    name: "Safety",
    type: "none",
  },
  {
    id: ncNanoId(),
    // href: "/blog",
    href: "/maps",
    name: "Maps",
    type: "none",
  },
  {
    id: ncNanoId(),
    // href: "/blog",
    href: "/events",
    name: "Events",
    type: "none",
  },

  {
    id: ncNanoId(),
    // href: "#",
    name: "Explore More",
    type: "dropdown",
    children: otherPageChildMenus,
  },
];

// NOT USEFUL CODE BELOW HERE

export const NAVIGATION_DEMO_2: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/thingstodo",
    name: "Things to do",
    type: "dropdown",
    isNew: true,
  },

  //
  {
    id: ncNanoId(),
    href: "/listing-stay",
    name: "Listing pages",
    children: [
      { id: ncNanoId(), href: "/listing-stay", name: "Stay listings" },
      {
        id: ncNanoId(),
        href: "/listing-stay-map",
        name: "Stay listings (map)",
      },
      // { id: ncNanoId(), href: "/listing-stay-detail", name: "Stay detail" },
      { id: ncNanoId(), href: "/", name: "Stay detail" },

      //
      {
        id: ncNanoId(),
        href: "/listing-experiences",
        name: "Experiences listings",
      },
      {
        id: ncNanoId(),
        href: "/listing-experiences-map",
        name: "Experiences (map)",
      },
      {
        id: ncNanoId(),
        href: "/listing-experiences-detail",
        name: "Experiences detail",
      },
    ],
  },
  {
    id: ncNanoId(),
    href: "/listing-car",
    name: "Listing pages",
    children: [
      { id: ncNanoId(), href: "/listing-car", name: "Cars listings" },
      { id: ncNanoId(), href: "/listing-car-map", name: "Cars listings (map)" },
      { id: ncNanoId(), href: "/listing-car-detail", name: "Car detail" },

      //
      {
        id: ncNanoId(),
        href: "/listing-real-estate",
        name: "Real estate listings",
      },
      {
        id: ncNanoId(),
        href: "/listing-real-estate-map",
        name: "Real estate (map)",
      },
      //
      {
        id: ncNanoId(),
        href: "/listing-flights",
        name: "Flights listings",
      },
    ],
  },

  //
  {
    id: ncNanoId(),
    href: "/author",
    name: "Templates",
    type: "dropdown",
  },
];