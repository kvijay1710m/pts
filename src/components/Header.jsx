import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/imgs/home/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Service', path: '/service' },
       { label: 'Products', path: '/products' },
       { label: 'Features', path: '/features' },
       { label: 'Pricing', path: '/pricing' },
    { label: 'Hire Us', path: '/hireus' },
    
    
    { label: 'About Us', path: '/aboutus' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className="max-w-[1280px] p-2 mx-auto w-full sm:px-6 lg:px-12 py-4 flex justify-between items-center bg-white border-b md:border-b-0">
        {/* Logo */}
        <div className="flex-shrink-0 bg-black p-2 cursor-pointer">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-lufga font-medium text-[18px] leading-[130%] tracking-[0]">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${isActive(item.path) ? 'underline underline-offset-4' : ''
                } hover:opacity-80`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Let's talk button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className={`inline-flex items-center text-[18px] font-semibold  border-black hover:opacity-80 ${isActive('/contact') ? 'underline underline-offset-4' : ''
              }`}
          >
            Lets talk <span className="ml-1">↗</span>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden px-4 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Backdrop when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-22 left-0 h-full w-[80%] max-w-xs   bg-[#fffffff8] text-black z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'
          } md:hidden`}
      >
        {/* Menu Content */}
        <div className="flex flex-col px-6 pt-16 gap-6 text-base font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${isActive(item.path) ? 'underline underline-offset-4' : ''
                } hover:opacity-75`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className={`inline-flex items-center border-white ${isActive('/contact') ? 'underline underline-offset-4' : ''
              }`}
            onClick={() => setMenuOpen(false)}
          >
            Lets talk <span className="ml-1">↗</span>
          </Link>
          <div className="mt-12 flex ">
            <div className="font-medium text-5xl sm:text-6xl md:text-[100px] bg-gradient-to-b from-black to-white bg-clip-text text-transparent text-center">
              Pixalive
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Header;
