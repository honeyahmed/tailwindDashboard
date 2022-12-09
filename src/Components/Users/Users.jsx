import React from "react";
import { FaUsers } from "react-icons/fa";
import { VscSearch } from "react-icons/vsc";
import { RiArrowDownSLine } from "react-icons/ri";
const Users = ({handleModal}) => {

  return (
    <div className="p-5">
      <div className="flex">
        <span className="text-4xl text-pink-500 mr-2">
          <FaUsers />
        </span>
        <h2 className="text-2xl font-semibold">Users</h2>
      </div>
      <div className="flex mt-10 justify-between">
        <div className="relative w-1/3">
          <div className="text-gray-500 absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
            <VscSearch />
          </div>
          <input
            type="text"
            id="input-group-1"
            className="bg-white border-2 border-gray-300 rounded-lg block w-full pl-10 p-1.5   "
            placeholder="Can I help you?"
          />
          <div className="w-20 text-pink-500 font-semibold border-gray-300 border-2 rounded-lg p-1.5  absolute right-0 top-0 bottom-0 flex justify-center items-center align-middle">
            <span> Code</span>
            <span className="ml-1">
              <RiArrowDownSLine />
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex justify-center items-center border-2 text-pink-500 border-pink-500 rounded-3xl w-20 mr-2 p-1.5 ">
            Fliters
          </div>
          <div className="flex font-bold justify-center border-2 text-pink-500 border-pink-500 w-10 h-10 rounded-full mr-3">...
          </div>
          <div className="w-0.5 h-5 bg-gray-300 flex mr-3 ">
          </div>
          <button className="p-1.5 pl-3 pr-3  text-white bg-pink-600 rounded-3xl " onClick={handleModal}>Add a new brand</button>
        </div>
      </div>
    </div>
  );
};

export default Users;
