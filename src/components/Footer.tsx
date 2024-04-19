"use client";

import Logo from "@/shared/Logo";
import SocialsList1 from "@/shared/SocialsList1";
import { CustomLink } from "@/data/types";
import React from "react";
import FooterNav from "./FooterNav";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "2",
    title: "",
    menus: [
      { href: "#", label: "" },
      { href: "#", label: "" },
      { href: "#", label: "" },
      { href: "#", label: "" },
      { href: "#", label: "" },
    ],
  },
  {
    id: "4",
    title: "",
    menus: [
      { href: "#", label: "" },
      { href: "#", label: "" },
      { href: "#", label: "" },
      { href: "#", label: "" },
      { href: "#", label: "" },
    ],
  },
  {
    id: "5",
    title: "Cities",
    menus: [
      { href: "#", label: "New York" },
      { href: "#", label: "Las Vegas" },
      { href: "#", label: "Rome" },
      { href: "#", label: "Delhi" },
      { href: "#", label: "+ 143 more" },
    ],
  },
  {
    id: "1",
    title: "Must See New York",
    menus: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact Us" },
      { href: "/contact", label: "Careers" },
      { href: "/blog", label: "Travel Blog" },
      { href: "/", label: "Must See Global" },
    ],
  },
];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => {
            if (menu.title == "Cities") {
              return (
                <li key={index}>
                  <span
                    key={index}
                    className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white cursor-pointer"
                    // href={item.href}
                  >
                    {item.label}
                  </span>
                </li>
              );
            } else {
              return (
                <li key={index}>
                  <a
                    key={index}
                    className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  };

  return (
    <>
      <FooterNav />

      <div className="nc-Footer relative py-24 lg:py-28 border-t border-neutral-200 dark:border-neutral-700">
        <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
          <div className=" footerLogoSocials grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
            <div className="footerLogo col-span-2 md:col-span-1">
              <Logo />
            </div>
            <div className="col-span-2 flex items-center md:col-span-3">
              <SocialsList1 className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start" />
            </div>
          </div>
          {widgetMenus.map(renderWidgetMenuItem)}
        </div>
      </div>
    </>
  );
};

export default Footer;
