import React, { useContext } from "react";
import Link from "next/link";
import { MenuContext } from "@/context/MenuContext";

import { AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { FaAngleRight, FaCheck, FaCheckDouble } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { SiHelpscout, SiSinglestore } from "react-icons/si";

const MainSidebar = () => {
   const { open, toggle } = useContext(MenuContext);

   const closeSeideBarHandler = () => {
      toggle();
   };

   return (
      <aside
         className={`bg-white top-4 left-4 h-[calc(95vh-2rem)] lg:fixed lg:block lg:top-16 lg:left-8 rounded-lg overflow-hidden transition-all duration-200 ${
            open ? "w-60 p-4 block fixed" : "w-0 hidden"
         } lg:w-60 lg:p-4 z-50 shadow-sm`}
      >
         <ul>
            <li className="flex justify-end items-center lg:hidden">
               <AiOutlineClose
                  onClick={closeSeideBarHandler}
                  className="text-red-500 hover:text-red-800 cursor-pointer"
               />
            </li>

            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
               <AiOutlineHome className="mr-2" />
               <Link href="/dashboard" onClick={closeSeideBarHandler}>
                  Dashboard
               </Link>
            </li>
            <li className="flex flex-col justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
               <div className="w-full flex flex-row justify-start items-center">
                  <FaCheck className="mr-2" />
                  <h3 className="flex-1">GOW App</h3>
                  <FaAngleRight />
               </div>
               <ul className="ml-8 mt-4">
                  <li className="flex justify-center items-center gap-3">
                     <SiSinglestore />
                     <Link href="/dashboard/gowapp/materiales" onClick={closeSeideBarHandler}>
                        Materiales
                     </Link>
                  </li>
               </ul>
               <ul className="ml-8 mt-4">
                  <li className="flex justify-center items-center gap-3">
                     <SiSinglestore />
                     <Link href="/dashboard/singular/selectbox" onClick={closeSeideBarHandler}>
                        Audiolibros
                     </Link>
                  </li>
               </ul>
               <ul className="ml-8 mt-4">
                  <li className="flex justify-center items-center gap-3">
                     <SiSinglestore />
                     <Link href="/dashboard/singular/selectbox" onClick={closeSeideBarHandler}>
                        Juegos
                     </Link>
                  </li>
               </ul>
               <ul className="ml-8 mt-4">
                  <li className="flex justify-center items-center gap-3">
                     <SiSinglestore />
                     <Link href="/dashboard/singular/selectbox" onClick={closeSeideBarHandler}>
                        Parámetros
                     </Link>
                  </li>
               </ul>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
               <GrProjects className="mr-2" />
               <h3 className="flex-1">Materiales</h3>
               <FaAngleRight />
            </li>
            <li className="flex flex-col justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
               <div className="w-full flex flex-row justify-start items-center">
                  <FaCheck className="mr-2" />
                  <h3 className="flex-1">Estudiantes</h3>
                  <FaAngleRight />
               </div>
               <ul className="ml-8 mt-4">
                  <li className="flex justify-center items-center gap-3">
                     <SiSinglestore />
                     <Link href="/dashboard/singular/selectbox" onClick={closeSeideBarHandler}>
                        Usuarios
                     </Link>
                  </li>
               </ul>
            </li>
            {/* <li className="flex flex-col justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
               <div className="w-full flex flex-row justify-start items-center">
                  <FaCheckDouble className="mr-2" />
                  <h3 className="flex-1">Complex</h3>
                  <FaAngleRight />
               </div>
               <ul className="ml-8 mt-4">
                  <li className="flex justify-start items-center gap-3 my-1">
                     <SiSinglestore />
                     <Link href="/dashboard/complex/horizontal-scrollbar" onClick={closeSeideBarHandler}>
                        Ho-Scrollbar
                     </Link>
                  </li>
                  <li className="flex justify-start items-center gap-3 my-1">
                     <SiSinglestore />
                     <Link href="/dashboard/complex/tabs" onClick={closeSeideBarHandler}>
                        Tabs
                     </Link>
                  </li>
                  <li className="flex justify-start items-center gap-3 my-1">
                     <SiSinglestore />
                     <Link href="/dashboard/complex/slider" onClick={closeSeideBarHandler}>
                        Slider
                     </Link>
                  </li>
               </ul>
            </li> */}
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
               <SiHelpscout className="mr-2" />
               <Link href="/dashboard/about-us" onClick={closeSeideBarHandler}>
                  Institución
               </Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
               <FiPhoneCall className="mr-2" />
               <Link href="/dashboard/contact-us" onClick={closeSeideBarHandler}>
                  Perfil
               </Link>
            </li>
         </ul>
      </aside>
   );
};

export default MainSidebar;
