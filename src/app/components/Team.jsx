"use client";
import Image from "next/image";
import Link from "next/link";
import HeadingTwoHighlight from "./HeadingTwoHighlight";
import CloseIcon from "./Icons/CloseIcon";
import { useEffect, useState } from "react";

export function TeamInfo({
  openSidebar,
  setOpenSidebar,
  sidebarInfo,
  overlayClicked,
  setOverlayClicked,
}) {
  const handleOverlayClick = () => {
    setOverlayClicked(!overlayClicked);
    setOpenSidebar(false);
  };

  useEffect(() => {
    openSidebar
      ? document.body.classList.add("no-scroll")
      : document.body.classList.remove("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [openSidebar]);

  return (
    <>
      <span
        onClick={handleOverlayClick}
        className={`drawer__overlay ${
          openSidebar ? "animate-in overflow-hidden" : ""
        } ${overlayClicked ? "animate-out" : ""}`}
      ></span>
      <div
        className={`fixed top-0 ${
          openSidebar ? "right-0" : "-right-[100%]"
        } ease-in-out text-black-body-color duration-700 desktop-s:duration-1000 transition-all w-full desktop-s:w-4/5 desktop-l:w-3/5 desktop-l:max-w-[870px] h-full overflow-y-auto z-[999] bg-[#e9e2cd] `}
      >
        <div>
          <div className="px-4 tablet-l:px-10">
            {/* top container with close button */}
            <div
              className={`h-[65px] flex items-center justify-between border-b border-black tablet-l:h-20 sticky top-0`}
            >
              <span className="text-p-l font-medium">Biografía</span>
              <div
                className="h-[37px] w-[37px] tablet-l:h-12 tablet-l:w-12 flex items-center justify-center rounded-full cursor-pointer bg-[#fdf7e7]"
                onClick={handleOverlayClick}
              >
                <CloseIcon w="w-5 tablet-xl:w-7" h="h-5 tablet-xl:h-7" />
              </div>
            </div>

            <div className="flex flex-col tablet-xl:flex-row tablet-xl:gap-10">
              <div className="tablet-xl:flex-[0_0_40%]">
                <Image
                  src={
                    sidebarInfo.imgHref ? sidebarInfo.imgHref : "/miembro1.jpg"
                  }
                  width={289}
                  height={363}
                  alt={sidebarInfo.imgAlt}
                  className="tablet-xl:sticky tablet-xl:top-32"
                />
              </div>

              <div className="pt-7 flex flex-col gap-5 ">
                <span className="block font-semibold text-h2-l leading-10">
                  {sidebarInfo?.name}
                </span>

                <div className="flex items-center gap-3">
                  <div className="rounded-full h-[15px] w-[15px] bg-green-900 mb-[2px]"></div>
                  <span className="block font-medium">
                    {sidebarInfo?.position}
                  </span>
                </div>

                <div className="flex flex-col gap-5 tablet-l:gap-7">
                  <div>
                    <span className="block mb-2 text-p-xs">Correo:</span>
                    <Link href="/">{sidebarInfo.extraInfo?.mail}</Link>
                  </div>

                  <div>
                    <span className="block mb-2 text-p-xs">Social:</span>
                    <div className="flex gap-4 tablet-l:gap-7 desktop-s:gap-5 flex-wrap">
                      {sidebarInfo.socials &&
                        sidebarInfo.socials.map((social) => (
                          <Link
                            key={social.key}
                            href={social.socialHref}
                            className="bg-red-200 px-3 py-[2px] text-black font-medium w-fit left-4 rounded-[7rem]"
                          >
                            {social.socialText}
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-5 tablet-l:gap-7 pb-16">
                  {sidebarInfo.extraInfo?.beforeFunFactText &&
                    sidebarInfo.extraInfo?.beforeFunFactText.map((p) => (
                      <p key={p.key}>{p.text}</p>
                    ))}

                  {sidebarInfo.extraInfo?.funFact && (
                    <div>
                      <span className="font-semibold text-main-heading-color">
                        Fun fact -{" "}
                      </span>
                      <span>{sidebarInfo.extraInfo.funFact}</span>
                    </div>
                  )}

                  {sidebarInfo.extraInfo?.afterFunFactText &&
                    sidebarInfo.extraInfo?.afterFunFactText.map((p) => (
                      <p key={p.key}>{p.text}</p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Team({ teamInfo }) {
  const [openSidebar, setOpenSidebar] = useState();
  const [sidebarInfo, setSidebarInfo] = useState({});
  const [overlayClicked, setOverlayClicked] = useState(false);

  const handleOpenSidebar = (member) => {
    setOpenSidebar(true);
    setSidebarInfo(member);
    setOverlayClicked(false);
  };

  return (
    <section className="wrapper pb-16">
      <div className="mb-10 flex flex-col items-center">
        <HeadingTwoHighlight
          color="text-black-heading-color"
          title={teamInfo.title}
          titleCss={teamInfo.titleCss}
        />
        <p className="text-gray-body-color mt-3 desktop-s:mt-8 text-p-s tablet-l:text-p-l text-center tablet-l:w-2/4 desktop-l:w-1/3">
          {teamInfo.desc}
        </p>
      </div>
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-12 desktop-s:gap-10">
        {teamInfo.members &&
          teamInfo.members.map((member) => (
            <div
              key={member.key}
              className="relative cursor-pointer"
              onClick={() => handleOpenSidebar(member)}
            >
              <div>
                <Image
                  src={member.imgHref}
                  width={member.imgWidth}
                  height={member.imgHeight}
                  className="rounded-xl"
                  onClick={() => handleOpenSidebar(member)}
                />
              </div>

              {member.socials &&
                member.socials.map((social, index) => (
                  <Link
                    href={social.socialHref ? social.socialHref : "/"}
                    key={social.key}
                    className={`absolute bg-white px-3 py-[2px] text-black font-medium ${
                      index === 0 && "top-5"
                    } ${index === 1 && "top-[3.4rem]"} ${
                      index === 2 && "top-[5.55rem]"
                    } left-4 rounded-[7rem]`}
                  >
                    {social.socialText}
                  </Link>
                ))}

              <div className="pt-5">
                <span className="block text-black-heading-color font-medium text-p-xl tablet-s:text-h3-s">
                  {member.name}
                </span>
                <span className="block text-gray-body-color/70 font-medium text-p-l">
                  {member.position}
                </span>
              </div>
            </div>
          ))}
      </div>
      <TeamInfo
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
        sidebarInfo={sidebarInfo}
        setSidebarInfo={setSidebarInfo}
        overlayClicked={overlayClicked}
        setOverlayClicked={setOverlayClicked}
      />
    </section>
  );
}
