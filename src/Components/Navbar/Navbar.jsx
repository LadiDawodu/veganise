import React, { Fragment, useState } from "react";
import { GiHamburger } from "react-icons/gi";
import { AiOutlineSearch, AiOutlineAppstoreAdd } from "react-icons/ai";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import veganiseLogo from "../../Assets/veganiseLogo.jpeg";
import Registration from "../Registration/Registration";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isRegistration, setRegistrationOpen] = useState(false);
  return (
    <Disclosure as="nav" className="bg-bodyBg">
      {({ open }) => (
        <>
          <div className=" mr-10 max-w-full sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 bg-sideMenuBg hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* VEGAN LOGO */}
              <div className=" pl-1 flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-10 w-auto bg-colorTwo"
                    src={veganiseLogo}
                    alt="VEGANISE"
                  />
                  <h1 className="text-[30px] justify-center items-center font-bold text-textColor mr-40">
                    Veganise
                  </h1>
                </div>
                <div className=" hidden ml-20 sm:ml-6 sm:block">
                  <div className=" flex justify-center">
                    {/* NAV ITEMS */}
                    <div className="flex space-x-4 mt-2">
                      <a
                        href="#"
                        className="text-gray-600 transition-colors duration-700 ease-in-out hover:bg-[#808000] hover:text-white rounded-full px-3 py-2 text-sm font-medium border-2 border-colorTwo/75 "
                      >
                        Home
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 transition-colors duration-700 ease-in-out hover:bg-[#808000] hover:text-white rounded-full px-3 py-2 text-sm font-medium border-2 border-colorTwo/75"
                      >
                        About
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 transition-colors duration-700 ease-in-out hover:bg-[#808000] hover:text-white rounded-full px-3 py-2 text-sm font-medium border-2 border-colorTwo/75"
                      >
                        Mission
                      </a>
                    </div>
                  </div>
                </div>
                {/* search bar */}
                <div className="ml-10 mt-2 relative w-96 md:w-auto">
                  <div className="">
                    <input
                      type="text"
                      className="pl-10 pr-4 py-2 rounded-full border-2 border-colorTwo/75 focus:ring-colorTwo focus:border-colorTwo h-10 w-[32rem]"
                      placeholder="What's your craving?"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <AiOutlineSearch className="h-5 w-5 text-colorTwo/80" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 mt-2">

              <div className="flex gap-4 items-center">
                <button className="transition-colors hover:bg-[#808000] duration-700 ease-in-out text-gray-600  hover:text-white rounded-full px-3 py-2 text-sm font-medium border-2 cursor-pointer border-colorTwo/75">
                  Sign Up
                </button>
              </div>

              <div className="flex gap-4 items-center">
                <button className="login transition-colors hover:bg-[#808000] duration-700 ease-in-out cursor-pointer text-gray-600 hover:text-white text-sm font-medium py-2 px-3 rounded-full border-2 border-colorTwo/75  " >
                  Login In
                </button>
              </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 mt-2">
                <button
                  type="button"
                  className="relative rounded-full bg-colorTwo p-1 text-gray-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-3 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      {/* Replace the image source with your profile image */}
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {/* Profile dropdown items go here */}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Mobile navigation items go here */}
              <div className="space-y-1 px-2 pb-3 pt-2">
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  About
                </a>
                {/* Add more mobile navigation links as needed */}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
