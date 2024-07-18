import { MenuIcon } from "./MenuIcon";
import LogoHeader from "./LogoHeader";
export const Header = () => {
  return (
    <div className="sticky top-0 py-3 z-10">
      <div className="h-14 flex justify-between px-5 items-center bg-transparent">
        <LogoHeader />
        <div>
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};

// Header logo is server component so it's rendered in the server
