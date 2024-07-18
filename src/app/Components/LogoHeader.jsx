import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logos/logo-thinkey.svg";

export default function LogoHeader() {
  return (
    <Link href="/">
      <Image className="w-30 pt-1" src={logo} alt="Logo of Thinkey school" />
    </Link>
  );
}
