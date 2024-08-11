"use client";
import { MenuIcon } from "./MenuIcon";
import LogoHeader from "./LogoHeader";
import { useEffect, useState } from "react";
import DesktopMenu from "./DesktopMenu";

export const Header = () => {
  const [headerColor, setHeaderColor] = useState(false);

  const scrollHeader = () => {
    window.scrollY >= 40 ? setHeaderColor(true) : setHeaderColor(false);
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHeader);

    return () => {
      document.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  useEffect(() => {
    scrollHeader();
  }, []);

  return (
    <header
      className={`sticky top-0 z-10 flex items-center h-24 ${
        headerColor
          ? "bg-white-bg shadow-sm transition duration-300"
          : "bg-[transparent] transition duration-300"
      }`}
    >
      <div className="wrapper w-full flex justify-between items-center bg-transparent">
        <LogoHeader />
        <MenuIcon />

        <div className="hidden desktop-s:flex items-center">
          <DesktopMenu />
          <button
            className={`h-[50px] relative px-10 rounded-[50px] font-medium bg-buttons-bg border-buttons-bg text-buttons-text flex items-center justify-center overflow-hidden transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-secondary-buttons-bg before:duration-700 duration-1000 before:ease-out hover:bg-secondary-buttons-bg  hover:text-black-heading-color hover:before:h-56 hover:before:w-56`}
          >
            <span className="z-10">BOOK NOW</span>
          </button>
        </div>
      </div>
    </header>
  );
};
