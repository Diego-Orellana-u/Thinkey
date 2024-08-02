import Image from "next/image";

export default function HighlightTitle() {
  return (
    <div>
      <div className="mb-8 flex flex-col items-center tablet-xl:items-start">
        <h2 className="text-h2-s tablet-s:text-h2-l tablet-s:leading-[48px] tablet-xl:text-left font-bold text-[#002A54] tracking-tight desktop-s:text-h2-l desktop-l:text-h2-xl desktop-l:leading-[67px]">
          Make your students
        </h2>
        <div className="relative max-w-fit ">
          <span className="text-h2-s tablet-s:text-h2-l tablet-s:leading-[48px] font-bold text-[#002A54] tracking-tight desktop-s:text-h2-l desktop-l:text-h2-xl desktop-l:leading-[67px]">
            start loving science
          </span>
          <Image
            className="absolute top-0 -z-10 left-[-6px] w-full tablet-xl:top-[-17px]"
            src="/highlight-marker.svg"
            width={210}
            height={61}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
