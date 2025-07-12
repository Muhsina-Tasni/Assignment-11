
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";


const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-300 fixed w-full top-0 left-0 shadow-lg px-4 py-2 md:py-4 z-10">
        <div className="nav-container mx-auto flex items-center justify-between">
          {/* Brand Logo and Name */}
          <div className="flex items-center space-x-2 text-xl sm:text-2xl md:text-3xl font-extrabold text-white-800 tracking-wide whitespace-nowrap">
            
            <span className="sm:inline text-black">Genius</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 text-black font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition duration-300 ${
                  isActive ? "text-blue-700 font-bold" : "hover:text-blue-600"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition duration-300 ${
                  isActive ? "text-blue-700 font-bold" : "hover:text-blue-600"
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/user"
              className={({ isActive }) =>
                `transition duration-300 ${
                  isActive ? "text-blue-700 font-bold" : "hover:text-blue-600"
                }`
              }
            >
              User
            </NavLink>
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden flex items-center justify-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none transition-all"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden flex flex-col gap-3 text-gray-800 font-semibold px-6 transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 overflow-hidden opacity-0"
          }`}
        >
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `transition duration-300 ${
                isActive ? "text-blue-700 font-bold" : "hover:text-blue-600"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `transition duration-300 ${
                isActive ? "text-blue-700 font-bold" : "hover:text-blue-600"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/user"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `transition duration-300 ${
                isActive ? "text-blue-700 font-bold" : "hover:text-blue-600"
              }`
            }
          >
            User
          </NavLink>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
