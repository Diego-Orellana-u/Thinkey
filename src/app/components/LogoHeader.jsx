import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logos/logo-thinkey.svg";

export default function LogoHeader() {
  return (
    <Link href="/">
      <Image
        className="w-30 min-[1024px]:w-[150px] pt-1 min-[1024px]:pt-6"
        src={logo}
        alt="Logo of Thinkey school"
      />
    </Link>
  );
}
