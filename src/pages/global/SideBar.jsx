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
              	className="block p-3 pl-6 mb-2 rounded-lg text-gray-300
													 hover:bg-gray-800
													 transition-all duration-300 ease-in-out"
            >
              Demographic Analytics
            </NavLink>
          </li>
          <li>
            <NavLink
							to="#"
              className="block p-3 pl-6 mb-2 rounded-lg text-gray-300
																hover:bg-gray-800
															  transition-all duration-300 ease-in-out"
            >
              Consent Analytics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/ad-performance"
              className="block p-3 pl-6 mb-2 rounded-lg text-gray-300
												 hover:bg-gray-800
												 transition-all duration-300 ease-in-out"
            >
              Ad Performance
            </NavLink>
          </li>
          <li>
            <NavLink
							to="#"
              className="block p-3 pl-6 mb-2 rounded-lg text-gray-300 
																hover:bg-gray-800
															  transition-all duration-300 ease-in-out"
            >
              Sales
            </NavLink>
          </li>
          <li>
            <NavLink
							to="#"
              className="block p-3 pl-6 mb-2 rounded-lg text-gray-300
																hover:bg-gray-800
															  transition-all duration-300 ease-in-out"
            >
              Feedback
            </NavLink>
          </li>
          <li>
            <NavLink
							to="#"
              className="block p-3 pl-6 mb-2 rounded-lg text-gray-300 
																hover:bg-gray-800
															  transition-all duration-300 ease-in-out"
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
