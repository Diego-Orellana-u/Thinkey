import logo from "../../assets/logos/logo-thinkey.svg";

import Image from "next/image";
import { MenuIcon } from "./MenuIcon";
export const Header = () => {
  return (
    <div className="h-14 shadow-md flex justify-between px-5 items-center">
      <Image className="w-28 pt-1" src={logo} alt="Logo of Thinkey school" />
      <div>
        <MenuIcon />
      </div>
    </div>
  );
};
