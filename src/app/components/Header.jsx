"use client";
import { MenuIcon } from "./MenuIcon";
import LogoHeader from "./LogoHeader";
import { useEffect, useState } from "react";
export const Header = () => {
  const [headerColor, setHeaderColor] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeaderColor(true);
    } else {
      setHeaderColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  });

  return (
    <div
      className={`sticky top-0 py-3 z-10 ${
        headerColor ? "bg-[white]" : "bg-[transparent]"
      }`}
    >
      <div className="h-14 flex justify-between px-5 items-center bg-transparent">
        <LogoHeader />
        <div>
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};

// Header logo is server component so it's rendered in the server
