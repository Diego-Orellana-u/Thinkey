"use client";
import { MenuBtn } from "./menu/MenuBtn";
import LogoHeader from "./LogoHeader";
import { useEffect, useState } from "react";
import DesktopMenu from "./menu/DesktopMenu";
import { Button } from "./ui/button";
import { btn } from "data/nav";
import { contactFormInfo } from "data/forms";
import { colegiosFormInfo } from "data/forms";
import ServicesForm from "./services/ServicesForm";
import Image from "next/image";
import CloseIcon from "./Icons/CloseIcon";

export const Header = () => {
  const [headerColor, setHeaderColor] = useState(false);
  const [openedForm, setOpenedForm] = useState(false);
  const [overlayClicked, setOverlayClicked] = useState(false);

  const handleOverlayClick = () => {
    setOverlayClicked(!overlayClicked);
    setOpenedForm(false);
  };

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

  const openForm = () => {
    setOpenedForm(!openedForm);
    setOverlayClicked(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 flex items-center h-24 ${
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
            <Button
              onClick={openForm}
              variant="testLarge"
              className={`relative large-btn-card`}
            >
              <span className="z-10">{btn.title}</span>
            </Button>
          </div>
        </div>
      </header>
      <span
        onClick={handleOverlayClick}
        className={`drawer__overlay ${
          openedForm ? "overlay-animate-in overflow-hidden" : ""
        } ${overlayClicked ? "overlay-animate-out" : ""}`}
      ></span>
      <div
        className={`${
          openedForm ? "translate-y-0 opacity-100" : "translate-y-[120%]"
        } z-[999] h-fit pointer-events-none opacity-0 ease-in-out duration-700 transition-all fixed tablet-l:h-full -mt-[96px] w-full flex items-center`}
      >
        <div className="rounded-xl pointer-events-auto mx-[5%] desktop-l:mx-[12%] h-fit flex bg-white w-full">
          <div className="relative hidden desktop-s:block w-full tablet-xl:flex-[0_0_40%] desktop-l:flex-[0_0_45%]">
            <Image
              src={colegiosFormInfo.imgHref}
              className="rounded-l-xl w-full mb-7 tablet-s:mb-12 tablet-xl:mb-0 object-cover max-h-96 tablet-l:max-h-full tablet-l:h-[500px] tablet-xl:h-full"
              width={368}
              height={637}
              alt={colegiosFormInfo.imgAlt}
            />
          </div>

          <div className="tablet-l:px-10 w-full desktop-s:pl-12 desktop-l:pl-16 desktop-s:pr-10 pb-12 py-16 relative">
            <div
              onClick={handleOverlayClick}
              className="cursor-pointer h-10 w-10 desktop-l:h-12 desktop-l:w-12 bg-black-heading-color flex items-center justify-center rounded-full absolute right-9 top-5"
            >
              <CloseIcon
                w="w-5 desktop-l:w-7"
                h="h-5 desktop-l:h-7"
                color="white"
              />
            </div>
            <ServicesForm
              formFields={contactFormInfo.formFields}
              btnText={contactFormInfo.btnText}
            />
          </div>
        </div>
      </div>
    </>
  );
};
