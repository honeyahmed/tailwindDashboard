import React from "react";
import { GiChicken } from "react-icons/gi";
import { CgArrowsV } from "react-icons/cg";
import { IoMdArrowDropleft, IoMdArrowDropdown } from "react-icons/io";

const Sidebar = ({ isOpen }) => {
  return (
    <aside
      className={`w-64 min-h-screen border-r-2  flex-col justify-between relative  ${
        isOpen === true ? "flex" : "hidden"
      }`}
      aria-label="Sidebar"
    >
      <div class="overflow-y-auto py-4 px-3 bg-white ">
        <div className="flex justify-between items-center border-2 border-gray-400 rounded-3xl p-2 mb-10">
          <div className="font-bold flex w-auto items-center">
            <div className="rounded-full mr-2 w-7 h-7 bg-red-600 flex justify-center items-center text-white">
              <GiChicken />
            </div>
            Inframodern
          </div>
          <div>
            <CgArrowsV />
          </div>
        </div>
        <ul class="space-y-2">
          <li>
            <a
              href="#"
              class="flex items-center pr-2 pl-2 pb-4 text-base font-bold text-gray-900 border-b-2 border-black "
            >
              <span class="ml-3 ">Home</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-bold text-gray-900 rounded-lg  "
            >
              <span class="flex-1 ml-3 whitespace-nowrap ">Products data</span>
              <span>
                <IoMdArrowDropleft />
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-bold text-gray-900 rounded-lg  "
            >
              <span class="flex-1 ml-3 whitespace-nowrap ">
                Brands & Branches
              </span>
              <span>
                <IoMdArrowDropdown />
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-bold text-gray-900 rounded-lg  "
            >
              <span class="flex-1 ml-3 whitespace-nowrap ">Customers</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-bold text-gray-900  border-2 border-pink-500 rounded-3xl"
            >
              <span class="flex-1 ml-3 whitespace-nowrap text-pink-500">
                Users
              </span>
            </a>
          </li>
        </ul>
      </div>

      <ul class="space-y-2 pb-5">
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-base font-bold text-gray-900 rounded-lg  "
          >
            <span class="flex-1 ml-3 whitespace-nowrap ">Settings</span>
            <span>
              <IoMdArrowDropleft />
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-base font-bold text-gray-900 rounded-lg  "
          >
            <span class="flex-1 ml-3 whitespace-nowrap ">
              Notification & Updates
            </span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
