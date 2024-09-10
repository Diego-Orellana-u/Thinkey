import Image from "next/image";
import ServicesForm from "../components/services/ServicesForm";

export default function LeadsForm({ formInfo }) {
  return (
    <section
      className={` ${
        formInfo.sectionMargin && formInfo.sectionMargin
      } flex flex-col bg-white items-center tablet-xl:flex-row tablet-xl:h-[900px] overflow-x-hidden`}
    >
      <div className="relative w-full h-full tablet-xl:flex-[0_0_50%]">
        <Image
          src={formInfo.imgHref}
          className="w-full mb-7 tablet-s:mb-12 tablet-xl:mb-0  object-cover max-h-96 tablet-l:max-h-full tablet-l:h-[500px] tablet-xl:h-full"
          width={613}
          height={1313}
          alt={formInfo.imgAlt}
        />
      </div>

      <div className="tablet-xl:pl-10 desktop-s:pl-12 desktop-l:pl-16 wrapper pb-12">
        <span className="desktop-l:w-[430px] text-h2-s tablet-s:text-h2-xl tablet-s:leading-[58px] font-bold text-main-heading-color leading-9 block mb-6 w-4/5">
          {formInfo.title}
        </span>

        <p className="text-p-l mb-8">{formInfo.desc}</p>
        <ServicesForm
          formFields={formInfo.formFields}
          btnText={formInfo.btnText}
        />
      </div>
    </section>
  );
}
