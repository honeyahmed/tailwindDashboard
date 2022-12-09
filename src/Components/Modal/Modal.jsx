import React from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { Divider } from "antd";
import { AiOutlineDelete } from "react-icons/ai";
import { HiKey } from "react-icons/hi";
import { MdEmail, MdPermContactCalendar } from "react-icons/md";
import { SiAuth0 } from "react-icons/si";
import { TbArrowsDownUp } from "react-icons/tb";
const Modal = ({ isOpenModal, handleCloseModal }) => {
  var list = [];
  for (var i = 0; i < 6; i++) {
    list.push(
      <div className="flex w-full">
        <div className="flex justify-center items-center w-10 flex-col ">
          <div className="border-2 relative border-pink-500 flex items-center justify-center w-8 h-8 bg-pink-100 rounded text-pink-500 font-semibold ">
            {i + 1}
          </div>
          <div className=" w-0.5 h-4  rounded bg-pink-500 font-bold "></div>
        </div>

        <div className=" w-full flex justify-between gap-4 pl-1">
          <div className="flex-1 flex h-9">
            <span class="flex justify-center items-center w-10 text-sm text-gray-600 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md ">
              <MdEmail />
            </span>
            <input
              type="text"
              class="rounded-none rounded-r-lg bg-gray-50 border w-full p-2"
              placeholder="Example@example.com"
            />
          </div>
          <div className="w-48 flex h-9">
            <span class="flex justify-center items-center w-10 text-sm text-gray-500 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md ">
              <MdPermContactCalendar />
            </span>
            <input
              type="text"
              class="rounded-none rounded-r-lg bg-gray-50 border w-full p-1 "
              placeholder="CFO,Acoountant,etc"
            />
          </div>
          <div className="w-48		 flex h-9">
            <span class="flex justify-center items-center w-10 text-sm text-gray-600 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md ">
              <HiKey />
            </span>
            <input
              type="text"
              class="rounded-none rounded-r-lg bg-gray-50 border w-full p-1"
              placeholder="#00000000"
            />
          </div>
          <div className="flex-1  flex h-9 relative ">
            <span class="flex justify-center items-center w-10 text-sm text-gray-600 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md ">
              <SiAuth0 />
            </span>
            <input
              type="text"
              class="rounded-none rounded-r-lg bg-gray-50 border w-full text-end "
              placeholder=""
            />
            <span className="absolute right-4 top-1/4 text-gray-500">
              <TbArrowsDownUp />
            </span>
          </div>
          <div className="border-2 border-red-500 rounded h-7 w-9 flex justify-center items-center mr-2  ">
            <AiOutlineDelete className="text-red-500 text-xl" />
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div
      className={`z-50  justify-center items-center  bg-gray-800/50 absolute top-0 right-0 left-0 bottom-0 flex-col ${
        isOpenModal === true ? "flex" : "hidden"
      }`}
      ref={(node) => {
        node = node;
      }}
    >
      <div className="bg-white w-4/5 h-auto p-5 rounded-t-lg">
        <div className="flex justify-between w-full">
          <div className="flex items-center">
            <div className="border-2 border-pink-500 rounded h-5 w-5 flex justify-center items-center mr-2 ">
              <AiOutlinePlus className="text-pink-500 text-sm" />
            </div>
            <span className="font-bold"> Add new user</span>
          </div>
          <div
            className="text-gray-600 text-xl cursor-pointer"
            onClick={handleCloseModal}
          >
            <AiOutlineClose />
          </div>
        </div>
        <Divider />
        <div className="bg-slate-50 w-full flex pr-11 pl-11 pt-5 pb-5 rounded justify-between mb-5">
          <div>
            <h6 className="font-semibold mb-1">Email</h6>
            <p className="text-sm">
              Type this user's email to add and contact later.
            </p>
          </div>
          <div>
            <h6 className="font-semibold mb-1">Jobtitle</h6>
            <p className="text-sm">What's this new user's jobtitle?</p>
          </div>
          <div>
            <h6 className="font-semibold mb-1">Code</h6>
            <p className="text-sm">Enter this user's code.</p>
          </div>
          <div>
            <h6 className="font-semibold mb-1">Authorized Module</h6>
            <p className="text-sm">
              Which Inframodern module this user's authorized to use?
            </p>
          </div>
        </div>
        {list}
      </div>
      <div className=" bg-white w-4/5 shadow pr-5 pl-5 pt-7 pb-7 rounded-b-lg -mt-4 flex border-t-gray-300 border-2 justify-between">
        <button className="p-2 w-40  bg-pink-100  rounded-lg text-sm text-pink-500">
          Add new user input
        </button>
        <div>
          <button className="p-2 w-40 mr-4 bg-white border-pink-500 border-2 rounded-lg text-sm text-pink-500">
            Cancel
          </button>
          <button className="p-2 w-40 mr-4 border-2 border-gray-700  bg-gray-700 rounded-lg text-sm text-white">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
