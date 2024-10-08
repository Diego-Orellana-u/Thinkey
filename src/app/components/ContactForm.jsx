import ServicesForm from "../components/services/ServicesForm";
import Image from "next/image";

export default function ContactForm({ formInfo }) {
  return (
    <section
      className={` ${
        formInfo.sectionMargin && formInfo.sectionMargin
      } flex flex-col desktop-s:flex-row pb-10  overflow-x-hidden desktop-s:pt-10`}
    >
      <div className="px-5 mobile-l:px-7 min-[720px]:px-12 tablet-xl:pl-[3.3rem] desktop-l:pl-[5.75rem]">
        <Image
          src="/high-five.png"
          priority={true}
          width={1280}
          height={720}
          className="rounded-xl tablet-l:max-h-[650px] object-cover"
        />
      </div>

      <div className="mt-10 wrapper desktop-s:pr-12 desktop-s:pl-0 desktop-l:pr-[5.75rem] desktop-l:pl-10 w-full h-full">
        <span className="mobile-l:mb-5 desktop-l:w-[430px] text-h2-s tablet-s:text-h3-xl tablet-s:leading-[58px] font-bold text-main-heading-color leading-9 block mb-5 w-4/5">
          Get in touch
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
