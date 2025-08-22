import { NavLink } from "react-router-dom";
import logo from '../../assets/images/indu-logo-transparent.png';

function SideBar() {
  return (
    <div className="fixed h-full w-64 bg-gray-700 overflow-hidden shadow-outline">
			<img src={logo} />
			{/* Brand logo */}
      <nav>
        <ul className="flex-1 p-3">
          <li>
            <NavLink className="block p-3 pl-6 mb-2 rounded-lg text-gray-300
																hover:bg-gray-800
															  transition-all duration-300 ease-in-out">
							Demographic Analytics
						</NavLink>
          </li>
          <li>
            <NavLink className="block p-3 pl-6 mb-2 rounded-lg text-gray-300
																hover:bg-gray-800
															  transition-all duration-300 ease-in-out">
							Consent Analytics
						</NavLink>
          </li>
          <li>
            <NavLink className="block p-3 pl-6 mb-2 rounded-lg text-gray-300
																hover:bg-gray-800
															  transition-all duration-300 ease-in-out">
							Performance
						</NavLink>
          </li>
          <li>
            <NavLink className="block p-3 pl-6 mb-2 rounded-lg text-gray-300 
																hover:bg-gray-800
															  transition-all duration-300 ease-in-out">
							Sales
						</NavLink>
          </li>
          <li>
            <NavLink className="block p-3 pl-6 mb-2 rounded-lg text-gray-300
																hover:bg-gray-800
															  transition-all duration-300 ease-in-out">
							Feedback
						</NavLink>
          </li>
          <li>
            <NavLink className="block p-3 pl-6 mb-2 rounded-lg text-gray-300 
																hover:bg-gray-800
															  transition-all duration-300 ease-in-out">
							Settings
						</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
