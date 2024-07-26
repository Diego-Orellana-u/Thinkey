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
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  });

  return (
    <div
      className={`sticky top-0 z-10 flex items-center h-20 ${
        headerColor ? "bg-[white] shadow-md" : "bg-[transparent]"
      }`}
    >
      <div className="h-14 w-full flex justify-between px-5 min-[425px]:px-7 min-[900px]:px-12 min-[1150px]:px-[92px] items-center bg-transparent">
        <LogoHeader />
        <div className="min-[1023px]:hidden">
          <MenuIcon />
        </div>
        <div>
          <DesktopMenu />
        </div>
      </div>
    </div>
  );
};

// Header logo is server component so it's rendered in the server
