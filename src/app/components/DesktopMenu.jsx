import { desktopNav } from "data/nav";
import Image from "next/image";
import Link from "next/link";

export default function DesktopMenu() {
  return (
    <div className="mr-[43px]">
      <ul className="flex gap-10 font-medium text-lg text-[#333333]">
        {desktopNav &&
          desktopNav.map((link) => {
            return (
              <li
                key={link.key}
                className={link.subnav.length > 0 ? `flex gap-1` : undefined}
              >
                {link.subnav.length === 0 && (
                  <Link href={link.link}>{link.name}</Link>
                )}

                {link.subnav.length > 0 && (
                  <div className="flex gap-1">
                    <Link href={link.link}>{link.name}</Link>
                    <Image src="/caret-down.svg" width={15} height={8} />
                  </div>
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
