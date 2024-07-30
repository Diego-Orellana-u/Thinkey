"use client";
import Image from "next/image";
import x from "../../assets/icons/x.svg";
import { MenuNavm } from "./MenuNavm";

export const MobileMenu = ({
  activeMenu,
  setActiveMenu,
  setOverlayClicked,
  overlayClicked,
}) => {
  const handleOverlayClick = () => {
    setOverlayClicked(!overlayClicked);
    setActiveMenu(false);
  };

  return (
    <div>
      <span
        onClick={handleOverlayClick}
        className={`drawer__overlay ${
          activeMenu ? "animate-in overflow-hidden" : ""
        } ${overlayClicked ? "animate-out" : ""}`}
      ></span>

      <div
        className={`h-screen fixed left-0 top-0 w-[80vw] max-w-[350px] z-[999]  ${
          activeMenu
            ? "ease-in duration-300"
            : "ease-in duration-300 -translate-x-full"
        } bg-white drop-shadow-2xl`}
      >
        <div className="h-14 flex justify-between items-center px-5 mobile-l:px-7 relative">
          <Image
            className="cursor-pointer absolute right-6"
            src={x}
            onClick={handleOverlayClick}
            alt=""
          />
        </div>

        <MenuNavm />
      </div>
    </div>
  );
};
