import Link from "next/link";

export default function Cta({ ctaInfo }) {
  return (
    <div
      className={`${
        ctaInfo.fullWidth
          ? ""
          : "tablet-l:px-[3rem] tablet-xl:px-[3.3rem] desktop-l:px-[5.75rem]"
      } ${ctaInfo.sectionPadding && ctaInfo.sectionPadding}`}
    >
      <div
        className={`relative isolate overflow-hidden ${
          ctaInfo.bgColor ? ctaInfo.bgColor : "bg-main-300"
        } ${
          ctaInfo.fullWidth ? "" : "tablet-s:rounded-3xl"
        }  px-6 pt-16 shadow-2xl tablet-l:px-16 tablet-xl:pt-24 desktop-s:px-24`}
      >
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] tablet-s:left-full tablet-s:-ml-80 tablet-l:left-1/2 tablet-l:ml-0 tablet-l:-translate-x-1/2 tablet-l:-translate-y-[15%]"
          aria-hidden="true"
        >
          <circle cx="512" cy="512" r="512" fill="#9FCF00" fillOpacity="0.2" />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775D6" />
              <stop offset="1" stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <div className="mx-auto max-w-md text-center pb-16">
          <h2 className="text-h3-s font-bold tracking-tight text-white tablet-s:text-h2-l tablet-s:leading-10">
            {ctaInfo.firstTitle}
            <br /> {ctaInfo.secondTitle}
          </h2>
          <p className="mt-6 text-p-l leading-8 text-gray-200">
            {ctaInfo.desc}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <Link
              href={ctaInfo.mainBtnHref}
              className="rounded-xl bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {ctaInfo.mainBtnText}
            </Link>
            <Link
              href={ctaInfo.secondBtnHref}
              className="text-sm font-semibold leading-6 text-white"
            >
              {ctaInfo.secondBtnText} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
