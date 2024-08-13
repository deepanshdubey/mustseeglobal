import CardCategoryBox1 from "@/components/CardCategoryBox1";
import Heading from "@/shared/Heading";
import { TaxonomyType } from "@/data/types";
import React from "react";

export interface SectionGridCategoryBoxProps {
  categories?: TaxonomyType[];
  headingCenter?: boolean;
  categoryCardType?: "card1";
  className?: string;
  gridClassName?: string;
}

const DEMO_CATS: TaxonomyType[] = [
  {
    "id": "1",
    "href": "https://www.mustseenewyork.com/",
    "name": "New York",
    "taxonomy": "category",
    "count": 2522,
    "thumbnail": "https://images.pexels.com/photos/899330/pexels-photo-899330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "2",
    "href": "/comingsoon",
    "name": "Singapore",
    "taxonomy": "category",
    "count": 4558,
    "thumbnail": "https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "3",
    "href": "/comingsoon",
    "name": "Paris",
    "taxonomy": "category",
    "count": 8894,
    "thumbnail": "https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "4",
    "href": "/comingsoon",
    "name": "Tokyo",
    "taxonomy": "category",
    "count": 8270,
    "thumbnail": "https://images.pexels.com/photos/4151484/pexels-photo-4151484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "5",
    "href": "/comingsoon",
    "name": "Maldives",
    "taxonomy": "category",
    "count": 5384,
    "thumbnail": "https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "6",
    "href": "/comingsoon",
    "name": "Amsterdam",
    "taxonomy": "category",
    "count": 1940,
    "thumbnail": "https://images.pexels.com/photos/208733/pexels-photo-208733.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "7",
    "href": "/comingsoon",
    "name": "Antalya",
    "taxonomy": "category",
    "count": 6855,
    "thumbnail": "https://images.pexels.com/photos/2767815/pexels-photo-2767815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "8",
    "href": "/comingsoon",
    "name": "Athens",
    "taxonomy": "category",
    "count": 7225,
    "thumbnail": "https://images.pexels.com/photos/951539/pexels-photo-951539.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "9",
    "href": "/comingsoon",
    "name": "Austin",
    "taxonomy": "category",
    "count": 8773,
    "thumbnail": "https://images.pexels.com/photos/3643592/pexels-photo-3643592.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "10",
    "href": "/comingsoon",
    "name": "Bali",
    "taxonomy": "category",
    "count": 1154,
    "thumbnail": "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "11",
    "href": "/comingsoon",
    "name": "Bangkok",
    "taxonomy": "category",
    "count": 2374,
    "thumbnail": "https://images.pexels.com/photos/1374377/pexels-photo-1374377.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "12",
    "href": "/comingsoon",
    "name": "Barcelona",
    "taxonomy": "category",
    "count": 2793,
    "thumbnail": "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "13",
    "href": "/comingsoon",
    "name": "Beijing",
    "taxonomy": "category",
    "count": 1450,
    "thumbnail": "https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "14",
    "href": "/comingsoon",
    "name": "Belgrade",
    "taxonomy": "category",
    "count": 4837,
    "thumbnail": "https://images.pexels.com/photos/2351412/pexels-photo-2351412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "15",
    "href": "/comingsoon",
    "name": "Bern",
    "taxonomy": "category",
    "count": 8087,
    "thumbnail": "https://images.pexels.com/photos/165553/pexels-photo-165553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "16",
    "href": "/comingsoon",
    "name": "Bogota",
    "taxonomy": "category",
    "count": 8109,
    "thumbnail": "https://images.pexels.com/photos/8264573/pexels-photo-8264573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "17",
    "href": "/comingsoon",
    "name": "Brussels",
    "taxonomy": "category",
    "count": 663,
    "thumbnail": "https://images.pexels.com/photos/1553309/pexels-photo-1553309.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "18",
    "href": "/comingsoon",
    "name": "Budapest",
    "taxonomy": "category",
    "count": 7215,
    "thumbnail": "https://images.pexels.com/photos/2350351/pexels-photo-2350351.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "19",
    "href": "/comingsoon",
    "name": "Buenosaires",
    "taxonomy": "category",
    "count": 1831,
    "thumbnail": "https://images.pexels.com/photos/2438323/pexels-photo-2438323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "20",
    "href": "/comingsoon",
    "name": "Cairo",
    "taxonomy": "category",
    "count": 8335,
    "thumbnail": "https://images.pexels.com/photos/3290075/pexels-photo-3290075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "21",
    "href": "/comingsoon",
    "name": "Cancun",
    "taxonomy": "category",
    "count": 2762,
    "thumbnail": "https://images.pexels.com/photos/1802255/pexels-photo-1802255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "22",
    "href": "/comingsoon",
    "name": "Capetown",
    "taxonomy": "category",
    "count": 293,
    "thumbnail": "https://images.pexels.com/photos/26646099/pexels-photo-26646099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "23",
    "href": "/comingsoon",
    "name": "Caracas",
    "taxonomy": "category",
    "count": 7198,
    "thumbnail": "https://images.pexels.com/photos/9490431/pexels-photo-9490431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "24",
    "href": "/comingsoon",
    "name": "Copenhagen",
    "taxonomy": "category",
    "count": 7496,
    "thumbnail": "https://images.pexels.com/photos/2563683/pexels-photo-2563683.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "25",
    "href": "/comingsoon",
    "name": "Corfu",
    "taxonomy": "category",
    "count": 928,
    "thumbnail": "https://images.pexels.com/photos/15658159/pexels-photo-15658159.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "26",
    "href": "/comingsoon",
    "name": "Costa Rica",
    "taxonomy": "category",
    "count": 5867,
    "thumbnail": "https://images.pexels.com/photos/24778644/pexels-photo-24778644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "27",
    "href": "/comingsoon",
    "name": "Cozumel",
    "taxonomy": "category",
    "count": 9065,
    "thumbnail": "https://images.pexels.com/photos/11481545/pexels-photo-11481545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "28",
    "href": "/comingsoon",
    "name": "Crete",
    "taxonomy": "category",
    "count": 8249,
    "thumbnail": "https://images.pexels.com/photos/14430266/pexels-photo-14430266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "29",
    "href": "/comingsoon",
    "name": "Dallas",
    "taxonomy": "category",
    "count": 1283,
    "thumbnail": "https://images.pexels.com/photos/280193/pexels-photo-280193.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "30",
    "href": "/comingsoon",
    "name": "Delhi",
    "taxonomy": "category",
    "count": 4464,
    "thumbnail": "https://images.pexels.com/photos/3624566/pexels-photo-3624566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "31",
    "href": "/comingsoon",
    "name": "Dublin",
    "taxonomy": "category",
    "count": 9290,
    "thumbnail": "https://images.pexels.com/photos/2416653/pexels-photo-2416653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "32",
    "href": "/comingsoon",
    "name": "Edinburgh",
    "taxonomy": "category",
    "count": 8861,
    "thumbnail": "https://images.pexels.com/photos/2682675/pexels-photo-2682675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "33",
    "href": "/comingsoon",
    "name": "Florence",
    "taxonomy": "category",
    "count": 7799,
    "thumbnail": "https://images.pexels.com/photos/981686/pexels-photo-981686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "34",
    "href": "/comingsoon",
    "name": "Guangzhou",
    "taxonomy": "category",
    "count": 8109,
    "thumbnail": "https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "35",
    "href": "/comingsoon",
    "name": "Havana",
    "taxonomy": "category",
    "count": 801,
    "thumbnail": "https://images.pexels.com/photos/3182452/pexels-photo-3182452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "36",
    "href": "/comingsoon",
    "name": "Helsinki",
    "taxonomy": "category",
    "count": 7618,
    "thumbnail": "https://images.pexels.com/photos/5067322/pexels-photo-5067322.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "37",
    "href": "/comingsoon",
    "name": "Hongkong",
    "taxonomy": "category",
    "count": 5885,
    "thumbnail": "https://images.pexels.com/photos/1337144/pexels-photo-1337144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "38",
    "href": "/comingsoon",
    "name": "Ibiza",
    "taxonomy": "category",
    "count": 2394,
    "thumbnail": "https://images.pexels.com/photos/2191136/pexels-photo-2191136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "39",
    "href": "/comingsoon",
    "name": "Islamujeres",
    "taxonomy": "category",
    "count": 6674,
    "thumbnail": "https://images.pexels.com/photos/18963669/pexels-photo-18963669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "40",
    "href": "/comingsoon",
    "name": "Istanbul",
    "taxonomy": "category",
    "count": 8625,
    "thumbnail": "https://images.pexels.com/photos/987984/pexels-photo-987984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "41",
    "href": "/comingsoon",
    "name": "Jakarta",
    "taxonomy": "category",
    "count": 4292,
    "thumbnail": "https://images.pexels.com/photos/2126389/pexels-photo-2126389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "42",
    "href": "/comingsoon",
    "name": "Kualalumpur",
    "taxonomy": "category",
    "count": 4784,
    "thumbnail": "https://images.pexels.com/photos/433942/pexels-photo-433942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "43",
    "href": "/comingsoon",
    "name": "Kyiv",
    "taxonomy": "category",
    "count": 4497,
    "thumbnail": "https://images.pexels.com/photos/11722970/pexels-photo-11722970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "44",
    "href": "/comingsoon",
    "name": "Lapaz",
    "taxonomy": "category",
    "count": 4568,
    "thumbnail": "https://images.pexels.com/photos/16065782/pexels-photo-16065782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "45",
    "href": "/comingsoon",
    "name": "Lasvegas",
    "taxonomy": "category",
    "count": 5105,
    "thumbnail": "https://images.pexels.com/photos/2600214/pexels-photo-2600214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "46",
    "href": "/comingsoon",
    "name": "Lima",
    "taxonomy": "category",
    "count": 289,
    "thumbnail": "https://images.pexels.com/photos/1548024/pexels-photo-1548024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "47",
    "href": "/comingsoon",
    "name": "Lisbon",
    "taxonomy": "category",
    "count": 5286,
    "thumbnail": "https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "48",
    "href": "/comingsoon",
    "name": "Luxembourg",
    "taxonomy": "category",
    "count": 1362,
    "thumbnail": "https://images.pexels.com/photos/25645829/pexels-photo-25645829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "49",
    "href": "/comingsoon",
    "name": "Lyon",
    "taxonomy": "category",
    "count": 1928,
    "thumbnail": "https://images.pexels.com/photos/25853758/pexels-photo-25853758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "50",
    "href": "/comingsoon",
    "name": "Marrakech",
    "taxonomy": "category",
    "count": 2680,
    "thumbnail": "https://images.pexels.com/photos/4502967/pexels-photo-4502967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "51",
    "href": "/comingsoon",
    "name": "Maui",
    "taxonomy": "category",
    "count": 540,
    "thumbnail": "https://images.pexels.com/photos/3948131/pexels-photo-3948131.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "52",
    "href": "/comingsoon",
    "name": "Medelin",
    "taxonomy": "category",
    "count": 6812,
    "thumbnail": "https://images.pexels.com/photos/18156722/pexels-photo-18156722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "53",
    "href": "/comingsoon",
    "name": "Medellin",
    "taxonomy": "category",
    "count": 7155,
    "thumbnail": "https://images.pexels.com/photos/19252044/pexels-photo-19252044.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "54",
    "href": "/comingsoon",
    "name": "Monaco",
    "taxonomy": "category",
    "count": 9296,
    "thumbnail": "https://images.pexels.com/photos/4685189/pexels-photo-4685189.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "55",
    "href": "/comingsoon",
    "name": "Montevideo",
    "taxonomy": "category",
    "count": 645,
    "thumbnail": "https://images.pexels.com/photos/12161968/pexels-photo-12161968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "56",
    "href": "/comingsoon",
    "name": "Moscow",
    "taxonomy": "category",
    "count": 440,
    "thumbnail": "https://images.pexels.com/photos/236294/pexels-photo-236294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "57",
    "href": "/comingsoon",
    "name": "Mumbai",
    "taxonomy": "category",
    "count": 173,
    "thumbnail": "https://images.pexels.com/photos/2409953/pexels-photo-2409953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "58",
    "href": "/comingsoon",
    "name": "Mykonos",
    "taxonomy": "category",
    "count": 129,
    "thumbnail": "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "59",
    "href": "/comingsoon",
    "name": "New York City",
    "taxonomy": "category",
    "count": 2750,
    "thumbnail": "https://images.pexels.com/photos/4331280/pexels-photo-4331280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "60",
    "href": "/comingsoon",
    "name": "Nice",
    "taxonomy": "category",
    "count": 4429,
    "thumbnail": "https://images.pexels.com/photos/25547400/pexels-photo-25547400.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "61",
    "href": "/comingsoon",
    "name": "Nicosia",
    "taxonomy": "category",
    "count": 9738,
    "thumbnail": "https://images.pexels.com/photos/19988752/pexels-photo-19988752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "62",
    "href": "/comingsoon",
    "name": "Ny",
    "taxonomy": "category",
    "count": 7382,
    "thumbnail": "https://images.pexels.com/photos/1525612/pexels-photo-1525612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "63",
    "href": "/comingsoon",
    "name": "Osaka",
    "taxonomy": "category",
    "count": 6508,
    "thumbnail": "https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "64",
    "href": "/comingsoon",
    "name": "Oslo",
    "taxonomy": "category",
    "count": 6297,
    "thumbnail": "https://images.pexels.com/photos/892226/pexels-photo-892226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "65",
    "href": "/comingsoon",
    "name": "Panama",
    "taxonomy": "category",
    "count": 5384,
    "thumbnail": "https://images.pexels.com/photos/2906490/pexels-photo-2906490.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "66",
    "href": "/comingsoon",
    "name": "Phuket",
    "taxonomy": "category",
    "count": 9953,
    "thumbnail": "https://images.pexels.com/photos/2867732/pexels-photo-2867732.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "67",
    "href": "/comingsoon",
    "name": "Prague",
    "taxonomy": "category",
    "count": 1604,
    "thumbnail": "https://images.pexels.com/photos/126292/pexels-photo-126292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "68",
    "href": "/comingsoon",
    "name": "Puertorico",
    "taxonomy": "category",
    "count": 2331,
    "thumbnail": "https://images.pexels.com/photos/3661926/pexels-photo-3661926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "69",
    "href": "/comingsoon",
    "name": "Puertovallarta",
    "taxonomy": "category",
    "count": 4696,
    "thumbnail": "https://images.pexels.com/photos/16487688/pexels-photo-16487688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "70",
    "href": "/comingsoon",
    "name": "Quebec",
    "taxonomy": "category",
    "count": 8431,
    "thumbnail": "https://images.pexels.com/photos/2887577/pexels-photo-2887577.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "71",
    "href": "/comingsoon",
    "name": "Quito",
    "taxonomy": "category",
    "count": 1889,
    "thumbnail": "https://images.pexels.com/photos/18506910/pexels-photo-18506910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "72",
    "href": "/comingsoon",
    "name": "Reykjavik",
    "taxonomy": "category",
    "count": 7099,
    "thumbnail": "https://images.pexels.com/photos/27182278/pexels-photo-27182278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "73",
    "href": "/comingsoon",
    "name": "Riga",
    "taxonomy": "category",
    "count": 5554,
    "thumbnail": "https://images.pexels.com/photos/681405/pexels-photo-681405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "74",
    "href": "/comingsoon",
    "name": "Riodejaneiro",
    "taxonomy": "category",
    "count": 99,
    "thumbnail": "https://images.pexels.com/photos/20342626/pexels-photo-20342626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "75",
    "href": "/comingsoon",
    "name": "Rome",
    "taxonomy": "category",
    "count": 7094,
    "thumbnail": "https://images.pexels.com/photos/1701595/pexels-photo-1701595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "76",
    "href": "/comingsoon",
    "name": "Sanjose",
    "taxonomy": "category",
    "count": 8409,
    "thumbnail": "https://images.pexels.com/photos/10286719/pexels-photo-10286719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "77",
    "href": "/comingsoon",
    "name": "Santiago",
    "taxonomy": "category",
    "count": 5046,
    "thumbnail": "https://images.pexels.com/photos/3874271/pexels-photo-3874271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "78",
    "href": "/comingsoon",
    "name": "Santorini",
    "taxonomy": "category",
    "count": 138,
    "thumbnail": "https://images.pexels.com/photos/3264723/pexels-photo-3264723.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "79",
    "href": "/comingsoon",
    "name": "Saopaulo",
    "taxonomy": "category",
    "count": 4612,
    "thumbnail": "https://images.pexels.com/photos/21319449/pexels-photo-21319449.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "80",
    "href": "/comingsoon",
    "name": "Seoul",
    "taxonomy": "category",
    "count": 8990,
    "thumbnail": "https://images.pexels.com/photos/2848492/pexels-photo-2848492.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "81",
    "href": "/comingsoon",
    "name": "Seville",
    "taxonomy": "category",
    "count": 9639,
    "thumbnail": "https://images.pexels.com/photos/3354774/pexels-photo-3354774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "82",
    "href": "/comingsoon",
    "name": "Shanghai",
    "taxonomy": "category",
    "count": 4828,
    "thumbnail": "https://images.pexels.com/photos/745243/pexels-photo-745243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "83",
    "href": "/comingsoon",
    "name": "Stockholm",
    "taxonomy": "category",
    "count": 636,
    "thumbnail": "https://images.pexels.com/photos/2377432/pexels-photo-2377432.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "84",
    "href": "/comingsoon",
    "name": "Strasbourg",
    "taxonomy": "category",
    "count": 5831,
    "thumbnail": "https://images.pexels.com/photos/20580221/pexels-photo-20580221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "85",
    "href": "/comingsoon",
    "name": "Taipei",
    "taxonomy": "category",
    "count": 4425,
    "thumbnail": "https://images.pexels.com/photos/1492239/pexels-photo-1492239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "86",
    "href": "/comingsoon",
    "name": "Toronto",
    "taxonomy": "category",
    "count": 4823,
    "thumbnail": "https://images.pexels.com/photos/1292843/pexels-photo-1292843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "87",
    "href": "/comingsoon",
    "name": "Tulum",
    "taxonomy": "category",
    "count": 2053,
    "thumbnail": "https://images.pexels.com/photos/3700226/pexels-photo-3700226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "88",
    "href": "/comingsoon",
    "name": "Valencia",
    "taxonomy": "category",
    "count": 5680,
    "thumbnail": "https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "89",
    "href": "/comingsoon",
    "name": "Valletta",
    "taxonomy": "category",
    "count": 2762,
    "thumbnail": "https://images.pexels.com/photos/534418/pexels-photo-534418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "90",
    "href": "/comingsoon",
    "name": "Vancouver",
    "taxonomy": "category",
    "count": 1803,
    "thumbnail": "https://images.pexels.com/photos/2382868/pexels-photo-2382868.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "91",
    "href": "/comingsoon",
    "name": "Venice",
    "taxonomy": "category",
    "count": 7938,
    "thumbnail": "https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "92",
    "href": "/comingsoon",
    "name": "Vienna",
    "taxonomy": "category",
    "count": 463,
    "thumbnail": "https://images.pexels.com/photos/2422253/pexels-photo-2422253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "93",
    "href": "/comingsoon",
    "name": "Warsaw",
    "taxonomy": "category",
    "count": 1496,
    "thumbnail": "https://images.pexels.com/photos/179768/pexels-photo-179768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    "id": "94",
    "href": "/comingsoon",
    "name": "Zagreb",
    "taxonomy": "category",
    "count": 9753,
    "thumbnail": "https://images.pexels.com/photos/14133527/pexels-photo-14133527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: "95",
    href: "/comingsoon",
    name: "and many more...",
    taxonomy: "category",
    count: 1288,
    thumbnail:
      "https://images.pexels.com/photos/4992652/pexels-photo-4992652.jpeg",
  },
]


const SectionGridCategoryBox: React.FC<SectionGridCategoryBoxProps> = ({
  categories = DEMO_CATS,
  categoryCardType = "card1",
  headingCenter = true,
  className = "",
  gridClassName = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
}) => {
  let CardComponentName = CardCategoryBox1;
  switch (categoryCardType) {
    case "card1":
      CardComponentName = CardCategoryBox1;
      break;

    default:
      CardComponentName = CardCategoryBox1;
  }

  return (
    <div className={`nc-SectionGridCategoryBox relative ${className}`}>
      <Heading
        desc="Embark on a journey of discovery near and far, exploring the best of every destination!"
        isCenter={headingCenter}
      >
        Explore nearby
      </Heading>
      <div className={`grid ${gridClassName} gap-5 sm:gap-6 md:gap-8`}>
        {categories.map((item, i) => (
          <CardComponentName key={i} taxonomy={item} />
        ))}
      </div>
    </div>
  );
};

export default SectionGridCategoryBox;
