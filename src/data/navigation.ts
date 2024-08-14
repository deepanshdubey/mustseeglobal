import { MegamenuItem, NavItemType } from "@/shared/Navigation/NavigationItem";
import ncNanoId from "@/utils/ncNanoId";
import { Route } from "@/routers/types";
import __megamenu from "./jsons/__megamenu.json";

const otherPageChildMenus: NavItemType[] = [
  // {
  //   id: ncNanoId(),
  //   href: "/comingsoon",
  //   // href: "/blog",
  //   // href: "/listing-stay",
  //   // name: "Night Life",
  //   name: "Costa Rica",
  //   isNew: true,
  // },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Antalya",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Athens",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Austin",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Bali",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Bangkok",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Barcelona",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Beijing",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Belgrade",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Bern",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Bogota",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Brussels",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Budapest",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Buenos Aires",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Cairo",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Cancun",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Capetown",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Caracas",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Copenhagen",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Corfu",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Costarica",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Cozumel",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Crete",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Dallas",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Delhi",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Dublin",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Edinburgh",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Florence",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Guangzhou",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Havana",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Helsinki",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Hong Kong",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Ibiza",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Isla Mujeres",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Istanbul",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Jakarta",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Kuala Lumpur",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Kyiv",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Lapaz",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Las Vegas",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Lima",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Lisbon",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Luxembourg",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Lyon",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Marrakech",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Maui",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Medelin",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Medellin",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Monaco",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Montevideo",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Moscow",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Mumbai",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Mykonos",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "New York City",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Nice",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Nicosia",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Ny",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Osaka",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Oslo",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Panama",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Phuket",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Prague",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Puerto Rico",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Puerto Vallarta",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Quebec",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Quito",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Reykjavik",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Riga",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Rio De Janeiro",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Rome",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "San Jose",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Santiago",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Santorini",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Sao Paulo",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Seoul",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Seville",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Shanghai",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Stockholm",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Strasbourg",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Taipei",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Toronto",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Tulum",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Valencia",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Valletta",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Vancouver",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Venice",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Vienna",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Warsaw",
    "isNew": true
  },
  {
    "id": ncNanoId(),
    "href": "/comingsoon",
    "name": "Zagreb",
    "isNew": true
  }
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
    name: "Singapore",
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
    name: "Tokyo",
    type: "none",
  },
  {
    id: ncNanoId(),
    // href: "/blog",
    href: "/comingsoon",
    name: "Maldives",
    type: "none",
  },
  {
    id: ncNanoId(),
    // href: "/blog",
    href: "/comingsoon",
    name: "Amsterdam",
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