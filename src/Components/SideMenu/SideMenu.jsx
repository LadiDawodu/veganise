import React from "react";
import { GiHamburger } from "react-icons/gi";
import adminImage from "../../Assets/adminImage.jpg";
import { AiFillHome } from "react-icons/ai";
import { BiRestaurant } from "react-icons/bi";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import mapImage from "../../Assets/mapImage.jpeg";

const SideMenu = () => {
  return (
    <div className=" bg-bodyBg relative flex flex-col items-center  basis-30 p-5 w-full">
      {/* LOGO */}
      <div className="logo mt-4 gap-2 text-white flex justify-center items-center ">
      </div>
      <div className="flex  mt-[3rem]">
        {/* User Div & Menu */}
        <div className=" flex flex-col text-[white] items-center admin">
          <img
            src={adminImage}
            alt="Admin Image"
            className="h-[80px] w-[80px] border-grey-400 border-[4px] object-cover rounded-full hover:-translate-y-1 hover:transition duration-500 ease-in"
          />
          <span className="opacity-90 mt-2 text-neutral-200 items-center pl-3">
            {" "}
            Welcome,{" "}
          </span>
          <h3 className="font-bold text-textColor items-center pl-3"> User</h3>

          {/* Single Menu*/}

          <div className=" grid  mt-10 mb-7">
            <li
              className="flex pt-3 pb-3 pl-3 gap-2 transition-opacity
            duration-500 hover:opacity-100 items-center"
            >
              <AiFillHome className="text-white" />
              <span className="text-textColor">Home</span>
            </li>

            <li
              className="flex pt-3 pb-3 pl-3 gap-2 transition-opacity
            duration-500  hover:opacity-100 items-center"
            >
              <BiRestaurant className="text-white" />
              <span className="text-textColor">Catergory</span>
            </li>

            <li
              className="flex pt-3 pb-3 pl-3 gap-2
            duration-500  transition-opacity hover:opacity-100 items-center"
            >
              <BsFillBookmarkStarFill className="text-white" />
              <span className="text-textColor">Reservations</span>
            </li>

            <li
              className="flex pt-3 pb-3 pl-3 gap-2
            duration-500      transition-opacity hover:opacity-100 items-center"
            >
              <AiFillHeart className="text-white" />
              <span className="text-textColor">Favourites</span>
            </li>
          </div>
        </div>

        {/* Sidemenu Map Div */}
      </div>
    </div>
  );
};

export default SideMenu;
