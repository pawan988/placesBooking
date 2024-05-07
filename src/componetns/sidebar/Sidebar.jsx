// import { useState, useRef, useEffect } from "react";

import { useEffect, useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { delay, motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { AiOutlineAppstore } from "react-icons/ai";
import SubMneus from "./SubMenu";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";

// import "../../App.css";
// import { Link, useLocation } from "react-router-dom";

// const Sidebar = () => {
//   const location = useLocation();
//   const [open, setOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const sidebarRef = useRef(null);

//   const toggleSidebar = () => {
//     setOpen(!open);
//   };

//   const handleClickOutside = (event) => {
//     if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//       setOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("click", handleClickOutside);

//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   useEffect(() => {
//     const pathname = location.pathname;
//     const foundIndex = menus.findIndex((menu) => menu.path === pathname);
//     setSelectedItem(foundIndex !== -1 ? foundIndex : 0);
//   }, [location.pathname]);

//   const menus = [
//     { title: "Dashboard", path: "/dashboard" },
//     { title: "Places", path: "/places" },
//   ];

//   const handleMenuItemClick = (index) => {
//     setSelectedItem(index);
//   };

//   return (
//     <>
//       <div
//         ref={sidebarRef}
//         className="bg-primary text-gray-100 flex justify-between sm:hidden"
//       >
//         <label
//           htmlFor="menu-open"
//           id="mobile-menu-button"
//           className="m-2 p-2 focus:outline-none hover:text-white hover:bg-primary rounded-md"
//         >
//           {!open ? (
//             <svg
//               id="menu-open-icon"
//               className="h-6 w-6 transition duration-200 ease-in-out"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               onClick={() => toggleSidebar()}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           ) : (
//             <svg
//               id="menu-close-icon"
//               className="h-6 w-6 transition duration-200 ease-in-out"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               onClick={() => toggleSidebar()}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           )}
//         </label>
//       </div>

//       {/* Sidebar content */}
//       <aside
//         id="default-sidebar"
//         className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 ${
//           !open && "-translate-x-full"
//         } sm:translate-x-0`}
//         aria-label="Sidebar"
//       >
// <div className="h-full py-4 overflow-y-auto bg-[#29446e] dark:bg-[#29446e]">
//           {/* Logo */}
//           <div className="flex gap-0 pb-2 mt-4 mx-2 justify-center border border-white rounded-xl items-center">
//             <p className="text-4xl cursor-pointer text-[#ffffff]">Logo</p>
//           </div>

//           {/* Menu items */}
//           <div className="pr-0 pl-3">
//             <ul className="space-y-2">
//               {menus?.map((menu, index) => (
//                 <li
//                   className={`mt-12 text-white ${
//                     selectedItem === index ? "text-black" : ""
//                   }`}
//                   key={index}
//                   onClick={() => handleMenuItemClick(index)}
//                 >
//                   <Link to={menu?.path} className="block">
//                     <div
//                       className={`flex gap-2 items-center cursor-pointer px-2 py-3  ${
//                         selectedItem === index
//                           ? "bg-[#45a9b0] text-[#ffffff] pt-2 pb-2"
//                           : ""
//                       }`}
//                     >
//                       {menu?.icon}
//                       <p className="text-xl cursor-pointer">{menu?.title}</p>
//                     </div>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;

const Sidebar = () => {
  let isTab = useMediaQuery({ query: "(max-width: 768px)" });
  console.log("isTabisTab ===>>>", isTab);
  // Sidebar Open State
  const [isOpen, setIsOpen] = useState(isTab ? false : true);
  const sidebar_animation = isTab
    ? // Mobile View
      {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: "0rwm",
          transition: { damping: 40, delay: 0.15 },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: { width: "4rem", transition: { damping: 40 } },
      };

  useEffect(() => {
    if (isTab) {
      //Mobile
      setIsOpen(false);
    } else {
      //Laptop
      setIsOpen(true);
    }
  }, [isTab]);

  const subMenusList = [
    {
      name: "Build",
      menus: ["Auth", "App Settings", "Storage", "Hosting"],
    },
    {
      name: "Analytics",
      menus: ["Dashboard", "Real Time", "Events"],
    },
  ];

  return (
    <div>
      <div
        onClick={() => setIsOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[988] bg-black/50 ${
          isOpen ? "block" : "hidden"
        }`}
      ></div>
      <motion.div
        variants={sidebar_animation}
        animate={isOpen ? "open" : "closed"}
        className="bg-blue-950 text-white shadow-xl z-[999] w-[16rem] max-w-[16rem] h-screen overflow-hidden md:relative fixed"
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5 font-medium border-b border-slate-300 py-3 mx-3">
          <RxAvatar size={25} />
          <span
            className={`text-xl whitespace-pre ${isOpen ? "block" : "hidden"}`}
          >
            Pawan
          </span>
        </div>
        {/* Menus */}
        <div className="flex flex-col h-full">
          {/* First */}
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-5 font-medium overflow-x-hidden scrollbar-thin h-[70%] md:h-[68%]">
            <li>
              <NavLink to="" className="flex gap-3">
                <AiOutlineAppstore size={23} />
                <p className={`whitespace-pre ${isOpen ? "block" : "hidden"}`}>
                  All Apps
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="flex gap-3">
                <AiOutlineAppstore size={23} />
                <p className={`whitespace-pre ${isOpen ? "block" : "hidden"}`}>
                  Authentication
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="flex gap-3">
                <AiOutlineAppstore size={23} />
                <p className={`whitespace-pre ${isOpen ? "block" : "hidden"}`}>
                  Storage
                </p>
              </NavLink>
            </li>
            {/* Sunmenus */}
            {(isOpen || isTab) && (
              <div className="border-y py-5 border-slate-300">
                <small className="pl-3 text-slate-300 inline-block mb-2">
                  Product Categories
                </small>
                {subMenusList?.map((items, index) => {
                  return (
                    <div key={index} className="flex flex-col gap-1">
                      <SubMneus data={items} />
                    </div>
                  );
                })}
              </div>
            )}

            <li>
              <NavLink to="" className="flex gap-3">
                <AiOutlineAppstore size={23} />
                <p className={`whitespace-pre ${isOpen ? "block" : "hidden"}`}>
                  Setting
                </p>
              </NavLink>
            </li>
          </ul>
          {/* Second */}
          {isOpen && (
            <div className="flex-1 text-sm z-50 max-h-48 my-auto whitespace-pre w-full font-medium">
              <div className="flex border-y border-slate-300 p-4 items-center justify-between">
                <div>
                  <p>Spark</p>
                  <small>No-cost $0/month</small>
                </div>
                <p className="text-teal-600 py-1.5 px-3 text-xs bg-teal-200 rounded-xl">
                  Upgrade
                </p>
              </div>
            </div>
          )}
        </div>
        {/* Controlled Button  */}
        <motion.div
          animate={
            isOpen
              ? { x: 0, y: 0, rotate: 0 }
              : { x: -10, y: -200, rotate: 180 }
          }
          transition={{
            duration: 0,
          }}
          onClick={() => setIsOpen(!isOpen)}
          className="absolute w-fit h-fit z-50 right-2 bottom-3 cursor-pointer md:block hidden"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
      <div className="m-3 md-hidden" onClick={() => setIsOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
