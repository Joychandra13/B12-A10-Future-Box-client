import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-common text-white py-10">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">

          {/* Logo & Description */}
          <div className="flex flex-col space-y-2">
            <Link to="/" className="text-2xl font-bold text-white">
              Habit Tracker
            </Link>
            <p className="text-white/80">
              Providing reliable tracking tools since 2023
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col space-y-1">
            <h6 className="font-semibold">Contact</h6>
            <p className="text-white/80">Email: support@habittracker.com</p>
            <p className="text-white/80">Phone: +880 1700 000 000</p>
            <p className="text-white/80">Address: Tangail, Dhaka</p>
          </div>

          {/* Legal */}
          <div className="flex flex-col space-y-1">
            <h6 className="font-semibold">Legal</h6>
            <a href="#" className="hover:underline text-white/80">
              Terms of Use
            </a>
            <a href="#" className="hover:underline text-white/80">
              Privacy Policy
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-col space-y-2">
            <h6 className="font-semibold">Follow Us</h6>
            <div className="flex gap-4 text-white">
              <a href="#" className="hover:opacity-80 transition">
                <FaFacebookF size={22} />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <FaXTwitter size={22} />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <FaInstagram size={22} />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <FaLinkedinIn size={22} />
              </a>
            </div>
          </div>

        </div>

        <hr className="border-white/20 my-6" />

        <div className="text-center text-white/70 text-sm">
          &copy; {new Date().getFullYear()} Habit Tracker. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
