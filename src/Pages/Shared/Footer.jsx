import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdAccessTime, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row ">
        {/* left div  */}
        <div className="bg-gray-800 text-gray-300 p-6 flex flex-col items-center flex-1">
          <h2 className="text-xl font-semibold mb-4">CONTACT US</h2>
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-2">
              <MdLocationOn size={20} />
              <p>123 ABS Street, Uni 21, Bangladesh</p>
            </div>
            <div className="flex items-center space-x-2">
              <MdPhone size={20} />
              <p>+88 123456789</p>
            </div>
            <div className="flex items-center space-x-2">
              <MdAccessTime size={20} />
              <p>Mon - Fri: 08:00 - 22:00</p>
            </div>
            <div className="flex items-center space-x-2">
              <MdAccessTime size={20} />
              <p>Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
        </div>
        {/* Right div */}
        <div className="bg-[#111827] text-gray-300 p-6 flex flex-col items-center flex-1">
          <h2 className="text-xl font-semibold mb-2">Follow US</h2>
          <p className="mb-4">Join us on social media</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-sky-500">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
      <footer className="footer footer-center bg-black text-white p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Bistro Boss
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
