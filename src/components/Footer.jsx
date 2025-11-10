import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          
          <div className="flex flex-col space-y-2">
            <Link to='/' className="text-2xl activeNav">
              Habit Tracker
            </Link>
            <p className="text-gray-300">Providing reliable tracking tools since 2023</p>
          </div>

          <div className="flex flex-col space-y-1">
            <h6 className="font-semibold">Contact</h6>
            <p className="text-gray-300">Email: support@habittracker.com</p>
            <p className="text-gray-300">Phone: +880 1700 000 000</p>
            <p className="text-gray-300">Address: Tangail, Dhaka</p>
          </div>

          <div className="flex flex-col space-y-1">
            <h6 className="font-semibold">Legal</h6>
            <a href="#" className="hover:underline text-gray-300">Terms of Use</a>
            <a href="#" className="hover:underline text-gray-300">Privacy Policy</a>
          </div>

          <div className="flex flex-col space-y-2">
            <h6 className="font-semibold">Follow Us</h6>
            <div className="flex gap-4 text-gray-300">
              <a href="#">
                <FaFacebookF size={24} />
              </a>
              <a href="#">
                <FaXTwitter size={24}/>

              </a>
              <a href="#">
                <FaInstagram size={24} />
              </a>
              <a href="#">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-t border-white my-6" />

        <div className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Habit Tracker. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
