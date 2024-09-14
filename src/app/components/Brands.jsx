import Image from "next/image";

export default function Brands({ brandsInfo }) {
  return (
    <div
      className={`wrapper ${
        brandsInfo.sectionBg ? brandsInfo.sectionBg : "bg-white"
      } ${brandsInfo.sectionPadding ? brandsInfo.sectionPadding : "py-32"}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2
          className={`text-center ${
            brandsInfo.titleColor
              ? brandsInfo.titleColor
              : "text-black-heading-color"
          } text-h3-s tablet-l:text-h2-l tablet-l:leading-10 font-semibold leading-8 tablet-s:mb-20`}
        >
          {brandsInfo.title}
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 mobile-l:max-w-xl mobile-l:grid-cols-6 mobile-l:gap-x-10 desktop-s:mx-0 desktop-s:max-w-none tablet-l:grid-cols-5">
          {brandsInfo.brands &&
            brandsInfo.brands.map((brand) => (
              <Image
                key={brand.key}
                alt={brand.imgAlt}
                src={brand.imgHref}
                width={158}
                height={48}
                className={`${
                  brand.customCss
                    ? brand.customCss
                    : "col-span-2 max-h-12 w-full object-contain tablet-l:col-span-1"
                }`}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
