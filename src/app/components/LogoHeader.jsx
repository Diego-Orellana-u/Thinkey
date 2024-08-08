import Link from "next/link";
import Image from "next/image";

export default function LogoHeader() {
  return (
    <Link href="/">
      <Image
        className="w-32 pt-1 desktop-s:pt-0 desktop-s:w-[225px]"
        src="/final-logo-thinkey.svg"
        alt="Logo of Thinkey school"
        width={215}
        height={67}
        priority={true}
      />
    </Link>
  );
}
