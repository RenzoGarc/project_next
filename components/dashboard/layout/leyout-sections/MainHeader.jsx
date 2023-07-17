"use client";

import { MenuContext } from "@/context/MenuContext";
import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import UserAreaSelectBox from "./UserAreaSelectBox";
import LanguageSelectBox from "./LanguageSelectBox";
import Image from "next/image";

const MainHeader = () => {
  const { toggle } = useContext(MenuContext);

  return (
    <div className="bg-Yellowgow flex justify-between items-center px-4 h-14 mb-4">
      <div className="m-5">
        {/* <Image src='/assets/logo/gow.png' width={50} height={50} alt='google' className='object-contain'/> */}
      </div>
      <div className="flex justify-center items-center gap-3">
        {/* <div>
               <LanguageSelectBox />
            </div> */}
        <div onClick={toggle} className="lg:hidden">
          <FaBars className="cursor-pointer" />
        </div>
        <div>
          <UserAreaSelectBox />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
