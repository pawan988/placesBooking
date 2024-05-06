import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GrAnalytics } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const SubMneus = ({ data }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <>
      <li
        className="flex justify-center items-center gap-2 mt-7 cursor-pointer"
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        <GrAnalytics size={23} />
        <p className="capitalize flex-1">{data?.name}</p>
        <RiArrowDropDownLine size={23} />
      </li>
      <motion.ul
        animate={subMenuOpen ? { height: "fit-content" } : { height: 0 }}
        className="flex flex-col gap-4 mt-4 pl-14 text-[0.8rem] font-normal  overflow-hidden"
      >
        {data?.menus?.map((items, index) => {
          return (
            <li key={index}>
              <NavLink to="">{items}</NavLink>
            </li>
          );
        })}
      </motion.ul>
    </>
  );
};

export default SubMneus;
