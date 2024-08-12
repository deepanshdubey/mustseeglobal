import { MegamenuItem, NavItemType } from "@/shared/Navigation/NavigationItem";
import ncNanoId from "@/utils/ncNanoId";
import { Route } from "@/routers/types";
import __megamenu from "./jsons/__megamenu.json";

const otherPageChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/comingsoon",
    // href: "/blog",
    // href: "/listing-stay",
    name: "Las Vegas",
    // name: "Tours & Sightseeing",
  },
  {
    id: ncNanoId(),
    href: "/comingsoon",
    // href: "/blog",
    // href: "/listing-stay",
    // name: "Night Life",
    name: "Costa Rica",
    isNew: true,
  },
];

export const NAVIGATION_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    // href: "/blog",
    href: "https://www.mustseenewyork.com/",
    // href: "/listing-stay",
    name: "New York",
    type: "none",
    isNew: true
  },
  {
    id: ncNanoId(),
    // href: "/blog",
    href: "/comingsoon",
    name: "Italy",
    type: "none",
  },
  {
    id: ncNanoId(),
    // href: "/blog",
    href: "/comingsoon",
    name: "Paris",
    type: "none",
  },
  {
    id: ncNanoId(),
    // href: "/blog",
    href: "/comingsoon",
    name: "Chicago",
    type: "none",
  },
  {
    id: ncNanoId(),
    // href: "/blog",
    href: "/comingsoon",
    name: "Switzerland",
    type: "none",
  },
  {
    id: ncNanoId(),
    // href: "/blog",
    href: "/comingsoon",
    name: "New Delhi",
    type: "none",
  },

  {
    id: ncNanoId(),
    // href: "#",
    name: "More",
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