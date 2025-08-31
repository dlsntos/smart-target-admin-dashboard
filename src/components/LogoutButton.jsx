import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

function LogoutButton() {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth({}); // Clear auth state
    navigate("/"); // Redirect to login page
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-500"
    >
      Logout
    </button>
  );
}

export default LogoutButton;
