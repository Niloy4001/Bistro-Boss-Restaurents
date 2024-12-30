import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full  bg-black fixed top-0 z-30 bg-opacity-10">
      <div className="navbar w-[90%]  mx-auto ">
        <div className="navbar-start text-white">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div>
     <h1 className="text-lg font-bold tracking-wide">BISTRO BOSS</h1>
     <p className="text-sm uppercase tracking-wider">Restaurant</p>
   </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// {/* <nav className="bg-black text-white flex justify-between items-center py-4 px-8">
//   {/* Left Section */}
//   <div>
//     <h1 className="text-lg font-bold tracking-wide">BISTRO BOSS</h1>
//     <p className="text-sm uppercase tracking-wider">Restaurant</p>
//   </div>

//   {/* Middle Section - Links */}
//   <ul className="flex space-x-6 uppercase text-sm font-semibold">
//     <li className="text-yellow-500 cursor-pointer">Home</li>
//     <li className="hover:text-yellow-500 cursor-pointer">Contact Us</li>
//     <li className="hover:text-yellow-500 cursor-pointer">Dashboard</li>
//     <li className="hover:text-yellow-500 cursor-pointer">Our Menu</li>
//     <li className="hover:text-yellow-500 cursor-pointer">Our Shop</li>
//   </ul>

//   {/* Right Section - Icons */}
//   <div className="flex items-center space-x-4">
//     {/* Shopping Cart */}
//     <div className="relative">
//       <FaShoppingCart className="text-white text-xl cursor-pointer" />
//       <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
//         0
//       </span>
//     </div>

//     {/* User Icon */}
//     <FaUser className="text-white text-xl cursor-pointer" />
//     <button className="text-white uppercase text-sm font-semibold hover:text-yellow-500">
//       Sign Out
//     </button>
//   </div>
// </nav> */}
