import Image from "next/image";

export default function FiftyTwo({ fiftyTwoInfo }) {
  return (
    <section
      className={` ${
        fiftyTwoInfo.sectionMargin && fiftyTwoInfo.sectionMargin
      } ${
        fiftyTwoInfo.bgColor && fiftyTwoInfo.bgColor
      } flex flex-col items-center tablet-xl:flex-row tablet-xl:h-[700px] overflow-x-hidden `}
    >
      <div className="relative w-full h-full tablet-xl:flex-[0_0_45%]">
        <Image
          src={fiftyTwoInfo.imgHref}
          className="w-full mb-7 tablet-s:mb-12 tablet-xl:mb-0  object-cover max-h-96 tablet-l:max-h-full tablet-l:h-[500px] tablet-xl:h-full"
          width={fiftyTwoInfo.imgWidth}
          height={fiftyTwoInfo.imgHeight}
        />
      </div>

      <div className="tablet-xl:pl-10 desktop-s:pl-12 desktop-l:pl-16 wrapper pb-12 desktop-s:pb-0">
        <div className="text-gray-body-color">
          <h2 className="text-p-l font-medium">{fiftyTwoInfo.headingTwo}</h2>
          <span className="mt-4 text-h2-s tablet-s:text-h2-l tablet-s:leading-[40px] font-bold text-black-heading-color leading-9 block w-full mb-5">
            {fiftyTwoInfo.bigTitle}
          </span>

          <p className="text-p-l mb-8">{fiftyTwoInfo.desc}</p>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-10 tablet-s:grid-cols-2">
          {fiftyTwoInfo.points.map((point) => (
            <div key={point.key}>
              <span className="text-black-heading-color font-medium text-p-s">
                {point.title}
              </span>
              <p className="text-gray-body-color text-p-s mt-2">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
