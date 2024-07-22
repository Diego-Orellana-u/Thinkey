"use client";
import Image from "next/image";
import menuIcon from "../../assets/icons/menu-icon.svg";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";

export const MenuIcon = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [overlayClicked, setOverlayClicked] = useState(false);

  const handleMenuClick = (e) => {
    setActiveMenu(!activeMenu);
    setOverlayClicked(false);
  };

  return (
    <div>
      <div
        onClick={handleMenuClick}
        className="rounded-full cursor-pointer bg-[#16171D] w-12 h-12 flex justify-center items-center"
      >
        <Image
          className="w-[27px] pl-[1px] pt-[1px] cursor-pointer"
          src={menuIcon}
          alt="Menu icon"
        />
      </div>
      <MobileMenu
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        setOverlayClicked={setOverlayClicked}
        overlayClicked={overlayClicked}
      />
    </div>
  );
};
