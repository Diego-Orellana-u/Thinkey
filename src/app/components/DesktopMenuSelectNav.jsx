"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function DesktopMenuSelectNav({ link, subnav }) {
  const [selected, setSelected] = useState(false);
  return (
    <div className="group">
      <div
        className="flex gap-1 h-16 "
        onMouseEnter={() => setSelected(true)}
        onMouseLeave={() => setSelected(false)}
      >
        {link.link ? (
          <div className="flex items-center gap-1">
            <Link href={link.link} className="relative">
              <span>{link.name}</span>
              <span className="w-full h-[10px] absolute bottom-0 translate-y-2 duration-300 ease-in-out opacity-0 bg-accent-900/20 group-hover:-translate-y-[0.01rem] group-hover:opacity-100"></span>
            </Link>
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
          </div>
        ) : (
          <>
            <div className="flex items-center gap-1">
              <div className="relative">
                <span>{link.name}</span>
                <span className="w-full h-[10px] absolute bottom-0 left-0 translate-y-2 duration-500 ease-in-out opacity-0 bg-accent-900/20 group-hover:-translate-y-[0.01rem] group-hover:opacity-100"></span>
              </div>
              <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
            </div>
          </>
        )}
      </div>
      <div
        className={`${
          selected
            ? "opacity-100 visible ease-in-out duration-300"
            : "opacity-0 invisible ease-in-out duration-300"
        }
          absolute z-10 bg-white rounded-xl -left-7`}
        onMouseEnter={() => setSelected(true)}
        onMouseLeave={() => setSelected(false)}
      >
        <ul className="group shadow-lg border-[1px] border-white-border rounded-xl grid grid-cols-2 gap-3 p-4 w-[450px] desktop-l:w-[550px]">
          {subnav.map((indiv) => (
            <li
              key={indiv.key}
              className={`${subnav.length % 3 === 0 ? "col-span-2" : ""}`}
            >
              <Link
                href={indiv.href}
                className="block select-none transition-colors rounded-xl p-3 leading-none no-underline outline-none hover:bg-gray-200 focus:bg-gray-200"
              >
                <div className="mb-2 text-black-body-color">{indiv.title}</div>
                <p className="mt-1 line-clamp-2 text-[14px] leading-snug text-gray-100">
                  {indiv.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
