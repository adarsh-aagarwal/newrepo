

import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import "../App.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-black shadow-md py-4 w-full relative">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6">
        {/* Left - Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          Blosys
        </Link>

        {/* Center - Search bar */}
        <div className="flex-1 hidden md:flex justify-center items-center">
          <div className="flex w-full max-w-md items-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-l-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition">
              Search
            </button>
          </div>
        </div>

        {/* Right - Nav Links */}
        <div className="flex items-center gap-4">
          {/* Search Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 bg-blue-600 rounded hover:bg-blue-700"
            >
              <MagnifyingGlassIcon className="h-5 w-5 text-white" />
            </button>
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center space-x-6 text-gray-300 font-medium">
            <li>
              <Link to="/" className="text-blue-200 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/AddPostPage" className="text-blue-200 hover:text-white">
                Post
              </Link>
            </li>

            {isLoggedIn ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="text-blue-200 hover:text-white"
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/signin" className="text-blue-200 hover:text-white">
                    Signin
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="text-blue-200 hover:text-white">
                    Signup
                  </Link>
                </li>
              </>
            )}

          {isLoggedIn ? (
            <li>
              <Link to="/profile">
                <div className="p-1 rounded-full bg-gray-100 flex items-center justify-center">
                  <UserCircleIcon className="h-8 w-8 text-blue-500" />
                </div>
              </Link>
            </li>
          
          ):(<>
          </>)}
          </ul>
          {/* Mobile Hamburger */}
          <div className="md:hidden relative">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
            {menuOpen && (
              <ul className="absolute right-0 mt-2 bg-white text-black rounded shadow-md w-40 z-50">
                <li>
                  <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/AddPostPage" className="block px-4 py-2 hover:bg-gray-100">
                    Post
                  </Link>
                </li>
                {isLoggedIn ? (
                  <li
                    onClick={handleLogout}
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Logout
                  </li>
                ) : (
                  <>
                    <li>
                      <Link to="/signin" className="block px-4 py-2 hover:bg-gray-100">
                        Signin
                      </Link>
                    </li>
                    <li>
                      <Link to="/signup" className="block px-4 py-2 hover:bg-gray-100">
                        Signup
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {searchOpen && (
        <div className="md:hidden px-6 mt-3">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-l-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition">
              Search
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
