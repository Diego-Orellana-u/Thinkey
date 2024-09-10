import { desktopNav } from "data/nav.js";
import Link from "next/link";
import DesktopMenuSelectNav from "../menu/DesktopMenuSelectNav";

export default function DesktopMenu() {
  return (
    <nav className="mr-7 desktop-l:mr-11 relative">
      <ul className="flex gap-6 desktop-l:gap-8 font-medium text-black-body-color">
        {desktopNav &&
          desktopNav.map((link) => {
            return (
              <li key={link.key} className="m-auto font-normal text-black">
                {link.subnav.length === 0 && (
                  <Link href={link.link} className="group relative">
                    <span>{link.name}</span>
                    <span className="w-full h-[10px] absolute bottom-0 left-0 translate-y-2 duration-500 ease-in-out opacity-0 bg-accent-900/20 group-hover:-translate-y-[0.01rem] group-hover:opacity-100"></span>
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
