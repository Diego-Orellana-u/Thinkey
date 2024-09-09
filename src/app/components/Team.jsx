"use client";
import Image from "next/image";
import Link from "next/link";
import HeadingTwoHighlight from "./HeadingTwoHighlight";
import CloseIcon from "./Icons/CloseIcon";
import { useEffect, useState } from "react";

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
          titleCss={teamInfo.titleCss}
          first={teamInfo.title}
          second={teamInfo.highlightTitle}
          highlightTitleCss={teamInfo.highlightTitleCss}
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
    </section>
  );
}
