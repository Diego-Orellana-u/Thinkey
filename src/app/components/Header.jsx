"use client";
import { MenuBtn } from "./menu/MenuBtn";
import LogoHeader from "./LogoHeader";
import { useEffect, useState } from "react";
import DesktopMenu from "./menu/DesktopMenu";
import { Button } from "./ui/button";
import { btn } from "data/nav";

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
      className={`sticky  top-0 z-50 flex items-center h-24 ${
        headerColor
          ? "bg-white shadow-sm transition duration-300"
          : "bg-[transparent] transition duration-300"
      }`}
    >
      <div className="wrapper w-full flex justify-between items-center bg-transparent">
        <LogoHeader />
        <MenuBtn />

        <div className="hidden desktop-s:flex items-center">
          <DesktopMenu />
          <Button variant="testLarge" className={`relative large-btn-card`}>
            <span className="z-10">{btn.title}</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
