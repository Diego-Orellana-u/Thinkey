import Image from "next/image";

export default function TestimonyCard(info) {
  return (
    <div className="rounded-xl bg-yellowish-white-bg py-6 px-5 mobile-l:px-7 min-[490px]:h-[450px]">
      <div className="flex justify-between mb-4 desktop-s:mb-4 desktop-l:mb-7">
        <div>
          <Image
            className="pt-6"
            src={info.logo}
            width={108}
            height={45}
            alt=""
          />
        </div>
        <div className="w-[40%]">
          <Image src={info.portrait} width={129} height={152} alt="" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="font-medium text-h3-s">{info.name}</span>
        <p className="mb-3 text-black-body-color tablet-l:text-p-xl tablet-l:leading-7">
          {info.testimony}
        </p>
        <span className="text-p-xs">{info.position}</span>
      </div>
    </div>
  );
}
