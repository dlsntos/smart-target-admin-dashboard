import { NavLink } from "react-router-dom";
import logo from "../../assets/images/indu-logo-transparent.png";

function SideBar() {
  return (
    <div className="fixed h-full top-0 left-0 w-64 bg-gray-700 overflow-hidden shadow-outline">
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
              to="#"
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
              to="/dashboard/ad-performance"
              className={({ isActive }) =>
                `block p-3 pl-6 mb-2 rounded-lg text-gray-300 hover:bg-gray-800 transition-all duration-300 ease-in-out${
                  isActive ? " bg-gray-800 font-bold" : ""
                }`
              }
            >
              Ad Performance
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
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
              to="#"
              className={({ isActive }) =>
                `block p-3 pl-6 mb-2 rounded-lg text-gray-300 hover:bg-gray-800 transition-all duration-300 ease-in-out${
                  isActive ? " bg-gray-800 font-bold" : ""
                }`
              }
            >
              Feedback
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className={({ isActive }) =>
                `block p-3 pl-6 mb-2 rounded-lg text-gray-300 hover:bg-gray-800 transition-all duration-300 ease-in-out${
                  isActive ? " bg-gray-800 font-bold" : ""
                }`
              }
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
