import Image from "next/image";
import { mobileNav } from "data/nav.js";
import { useState } from "react";
import Link from "next/link";

export const MenuNavm = () => {
  const [opened, setOpened] = useState([]);

  const handleOpen = (key) => {
    if (opened.includes(key)) {
      setOpened(opened.filter((items) => items !== key));
    } else {
      setOpened([...opened, key]);
    }
  };

  return (
    <div>
      {mobileNav &&
        mobileNav.map((link) => {
          return (
            <div key={link.key}>
              {link.subnav.length === 0 && (
                <Link
                  href={link.link}
                  className="text-p-xl h-16 flex justify-between items-center mx-5 mobile-m:mx-7 relative cursor-pointer border-b-2 border-zinc-300"
                >
                  {link.name}
                </Link>
              )}

              {/* Here we separate individual nav and navs with subnavs */}

              {link.subnav.length > 0 && (
                <div className="border-b-2 border-zinc-300 mx-5 mobile-m:mx-7">
                  <div
                    onClick={() => handleOpen(link.key)}
                    className="h-16 flex flex-col items-center justify-between relative cursor-pointer"
                  >
                    <div className="flex h-full justify-between items-center w-full">
                      <span className="text-p-xl">{link.name}</span>
                      <Image
                        className=""
                        src="/plus.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div
                    className={`${
                      opened.includes(link.key)
                        ? "height-in overflow-visible"
                        : "overflow-hidden max-h-0 height-out"
                    }`}
                  >
                    <div className="mb-3 w-full pl-7 flex flex-col">
                      {link.subnav.map((subnav) => {
                        return (
                          <Link
                            href={subnav.link}
                            key={subnav.name}
                            className="mb-4 px-2"
                          >
                            {subnav.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

//to-do: see why it re-renders each time we open or close the menu
//to-do: implement transitions without delays
