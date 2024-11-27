import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const NavbarComponents = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
     <nav className="bg-primary text-[#FFFFFF]">
      <div className="container mx-auto px-2 py-2 flex justify-between items-center">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <img
            src="mainlogo.svg"
            alt="Logo"
            className="h-14 w-14"
          />
        </div>

        {/* Middle Section: Navigation Links (Hidden on Mobile) */}
        <div className="hidden lg:flex space-x-8">
          <NavLink to="/" className="hover:text-gray-400">
            About Us
          </NavLink>
          <NavLink to="/pricing" className="hover:text-gray-400">
            Pricing
          </NavLink>
          <NavLink to="/customers" className="hover:text-gray-400">
          Customers
          </NavLink>
          <NavLink to="/solutions" className="hover:text-gray-400">
           solutions
          </NavLink>
        </div>

        {/* Right Section: Buttons (Hidden on Mobile) */}
        <div className="hidden lg:flex space-x-4">
          <button className="bg-btncolor hover:bg-sky-400 text-[#002228] px-4 py-2 rounded-full">
            Contact Us
          </button>
          <button className=" hover:bg-red-700 text-white px-4 py-2 rounded-full  border-1">
            Book a Demo
          </button>
        </div>

        {/* Toggle Button for Mobile */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-800 text-white">
          <div className="flex flex-col space-y-4 p-4">
            <NavLink to="/" className="hover:text-gray-400">
              About Us
            </NavLink>
            <NavLink to="/pricing" className="hover:text-gray-400">
              Pricing
            </NavLink>
            <NavLink to="/customers" className="hover:text-gray-400">
            Customers
            </NavLink>
            <NavLink to="/solutions" className="hover:text-gray-400">
            Solutions
            </NavLink>
        
           
            <div className="space-y-2 mt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 w-full rounded">
                Contact Us
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 w-full rounded">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
    <Outlet/>
    </>
   
  );
};

export default NavbarComponents;
