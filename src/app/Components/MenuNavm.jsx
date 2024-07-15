import Image from "next/image";
import plusIcon from "../../assets/icons/plus.svg";
import { nav } from "../../data/nav.js";
import { useState } from "react";

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
      {nav &&
        nav.map((link) => {
          return (
            <div key={link.key}>
              {Object.keys(link.subnav).length === 0 && (
                <a
                  href={link.link}
                  className="text-xl h-16 flex justify-between items-center mx-7 relative cursor-pointer border-b-2"
                >
                  {link.name}
                </a>
              )}

              {/* Here we separate individual nav and navs with subnavs */}

              {Object.keys(link.subnav).length > 0 && (
                <div className="border-b-2 mx-7">
                  <div
                    onClick={() => handleOpen(link.key)}
                    className="h-16 flex flex-col items-center justify-between relative cursor-pointer"
                  >
                    <div className="flex h-full justify-between items-center w-full">
                      <span className="text-xl">{link.name}</span>
                      <Image className="" src={plusIcon} alt="" />
                    </div>
                  </div>
                  <div
                    className={`${
                      opened.includes(link.key)
                        ? "height-in overflow-visible"
                        : "overflow-hidden max-h-0 height-out"
                    }`}
                  >
                    <div className="mb-3 w-full px-7 flex flex-col">
                      {link.subnav.map((subnav) => {
                        return (
                          <a
                            href={subnav.link}
                            key={subnav.name}
                            className="mb-4 px-2"
                          >
                            {subnav.name}
                          </a>
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
