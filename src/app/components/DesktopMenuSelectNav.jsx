"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DesktopMenuSelectNav({ link, subnav }) {
  const [selected, setSelected] = useState(false);
  return (
    <div className="group">
      <div
        className="flex gap-1 h-16 items-center"
        onMouseEnter={() => setSelected(true)}
        onMouseLeave={() => setSelected(false)}
      >
        <Link href={link.link} className="relative">
          <span>{link.name}</span>
          <span className="w-full h-[10px] absolute bottom-0 left-0 translate-y-2 duration-300 ease-in-out opacity-0 bg-[#8f1472]/20 group-hover:-translate-y-[0.01rem] group-hover:opacity-100"></span>
        </Link>
        <Image src="/caret-down.svg" width={15} height={8} alt="" />
      </div>
      <div
        className={`${
          selected
            ? "opacity-100 visible ease-in-out duration-300"
            : "opacity-0 invisible ease-in-out duration-300"
        }
          absolute z-10 bg-white rounded-[0.45rem] left-0`}
        onMouseEnter={() => setSelected(true)}
        onMouseLeave={() => setSelected(false)}
      >
        <div className="group shadow-lg border-[1px] border-[#e5e7eb] w-full overflow-hidden rounded-[0.45rem]">
          <ul className="grid grid-cols-2 gap-3 p-4 w-[400px] desktop-l:w-[600px]">
            {subnav.map((indiv) => (
              <li key={indiv.key}>
                <Link
                  href={indiv.href}
                  className="block select-none space-y-1 transition-colors rounded-[0.45rem] p-3 leading-none no-underline outline-none hover:bg-[#f1f1f1] focus:bg-[#f1f1f1]"
                >
                  <div className="text-sm font-medium leading-none text-[#16171D]">
                    {indiv.title}
                  </div>
                  <p className="mt-1 line-clamp-2 text-sm leading-snug text-[#71717a]">
                    {indiv.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
