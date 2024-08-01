"use client";
import { MenuIcon } from "./MenuIcon";
import LogoHeader from "./LogoHeader";
import { useEffect, useState } from "react";
import DesktopMenu from "./DesktopMenu";
import Image from "next/image";

export const Header = () => {
  const [headerColor, setHeaderColor] = useState(false);

  const scrollHeader = () => {
    window.scrollY >= 40 ? setHeaderColor(true) : setHeaderColor(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  });

  return (
    <div
      className={`sticky top-0 z-10 flex items-center h-24 ${
        headerColor ? "bg-[#F8F8FC] shadow-sm" : "bg-[transparent]"
      }`}
    >
      <div className="h-14 w-full flex justify-between px-5 mobile-l:px-7 tablet-xl:px-12 desktop-l:px-[92px] items-center bg-transparent">
        <LogoHeader />
        <div className="desktop-s:hidden">
          <MenuIcon />
        </div>
        <div className="desktop-s:flex hidden items-center">
          <DesktopMenu />
          <button>
            <Image
              src="/world.svg"
              width={28}
              height={28}
              className="w-7 mr-7"
              alt=""
            />
          </button>
          <button
            className={`desktop-s:h-[50px] text-p-s relative px-10 rounded-[50px] text-white font-medium gradient-header flex items-center justify-center overflow-hidden transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#EA624A] before:duration-500 before:ease-out hover:bg-[#EA624A] hover:before:h-56 hover:before:w-56`}
          >
            <span className="relative z-10">BOOK NOW</span>
          </button>
        </div>
      </div>
    </div>
  );
};
