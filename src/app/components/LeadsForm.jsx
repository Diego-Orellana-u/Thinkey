import Image from "next/image";
import ServicesForm from "./ServicesForm";

export default function LeadsForm({ sectionMargin, title, desc }) {
  return (
    <section
      className={` ${
        sectionMargin && sectionMargin
      } flex flex-col bg-white items-center tablet-xl:flex-row tablet-xl:h-[900px] overflow-x-hidden`}
    >
      <div className="relative w-full h-full tablet-xl:flex-[0_0_50%]">
        {/* <span className="absolute top-2/4 left-2/4">hola</span> */}
        <Image
          src="/a.png"
          className="w-full mb-7 tablet-s:mb-12 tablet-xl:mb-0  object-cover max-h-96 tablet-l:max-h-full tablet-l:h-[500px] tablet-xl:h-full"
          width={613}
          height={1313}
        />
      </div>

      <div className="tablet-xl:pl-10 desktop-s:pl-12 desktop-l:pl-16 wrapper pb-12">
        <span className="desktop-l:w-[430px] text-h2-s tablet-s:text-h2-xl tablet-s:leading-[58px] font-bold text-main-heading-color leading-9 block mb-6 w-4/5">
          {title}
        </span>

        <p className="text-p-l mb-8">{desc}</p>
        <ServicesForm />
      </div>
    </section>
  );
}
