import ServicesForm from "./ServicesForm";
import BuildingIcon from "./Icons/BuildingIcon";
import PhoneIcon from "./Icons/PhoneIcon";
import MailIcon from "./Icons/MailIcon";
import Link from "next/link";
import Image from "next/image";

export default function ContactForm({ formInfo }) {
  return (
    <section
      className={` ${
        formInfo.sectionMargin && formInfo.sectionMargin
      } flex flex-col tablet-xl:flex-row tablet-xl:h-[850px] overflow-x-hidden desktop-s:pt-10`}
    >
      {/* <div className="wrapper border-b border-gray-300/30 relative pt-24 tablet-l:pt-32 desktop-s:pt-48 pb-20 tablet-l:pb-24 tablet-l:px-24 desktop-s:pl-[3.3rem] desktop-s:pr-10 desktop-l:pl-[3.3rem] desktop-l:pr-[5rem] w-full bg-main-200 h-full tablet-xl:flex-[0_0_50%] bg-no-repeat">
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
      </div> */}
      <div className="pl-5 mobile-l:pl-7 min-[720px]:pl-12 tablet-xl:pl-[3.3rem] desktop-l:pl-[5.75rem] desktop-s:mr-5">
        <Image
          src="/high-five.png"
          width={1280}
          height={720}
          className="rounded-xl"
        />
      </div>

      <div className="tablet-xl:pl-10 tablet-l:px-[5.7rem] desktop-s:px-12 desktop-l:pl-16 wrapper w-full h-full">
        <span className="desktop-l:w-[430px] text-h2-s tablet-s:text-h3-xl tablet-s:leading-[58px] font-bold text-main-heading-color leading-9 block mb-5 w-4/5">
          Get in touch
        </span>

        <ServicesForm
          formFields={formInfo.formFields}
          btnText={formInfo.btnText}
        />
      </div>
    </section>
  );
}
