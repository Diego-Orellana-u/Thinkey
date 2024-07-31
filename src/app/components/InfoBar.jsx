import Image from "next/image";
import mailIcon from "../../assets/icons/mail-icon.svg";
import Link from "next/link";

export default function InfoBar() {
  return (
    <section className="tablet-s:justify-between tablet-s:px-8 relative text-xs info-bar z-10 py-2 justify-around flex items-center bg-slate-400 tablet-xl:px-12 desktop-l:px-[92px]">
      <div className="flex gap-4 desktop-s:relative desktop-s:left-[30%]">
        <div className="flex gap-2">
          <Image
            src="/phone-icon.svg"
            width={20}
            height={20}
            className="w-[21px] h-[21px]"
          />
          <div className="flex items-center">
            <span className="text-white pt-[3px]">+ 569 7791 7078</span>
          </div>
        </div>

        <div className="desktop-s:flex hidden gap-2">
          <Image src="/map-icon.svg" width={14.59} height={17} />
          <div className="flex items-center">
            <span className="text-white pt-[5px]">
              GENERAL SALVO 184, OFFICE C
            </span>
          </div>
        </div>

        <div className="flex gap-2">
          <Image src={mailIcon} />
          <div className="flex items-center">
            <span className="text-white pt-[5px]">INFO@THINKEY.CL</span>
          </div>
        </div>
      </div>
      <div className="gap-3 items-center hidden tablet-s:flex">
        <Link href="/" className="">
          <Image src="fb-icon.svg" width={17} height={17} />
        </Link>
        <Link href="/" className="mb-">
          <Image src="youtube.svg" width={22} height={18} />
        </Link>
        <Link href="/" className="">
          <Image src="x.svg" width={19} height={19} />
        </Link>
        <Link href="/" className="">
          <Image
            src="linkedin-icon.svg"
            width={17.06}
            height={15}
            className="mb-[1px]"
          />
        </Link>
      </div>
    </section>
  );
}
