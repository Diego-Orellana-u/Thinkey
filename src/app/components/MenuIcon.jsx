"use client";
import Image from "next/image";
import menuIcon from "../../assets/icons/menu-icon.svg";
import { useEffect, useState } from "react";
import { MobileMenu } from "./MobileMenu";

export const MenuIcon = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [overlayClicked, setOverlayClicked] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (activeMenu) {
      body.classList.remove("overflow-auto");
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
      body.classList.add("overflow-auto");
    }
  }, [activeMenu]);

  const handleMenuClick = (e) => {
    setActiveMenu(!activeMenu);
    setOverlayClicked(false);
  };

  return (
    <div>
      <div
        onClick={handleMenuClick}
        className="rounded-full cursor-pointer bg-[#16171D] w-14 h-14 flex justify-center items-center"
      >
        <Image
          className="w-8 pl-px pt-px cursor-pointer"
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
