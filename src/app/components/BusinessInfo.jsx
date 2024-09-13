import Link from "next/link";
import BuildingIcon from "./Icons/BuildingIcon";
import MailIcon from "./Icons/MailIcon";
import PhoneIcon from "./Icons/PhoneIcon";

export default function BusinessInfo({ businessInfo }) {
  return (
    <div className="flex flex-col-reverse desktop-l:flex-row-reverse desktop-s:gap-16 mt-16 desktop-s:mt-0 desktop-l:mt-32 wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.575721324211!2d-70.62685692451103!3d-33.43430417339598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5871b78d8a9%3A0x30fdf16143723872!2sAlmte.%20Zegers%20672%2C%207500714%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1sen!2scl!4v1725507783771!5m2!1sen!2scl"
        width="600"
        height="450"
        className="border-0 w-full mb-16"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="w-full mb-12 desktop-s:mb-0 desktop-s:mt-16">
        <span
          className={`relative text-h2-s tablet-l:text-h2-l font-bold leading-7 text-main-heading-color z-20`}
        >
          {businessInfo.title}
        </span>
        <p className={`mt-6 text-p-l leading-8 text-black-body-color`}>
          {businessInfo.desc}
        </p>
        <div className="flex flex-col gap-4 mt-8 text-p-l leading-8 text-black-body-color">
          <div className="flex gap-5 items-center">
            <BuildingIcon />
            <span>{businessInfo.direction}</span>
          </div>
          <div className="flex gap-5 items-center">
            <PhoneIcon width="24" height="24" />
            <span>{businessInfo.phone}</span>
          </div>
          <div className="flex gap-5 items-center">
            <MailIcon />
            <Link href={businessInfo.mailHref} className="pb-[2px]">
              {businessInfo.mailText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
