"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MobileMenu } from "./MobileMenu";
import MenuIcon from "./Icons/MenuIcon";
import { Button } from "./ui/button";

export const MenuBtn = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [overlayClicked, setOverlayClicked] = useState(false);

  useEffect(() => {
    activeMenu
      ? document.body.classList.add("no-scroll")
      : document.body.classList.remove("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [activeMenu]);

  const handleMenuClick = (e) => {
    setActiveMenu(!activeMenu);
    setOverlayClicked(false);
  };

  return (
    <div className="desktop-s:hidden">
      <Button
        variant="testSmall"
        onClick={handleMenuClick}
        className="rounded-full bg-btns-test px-0 w-14 h-14 flex justify-center items-center"
      >
        <MenuIcon />
        {/* <Image className="w-8 pl-px pt-px" src={menuIcon} alt="Menu icon" /> */}
      </Button>
      <MobileMenu
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        setOverlayClicked={setOverlayClicked}
        overlayClicked={overlayClicked}
      />
    </div>
  );
};
