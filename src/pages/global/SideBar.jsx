import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/indu-logo-transparent.png";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false); // sidebar toggle
  return (
    <>
      <button
        className="fixed top-4 left-4 z-20 p-2 bg-gray-700 text-white rounded-md lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    <div className={`fixed h-full top-0 left-0 w-64 bg-gray-700 overflow-hidden shadow-outline z-20
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
      <img src={logo} className="my-5" />
      {/* Brand logo */}
      <nav>
        <ul className="flex-1 p-3">
          <li>
            <NavLink
              to="/dashboard/demographic"
              className={({ isActive }) =>
                `block p-3 pl-6 mb-2 rounded-lg text-gray-300 hover:bg-gray-800 transition-all duration-300 ease-in-out${
                  isActive ? " bg-gray-800 font-bold" : ""
                }`
              }
            >
              Demographic Analytics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/consent-analytics"
              className={({ isActive }) =>
                `block p-3 pl-6 mb-2 rounded-lg text-gray-300 hover:bg-gray-800 transition-all duration-300 ease-in-out${
                  isActive ? " bg-gray-800 font-bold" : ""
                }`
              }
            >
              Consent Analytics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/sales"
              className={({ isActive }) =>
                `block p-3 pl-6 mb-2 rounded-lg text-gray-300 hover:bg-gray-800 transition-all duration-300 ease-in-out${
                  isActive ? " bg-gray-800 font-bold" : ""
                }`
              }
            >
              Sales
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/feedback"
              className={({ isActive }) =>
                `block p-3 pl-6 mb-2 rounded-lg text-gray-300 hover:bg-gray-800 transition-all duration-300 ease-in-out${
                  isActive ? " bg-gray-800 font-bold" : ""
                }`
              }
            >
              Feedback
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    </>
  );
}

export default SideBar;
