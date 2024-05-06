import React from "react";
import { CiMenuFries } from "react-icons/ci";

const Header = ({ isOpen, setIsOpen }) => {
  return (
    <div className=" px-2 py-2 flex justify-end items-center lg:hidden ">
      <CiMenuFries
        onClick={() => setIsOpen(!isOpen)}
        className="text-blue-900 h-12 w-12 lg:w-6 lg:h-6"
      />
    </div>
  );
};

export default Header;
