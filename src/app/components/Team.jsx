"use client";
import Image from "next/image";
import Link from "next/link";
import HeadingTwoHighlight from "./HeadingTwoHighlight";
import CloseIcon from "./Icons/CloseIcon";
import { useState } from "react";

export function TeamInfo({ openInfo, setOpenInfo }) {
  return (
    <div
      className={`fixed  top-0 ${
        openInfo ? "right-0" : "-right-[100%]"
      } ease-in-out duration-500 transition-all w-full h-full overflow-x-hidden overflow-y-auto overscroll-contain pointer-events-none z-[999] bg-[#e9e2cd] `}
    >
      <div className="pointer-events-auto relative">
        <div className="flex flex-col h-full px-4 ">
          <div
            className={`h-[65px] fixed top-0 pointer-events-none w-full pr-8 bg-[#e9e2cd]`}
          >
            <div className="flex items-center h-full justify-between border-b border-black">
              <span className="text-p-l font-medium">Biografía</span>
              <div
                className="h-[37px] pb-px w-[37px] flex items-center justify-center pointer-events-auto rounded-full cursor-pointer bg-[#fdf7e7]"
                onClick={() => setOpenInfo(false)}
              >
                <CloseIcon />
              </div>
            </div>
          </div>
          <div className="pt-32 flex flex-col">
            <div>
              <div>
                <Image src="/suit.webp" width={1280} height={720} />
              </div>
            </div>

            <div className="pt-7 flex flex-col gap-5">
              <span className="block font-semibold text-h2-l leading-10">
                Rob van de Beeten
              </span>

              <div className="flex items-center gap-3">
                <div className="rounded-full h-[15px] w-[15px] bg-green-900 mb-[2px]"></div>
                <span className="block font-medium">CEO & Co-founder</span>
              </div>

              <div className="flex flex-col gap-5">
                <div>
                  <span className="block mb-2 text-p-xs">Correo:</span>
                  <Link href="/">correoprueba123@gmail.com</Link>
                </div>

                <div>
                  <span className="block mb-2 text-p-xs">Social:</span>

                  <div className="flex gap-4 flex-wrap">
                    <Link
                      href="/"
                      className="bg-red-200 px-3 py-[2px] text-black font-medium w-fit left-4 rounded-[7rem]"
                    >
                      LinkedIn
                    </Link>
                    <Link
                      href="/"
                      className="bg-red-200 px-3 py-[2px] text-black font-medium w-fit left-4 rounded-[7rem]"
                    >
                      Instagram
                    </Link>
                    <Link
                      href="/"
                      className="bg-red-200 px-3 py-[2px] text-black font-medium w-fit left-4 rounded-[7rem]"
                    >
                      Instagram
                    </Link>
                    <Link
                      href="/"
                      className="bg-red-200 px-3 py-[2px] text-black font-medium w-fit left-4 rounded-[7rem]"
                    >
                      Instagram
                    </Link>
                  </div>
                </div>
              </div>

              <p>
                Werken voor ondernemers garandeert veel afwisseling. De één is
                handelaar, de ander ontwerpt software en weer een derde
                produceert halffabricaten voor industriële afnemers. Iedere
                cliënt heeft zijn of haar deskundigheid en verwacht die ook van
                een advocaat. Die deskundigheid zit hem mijns inziens in de
              </p>

              <div className="">
                <span className="font-semibold text-main-heading-color">
                  Fun fact -{" "}
                </span>
                <span>Le gusta ir de trekking!</span>
              </div>

              <p>
                Ik ben advocaat sinds 1981 en ben gespecialiseerd in
                ondernemingsrecht en erfrecht. Ik sta voornamelijk ondernemers
                uit het MKB bij, maar werk in erfrechtszaken ook voor
                particulieren.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Team({ teamInfo }) {
  const [openInfo, setOpenInfo] = useState();

  const handleOpenInfo = (name) => {
    setOpenInfo(name);
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
              onClick={() => handleOpenInfo(member.name)}
            >
              <div>
                <Image
                  src={member.imgHref}
                  width={member.imgWidth}
                  height={member.imgHeight}
                  className="rounded-xl"
                />
              </div>

              {member.socials &&
                member.socials.map((social, index) => (
                  <Link
                    href="/"
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
      <TeamInfo openInfo={openInfo} setOpenInfo={setOpenInfo} />
    </section>
  );
}
