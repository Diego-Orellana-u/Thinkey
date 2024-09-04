import Image from "next/image";
import ServicesForm from "./ServicesForm";
import BuildingIcon from "./Icons/BuildingIcon";
import PhoneIcon from "./Icons/PhoneIcon";
import MailIcon from "./Icons/MailIcon";
import Link from "next/link";
import LineOne from "./Icons/LineOne";
import Star from "./Icons/Star";
import DibujoAtomo from "./Icons/DibujoAtomo";
import DibujoPocion from "./Icons/DibujoPocion";
import DibujoPlaneta from "./Icons/DibujoPlaneta";
import DibujoMolecula from "./Icons/DibujoMolecula";

export default function ContactForm({ formInfo }) {
  return (
    <section
      className={` ${
        formInfo.sectionMargin && formInfo.sectionMargin
      } flex flex-col bg-white items-center tablet-xl:flex-row tablet-xl:h-[900px] overflow-x-hidden`}
    >
      <div className="wrapper border-b border-gray-300/30 relative pt-24 tablet-l:pt-32 desktop-s:pt-52 desktop-l:pt-56 pb-20 tablet-l:pb-24 tablet-l:px-24 desktop-s:pl-[3.3rem] desktop-s:pr-10 desktop-l:px[5.75rem] w-full bg-main-200 h-full tablet-xl:flex-[0_0_50%] bg-no-repeat">
        <LineOne x="-right-24" y="top-0 z-10" opacity="opacity-20" />
        <Star
          fillColor="fill-accent-900"
          y="top-[150px] tablet-l:top-[630px]"
          x="right-10"
          starOpacity="opacity-50"
          zIndex="-z-20"
          position="absolute"
        />
        <DibujoPocion />
        <DibujoMolecula />
        <span
          className={`relative text-h2-s tablet-l:text-h2-l font-semibold leading-7 text-secondary-100 z-20`}
        >
          Pongamonos en contacto
        </span>
        <p className={`mt-6 text-p-l leading-8 text-white-body-color`}>
          Proin volutpat consequat porttitor cras nullam gravida at. Orci
          molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu
          sed malesuada et magna.
        </p>
        <div className="flex flex-col gap-4 mt-8 text-p-l leading-8 text-white-body-color">
          <div className="flex gap-5 items-center">
            <BuildingIcon />
            <span>Almte. Zegers 672, Oficina C</span>
          </div>
          <div className="flex gap-5 items-center">
            <PhoneIcon width="24" height="24" />
            <span>+1 (555) 234-5678</span>
          </div>
          <div className="flex gap-5 items-center">
            <MailIcon />
            <Link href="/" className="pb-[2px]">
              hello@example.com
            </Link>
          </div>
        </div>
      </div>

      <div className="tablet-xl:pl-10 tablet-l:px-[5.7rem] desktop-s:pl-12 desktop-l:pl-16 wrapper py-20 w-full h-full bg-white z-20">
        <ServicesForm
          formFields={formInfo.formFields}
          btnText={formInfo.btnText}
        />
      </div>
    </section>
  );
}
