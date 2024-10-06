import Link from "next/link";
import Image from "next/image";

export default function LogoHeader({ position }) {
  return (
    <Link href="/" className={`${position ? position : ""}`}>
      <Image
        className="w-44 pt-1 desktop-s:pt-0 desktop-s:w-[225px] block"
        src="/logo-thinkey-oficial.svg"
        alt="Logo of Thinkey school"
        width={215}
        height={67}
        priority={true}
      />
    </Link>
  );
}
