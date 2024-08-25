import Image from "next/image";
import ServicesForm from "./ServicesForm";

export default function LeadsForm({ sectionPadding }) {
  return (
    <section
      className={` ${
        sectionPadding && sectionPadding
      } flex flex-col items-center tablet-xl:flex-row`}
    >
      <div className="w-full mb-7 tablet-s:mb-12">
        <Image
          src="/a.png"
          className="object-cover max-h-96 tablet-l:max-h-full w-full"
          width={613}
          height={1313}
        />
      </div>

      <div className="wrapper">
        <div>
          <span className="text-h2-s tablet-s:text-h2-xl tablet-s:leading-[58px] font-bold text-main-heading-color leading-9 block mb-6 w-4/5">
            We Love to Hear From You
          </span>
        </div>
        <p className="text-p-l mb-8">
          Kindly fill up the following form in order for us to better serve you.
          All your personal information will be kept confidential.
        </p>
        <ServicesForm />
      </div>
    </section>
  );
}
