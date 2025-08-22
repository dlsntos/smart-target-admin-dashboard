import { NavLink } from "react-router-dom";
function SideBar() {
  return (
    <div className="fixed h-full w-64 bg-blue-400">
      <nav>
        <ul>
          <li>
            <NavLink>Demographic Analytics</NavLink>
          </li>
          <li>
            <NavLink>Consent Analytics</NavLink>
          </li>
          <li>
            <NavLink>Performance</NavLink>
          </li>
          <li>
            <NavLink>Sales</NavLink>
          </li>
          <li>
            <NavLink>Feedback</NavLink>
          </li>
          <li>
            <NavLink>Settings</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
