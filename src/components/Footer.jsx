import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import FooterPixalive from "./FooterPixalive";

const Footer = () => {
  return (
    <div className="bg-black mt-5 pt-10 pb-10">
      <div className="w-full max-w-7xl mx-auto text-white px-6">
        <div className="flex flex-col md:flex-row justify-between gap-10 text-sm">
          {/* Left Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-normal mb-4">Let's work Together</h2>

            {/* Clickable Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=pixalivetech@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 text-base sm:text-lg cursor-pointer hover:underline block"
            >
              pixalivetech@gmail.com
            </a>


            {/* Clickable WhatsApp */}
            <a
              href="https://wa.me/918778584566"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 text-base sm:text-lg cursor-pointer hover:underline block"
            >
              +91 87785 84566
            </a>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex flex-col items-start md:items-end">
            <div className="w-full max-w-md text-base sm:text-lg flex flex-col sm:flex-row justify-between gap-6">

              {/* Navigation */}
              <div className="space-y-4 sm:space-y-0 sm:flex sm:flex-col sm:items-center leading-10">
                <p className="hover:underline cursor-pointer">Home</p>
                <p className="hover:underline cursor-pointer">Services</p>
                <p className="hover:underline cursor-pointer">Hire Us</p>
                <p className="hover:underline cursor-pointer">Contact</p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-6 mt-4 sm:mt-0">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="text-white hover:text-gray-300 text-2xl cursor-pointer transition" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-white hover:text-gray-300 text-2xl cursor-pointer transition" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn className="text-white hover:text-gray-300 text-2xl cursor-pointer transition" />
                </a>
              </div>
            </div>

            {/* Address */}
            <p className="mt-6 text-base sm:text-lg leading-relaxed font-normal max-w-md text-left md:text-start">
              3rd Floor, Reliance Smart Bazaar Building, Bus Stop, Hosur Rd, opp. E City, Phase II, Bengaluru, Karnataka 560100
            </p>
          </div>
        </div>

        {/* Branding */}
        <div className="mt-10 flex items-center justify-center">
          <div className="font-medium text-5xl sm:text-6xl md:text-[100px] bg-gradient-to-b from-white to-black bg-clip-text text-transparent text-center">
            Pixalive
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
