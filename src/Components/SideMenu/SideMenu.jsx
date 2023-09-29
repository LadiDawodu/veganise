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
    <div className="bg-sideMenuBg relative h-[100%] basis-20 p-4">
      {/* LOGO */}
      <div className="logo mt-4 gap-2 text-white flex items-center justify-center m-auto">
        <GiHamburger className="text-[10px]" />
        <h1 className="text-[20px] align-center justify-center font-black">
          {" "}
          Veganer
        </h1>
      </div>
      {/* User Div */}
      <div className="flex items-center justify-center text-[white] flex-col mt-[3rem] admin">
        <img
          src={adminImage}
          alt="Admin Image"
          className="h-[80px] w-[80px] border-grey-400 border-[4px] object-cover rounded-full hover:-translate-y-1 hover:transition duration-500 ease-in"
        />
        <span className="opacity-90 mt-2 text-neutral-200"> Welcome, </span>
        <h3 className="font-bold text-textColor"> User</h3>

        {/* Single Menu*/}

        <div className="m-auto grid justify-center mt-10 mb-7">
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

        {/* Sidemenu Map Div */}
        <div className="mt-5 h-[22rem] w-full rounded-xl overflow-hidden">
          <img
            src={mapImage}
            alt="map Image"
            className="object-cover h-[100%] hover:-translate-y-1 hover:transition duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
