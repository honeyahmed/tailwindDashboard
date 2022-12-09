import React from "react";
import person from "../../Images/person.jpg";
import { IoMdArrowDropdown } from "react-icons/io";
const Header = () => {
  return (
    <header className="border-b-2 border-gray-300 p-2 flex justify-end items-center">
      <div>
        <img className="w-7 h-7 rounded-full" src={person} alt="Rounded avatar" />
      </div>
      <div className="flex items-center justify-center ml-2">
        <span> Islam Alsultan</span>
        <span className="ml-1 text-gray-400">
          <IoMdArrowDropdown />
        </span>
      </div>
    </header>
  );
};

export default Header;
