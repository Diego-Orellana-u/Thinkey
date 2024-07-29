import { desktopNav } from "data/nav";
import Image from "next/image";
import Link from "next/link";

export default function DesktopMenu() {
  return (
    <nav className="mr-[43px]">
      <ul className="flex gap-10 font-medium text-lg text-[#333333]">
        {desktopNav &&
          desktopNav.map((link) => {
            return (
              <li
                key={link.key}
                className={`${
                  link.subnav.length > 0 ? `flex gap-1` : undefined
                }`}
              >
                {link.subnav.length === 0 && (
                  <Link
                    href={link.link}
                    className="group relative md:inline-block"
                  >
                    <span>{link.name}</span>
                    <span className="w-full h-[10px] absolute bottom-0 left-0 translate-y-2 duration-300 ease-in-out opacity-0 bg-[#8f1472]/20 group-hover:-translate-y-0.5 group-hover:opacity-100"></span>
                  </Link>
                )}

                {link.subnav.length > 0 && (
                  <div className="flex gap-1">
                    <Link href={link.link}>
                      <span>{link.name}</span>
                    </Link>
                    <Image src="/caret-down.svg" width={15} height={8} />
                  </div>
                )}
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
