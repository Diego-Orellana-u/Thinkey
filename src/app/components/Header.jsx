"use client";
import { MenuIcon } from "./MenuIcon";
import LogoHeader from "./LogoHeader";
import { useEffect, useState } from "react";
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
      className={`sticky top-0 py-3 z-10 ${
        headerColor ? "bg-[white] shadow-md" : "bg-[transparent]"
      }`}
    >
      <div className="h-14 flex justify-between px-5 min-[425px]:px-7 items-center bg-transparent">
        <LogoHeader />
        <div>
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};

// Header logo is server component so it's rendered in the server
