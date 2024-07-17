import { MenuIcon } from "./MenuIcon";
import LogoHeader from "./LogoHeader";
export const Header = () => {
  return (
    <div className="h-14 fixed w-full flex justify-between pt-5 px-5 items-center bg-transparent">
      <LogoHeader />
      <div>
        <MenuIcon />
      </div>
    </div>
  );
};

// Header logo is server component so it's rendered in the server
