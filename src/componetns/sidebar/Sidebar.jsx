import { useState, useRef, useEffect } from "react";

import "../../App.css";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const pathname = location.pathname;
    const foundIndex = menus.findIndex((menu) => menu.path === pathname);
    setSelectedItem(foundIndex !== -1 ? foundIndex : 0);
  }, [location.pathname]);

  const menus = [
    { title: "Dashboard", path: "/dashboard" },
    { title: "Places", path: "/places" },
  ];

  const handleMenuItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <>
      <div
        ref={sidebarRef}
        className="bg-primary text-gray-100 flex justify-between sm:hidden"
      >
        <label
          htmlFor="menu-open"
          id="mobile-menu-button"
          className="m-2 p-2 focus:outline-none hover:text-white hover:bg-primary rounded-md"
        >
          {!open ? (
            <svg
              id="menu-open-icon"
              className="h-6 w-6 transition duration-200 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => toggleSidebar()}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              id="menu-close-icon"
              className="h-6 w-6 transition duration-200 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => toggleSidebar()}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </label>
      </div>

      {/* Sidebar content */}
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 ${
          !open && "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full py-4 overflow-y-auto bg-[#29446e] dark:bg-[#29446e]">
          {/* Logo */}
          <div className="flex gap-0 pb-2 mt-4 mx-2 justify-center border border-white rounded-xl items-center">
            <p className="text-4xl cursor-pointer text-[#ffffff]">Logo</p>
          </div>

          {/* Menu items */}
          <div className="pr-0 pl-3">
            <ul className="space-y-2">
              {menus?.map((menu, index) => (
                <li
                  className={`mt-12 text-white ${
                    selectedItem === index ? "text-black" : ""
                  }`}
                  key={index}
                  onClick={() => handleMenuItemClick(index)}
                >
                  <Link to={menu?.path} className="block">
                    <div
                      className={`flex gap-2 items-center cursor-pointer px-2 py-3  ${
                        selectedItem === index
                          ? "bg-[#45a9b0] text-[#ffffff] pt-2 pb-2"
                          : ""
                      }`}
                    >
                      {menu?.icon}
                      <p className="text-xl cursor-pointer">{menu?.title}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
