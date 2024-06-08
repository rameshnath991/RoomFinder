'use client'

import React from "react";
import { HiHome } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { GrNotification } from "react-icons/gr";
import { FaRegMessage } from "react-icons/fa6";
import { BiMessageSquareMinus } from "react-icons/bi";
import { LiaListSolid } from "react-icons/lia";
import { MdOutlineGroups2, MdOutlineWorkspacePremium } from "react-icons/md";
// import {  } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="w-[20%] border border-red-300">
      <div>
        <div>
          <img
            className="w-10 h-10 ml-3"
            src="https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?w=1380&t=st=1715445186~exp=1715445786~hmac=b6a95d69e7e633b247bd19de76fe080503b174035e6229c007e9ae4b58788813"
          />
        </div>
        <div className="my-4 ">
          <div className="flex place-items-center my-4 px-4 hover:bg-gray-400 rounded-lg ">
            <div>
              <HiHome size={25} />
            </div>
            <h1 className="font-bold ml-2 text-lg text-black"> Home </h1>
          </div>
          <div className="flex place-items-center my-4 px-4 hover:bg-gray-400 rounded-lg ">
            <div>
              <FaSearch size={25} />
            </div>
            <h1 className="font-bold ml-2 text-lg text-gray-600"> Explore </h1>
          </div>
          <div className="flex place-items-center my-4 px-4 hover:bg-gray-400 rounded-lg ">
            <div>
              <GrNotification size={25} />
            </div>
            <h1 className="font-bold ml-2 text-lg  text-gray-600">
              {" "}
              Notifications{" "}
            </h1>
          </div>
          <div className="flex place-items-center my-4 px-4 hover:bg-gray-400 rounded-lg ">
            <div>
              <FaRegMessage size={25} />
            </div>
            <h1 className="font-bold ml-2 text-lg  text-gray-600">
              {" "}
              Messages{" "}
            </h1>
          </div>
          <div className="flex place-items-center my-4 px-4 hover:bg-gray-400 rounded-lg ">
            <div>
              <BiMessageSquareMinus size={25} />
            </div>
            <h1 className="font-bold ml-2 text-lg  text-gray-600"> Grok </h1>
          </div>
          <div className="flex place-items-center my-4 px-4 hover:bg-gray-400 rounded-lg ">
            <div>
              <LiaListSolid size={25} />
            </div>
            <h1 className="font-bold ml-2 text-lg  text-gray-600"> Lists </h1>
          </div>
          <div className="flex place-items-center my-4 px-4 hover:bg-gray-400 rounded-lg ">
            <div>
              <MdOutlineGroups2 size={25} />
            </div>
            <h1 className="font-bold ml-2 text-lg  text-gray-600">
              {" "}
              Communities{" "}
            </h1>
          </div>
          <div className="flex place-items-center my-4 px-4 hover:bg-gray-400 rounded-lg ">
            <div>
              <MdOutlineWorkspacePremium size={25} />
            </div>
            <h1 className="font-bold ml-2 text-lg  text-gray-600"> Premium </h1>
          </div>
          <div className="flex place-items-center my-4 px-4 hover:bg-gray-400 rounded-lg ">
            <div>
              <IoPersonOutline size={25} />
            </div>
            <h1 className="font-bold ml-2 text-lg text-gray-600"> Profile </h1>
          </div>
          <div className="flex place-items-center my-4 px-4 hover:bg-gray-400 rounded-lg ">
            <div>
              <CiCircleMore size={25} />
            </div>
            <h1 className="font-bold ml-2 text-lg text-gray-600"> more </h1>
          </div>

          <button className="bg-blue-500 text-white text-center  w-60 rounded-lg ">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
