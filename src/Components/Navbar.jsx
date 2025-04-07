import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative top-0 z-50 w-full shadow-md bg-black" style={{boxShadow: 'rgba(102, 116, 204, 0.25) 0px 4px 10px'}}>
      <div className=" mx-auto md:px-30 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-white font-['Space_Grotesk']">
          <img className="w-[220px]" src="../logo.gif" alt="" />
        </div>

        <button
          onClick={toggleMobileMenu}
          className="block md:hidden text-gray-600 hover:text-white focus:outline-none focus:text-white"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.85a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </button>

        {/* Nav Links (Hidden on mobile) */}
        <ul
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex gap-4 sm:gap-6 md:gap-8 lg:gap-15 absolute md:relative top-full left-0 right-0 bg-black z-10 md:z-0 p-4 md:p-0`}
        >
          <li>
            <Link
              to="/"
              className="block md:inline-block text-white font-['Inter'] hover:text-red-500 transition-colors duration-200 py-2 md:py-0"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block md:inline-block text-white font-['Inter'] hover:text-red-500 transition-colors duration-200 py-2 md:py-0"
            >
              About
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <Link
              to="#"
              className="block md:inline-block text-white font-['Inter'] hover:text-red-500 transition-colors duration-200 py-2 md:py-0"
            >
             <div className="flex items-center gap-2 "> Services  <SlArrowRight className="h-[10px] text-bold"/></div>
            </Link>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <ul className="absolute top-6 right-[-100px] p-2 rounded-lg shadow-lg bg-[#202329]  w-77">
                <li>
                  <Link
                    to="#"
                    className="block p-2 text-gray-300 font-['Inter'] hover:text-white  transition-colors duration-200"
                  >
                    <div className="flex gap-7 mb-2">
                      <h2 className="font-bold">AI Web Development</h2>
                      <span className="bg-amber-400 text-white rounded-full  px-2 py-0">Popular</span>
                    </div>
                    <span className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, quod.</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block p-2 text-gray-300 font-['Inter'] hover:text-white  transition-colors duration-200"
                  >
                    <div className="flex gap-7 mb-2">
                      <h2 className="font-bold">AI Web Development</h2>
                      <span className="bg-pink-400 text-white rounded-full  px-2 py-0">Popular</span>
                    </div>
                    <span className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, quod.</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block p-2 text-gray-300 font-['Inter'] hover:text-white  transition-colors duration-200"
                  >
                    <div className="flex gap-7 mb-2">
                      <h2 className="font-bold">AI Web Development</h2>
                      <span className="bg-green-400 text-white rounded-full  px-2 py-0">Popular</span>
                    </div>
                    <span className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, quod.</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block p-2 text-gray-300 font-['Inter'] hover:text-white  transition-colors duration-200"
                  >
                    <div className="flex gap-7 mb-2">
                      <h2 className="font-bold">AI Web Development</h2>
                      <span className="bg-sky-400 text-white rounded-full  px-2 py-0">Popular</span>
                    </div>
                    <span className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, quod.</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              to="/portfolio"
              className="block md:inline-block text-white font-['Inter'] hover:text-red-500 transition-colors duration-200 py-2 md:py-0"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block md:inline-block text-white font-['Inter'] hover:text-red-500 transition-colors duration-200 py-2 md:py-0"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="hidden md:block fiverProf">
          <Link
            to="#"
            className="text-white font-['Inter'] bg-red-500 px-4 py-3 rounded-sm hover:text-red-500 hover:bg-white hover:border-1 transition-all duration-400"
          >
            Fiver Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
