"use client";
import Image from 'next/image';
import arrowDown from '@/assets/icons/menu/arrowDown.svg';
import arrowUp from '@/assets/icons/menu/arrowUp.svg';
import { useState } from "react";

interface SubCategoryProps {
  name: string;
  href: string;
}
interface CategoryProps {
  name: string;
  href?: string;
  subItens?: SubCategoryProps[];
}

export default function MenuItem(props: CategoryProps) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div>
      {props.href ? (
        <a href={props.href}>
          <button className="flex flex-row bg-[#2b2e2d] h-full hover:bg-[#3f4241] p-3 rounded-md text-white w-full">
            <span className="text-[12px] sm:text-sm">{props.name}</span>
          </button>
        </a>
      ) : (
        <>
          <button
            onClick={toggleDropdown}
            className="flex flex-row bg-[#2b2e2d] items-center justify-between p-3 rounded-md text-white w-full"
          >
            <span className="text-[12px] sm:text-sm">{props.name}</span>
            <Image className={isDropdownVisible ? "hidden" : "stroke-current"} src={arrowDown.src} height={20} width={20} alt="Seta para baixo" />
            <Image className={isDropdownVisible ? "stroke-current" : "hidden"} src={arrowUp.src} height={20} width={20} alt="Seta para cima" />
          </button>
          <div
            className={
              isDropdownVisible
              ? "absolute bg-[#2b2e2d] lg:relative z-50 mt-1 rounded-lg py-2"
              : "hidden"
            }>
              {props.subItens!.map((subItem, index) => (
                <a
                  key={`${props.name}_subItem${index}`}
                  href={subItem.href}
                  className="text-[12px] sm:text-sm block pl-4 py-2 text-white hover:bg-[#3f4241] w-44 lg:w-auto"
                >
                  {subItem.name}
                </a>
              ))}
          </div>
        </>
      )}
    </div>
  );
}
