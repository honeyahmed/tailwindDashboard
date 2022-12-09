import React, { useState } from "react";
import Users from "../Users/Users";
import Table from "../Table/Table";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Modal from "../Modal/Modal";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
const Page = () => {
  const [isOpen, setisOpen] = useState(true);
  const [isOpenModal,setOpenModal]=useState(false);
  const handleSideBarToggle = () => {
    setisOpen(!isOpen);
  };
  const handleModal=()=>{
    setOpenModal(!isOpenModal);
  }
  const handleCloseModal=()=>{
    setOpenModal(false);
  }

  return (
    <div className="flex overflow-hidden ">
      <div
        onClick={handleSideBarToggle}
        className={`z-30 absolute h-7 w-7 bg-white shadow-md rounded-full flex justify-center items-center text-pink-500 text-2xl cursor-pointer ${
          isOpen === true ? "left-60 top-24" : "left-0 top-2"
        }`}
      >
        {isOpen ? <RiArrowDropLeftLine /> : <RiArrowDropRightLine />}
      </div>
      <Sidebar isOpen={isOpen} handleSideBarToggle={handleSideBarToggle} />
      <div className="flex-1 min-w-0 overflow-auto ">
        <Header />
        <Users handleModal={handleModal}/>
        <Table />
      </div>
      <Modal isOpenModal={isOpenModal} handleCloseModal={handleCloseModal}/>
    </div>
  );
};

export default Page;
