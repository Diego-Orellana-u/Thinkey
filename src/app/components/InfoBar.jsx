import Image from "next/image";
import mailIcon from "../../assets/icons/mail-icon.svg";
import Link from "next/link";

export default function InfoBar() {
  return (
    <section className="text-white wrapper relative flex justify-around tablet-s:justify-between text-[12px] info-bar py-2 ">
      <div className="flex gap-4 desktop-s:pl-[25%] desktop-l:pl-[30%]">
        <div className="flex gap-2 items-center">
          <Image
            src="/phone-icon.svg"
            width={20}
            height={20}
            className="w-[18px] h-[18px]"
            alt="icon of a phone that represents the phone number"
            priority={true}
          />
          <span className="pt-[3px]">+ 569 7791 7078</span>
        </div>

        <div className="desktop-s:flex hidden gap-2">
          <Image
            src="/map-icon.svg"
            width={14.59}
            height={17}
            priority={true}
            alt="icon of a point in a map that represents the office address"
          />
          <span className="pt-[5px]">GENERAL SALVO 184, OFFICE C</span>
        </div>

        <div className="flex gap-2">
          <Image
            src={mailIcon}
            priority={true}
            alt="icon of a letter that represents the mail"
          />
          <span className="pt-[5px]">INFO@THINKEY.CL</span>
        </div>
      </div>
      <div className="gap-3 items-center hidden tablet-s:flex">
        <Link href="/" className="">
          <Image
            src="fb-icon.svg"
            width={17}
            height={17}
            alt="Icon of facebook"
            priority={true}
          />
        </Link>
        <Link href="/" className="mb-">
          <Image
            src="youtube.svg"
            width={22}
            height={18}
            alt="icon of youtube"
            priority={true}
          />
        </Link>
        <Link href="/" className="">
          <Image
            src="x.svg"
            width={19}
            height={19}
            alt="icon of x/twitter"
            priority={true}
          />
        </Link>
        <Link href="/" className="">
          <Image
            src="linkedin-icon.svg"
            width={17.06}
            height={15}
            className="mb-[1px]"
            alt="icon of linkedin"
            priority={true}
          />
        </Link>
      </div>
    </section>
  );
}
