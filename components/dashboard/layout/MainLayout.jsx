"use client";

import React, { useContext } from "react";
import MainHeader from "./leyout-sections/MainHeader";

import { MenuContext } from "@/context/MenuContext";
import MainSidebar from "./leyout-sections/MainSidebar";
import MobileButtonNavigation from "./leyout-sections/MobileButtonNavigation";
import Sidebar from "@components/Sidebar";

const MainLayout = ({ children }) => {
   const { open } = useContext(MenuContext);

   return (
      <div className="bg-white min-h-screen">
         <MainSidebar />
         {/* <Sidebar></Sidebar> */}
         <div className={`${open ? "max-lg:blur-xl" : "blur-0"}`}>
            <MainHeader />
            <main className="lg:ml-[280px]">{children}</main>
         </div>
         <MobileButtonNavigation />
      </div>
   );
};

export default MainLayout;
