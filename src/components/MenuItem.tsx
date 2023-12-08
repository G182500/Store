"use client";

import { useState } from "react";

interface MenuItemProps {
  name: string;
  href?: string;
  subItens?: string[][];
}

export default function MenuItem(props: MenuItemProps) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div>
      {props.href ? (
        <a href={props.href}>
          <button className="flex flex-row bg-[#2b2e2d] hover:bg-[#3f4241] p-3 w-full text-white rounded-md h-full">
            <span className="text-[12px] sm:text-sm">{props.name}</span>
          </button>
        </a>
      ) : (
        <button
          onClick={toggleDropdown}
          className="flex flex-row bg-[#2b2e2d] p-3 w-full text-white rounded-md justify-between items-center gap-2"
        >
          <span className="text-[12px] sm:text-sm">{props.name}</span>
          <svg
            id="arrow-down"
            className={isDropdownVisible ? "hidden" : "w-5 h-5 stroke-current"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            {/*Desenhando a seta para baixo com path*/}
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>

          <svg
            id="arrow-up"
            className={isDropdownVisible ? "w-5 h-5 stroke-current" : "hidden"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            {/*Desenhando a seta para cima com <path>*/}
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}

      {props.subItens && (
        <div
          className={
            isDropdownVisible
              ? "py-2 mt-1 bg-[#2b2e2d] rounded-lg absolute lg:relative z-50"
              : "hidden"
          }
        >
          {props.subItens.map((subItem, index) => (
            <a
              key={`${props.name}_subItem${index}`}
              href={subItem[1]}
              className="text-[12px] sm:text-sm block pl-4 py-2 text-white hover:bg-[#3f4241] w-44"
            >
              {subItem[0]}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
