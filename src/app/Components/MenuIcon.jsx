"use client";
import Image from "next/image";
import menuIcon from "../../assets/icons/menu-icon.svg";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";

export const MenuIcon = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [overlayClicked, setOverlayClicked] = useState(false);

  const handleMenuClick = (e) => {
    console.log("hola");
    setActiveMenu(!activeMenu);
    setOverlayClicked(false);
  };

  return (
    <div>
      <Image
        onClick={handleMenuClick}
        className="w-[40px] cursor-pointer"
        src={menuIcon}
        alt="Menu icon"
      />
      <MobileMenu
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        setOverlayClicked={setOverlayClicked}
        overlayClicked={overlayClicked}
      />
    </div>
  );
};
