import { desktopNav } from "data/nav";
import Link from "next/link";
import DesktopMenuSelectNav from "./DesktopMenuSelectNav";

export default function DesktopMenu() {
  return (
    <nav className="mr-7 desktop-l:mr-11 relative">
      <ul className="flex gap-6 desktop-l:gap-8 font-medium text-[#333333]">
        {desktopNav &&
          desktopNav.map((link) => {
            return (
              <li key={link.key} className="m-auto">
                {link.subnav.length === 0 && (
                  <Link href={link.link} className="group relative">
                    <span>{link.name}</span>
                    <span className="w-full h-[10px] absolute bottom-0 left-0 translate-y-2 duration-500 ease-in-out opacity-0 bg-buttons-bg/20 group-hover:-translate-y-[0.01rem] group-hover:opacity-100"></span>
                  </Link>
                )}

                {link.subnav.length > 0 && (
                  <DesktopMenuSelectNav subnav={link.subnav} link={link} />
                )}
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
