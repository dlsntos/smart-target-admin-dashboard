import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/images/indu-logo-transparent.png';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
		//Login wrapper
    <div className="h-screen w-screen bg-gray-800">
			{/* Login contents container */}
      <div className="h-full w-full flex flex-col justify-center items-center">
				{/* Brand logo */}
				<img src={logo} className="h-[100px] w-[300px]"/>
				
				{/* Login forms container*/}
        <form  className="flex flex-col mt-5 h-[500px] w-[300px] gap-2" 
							 onSubmit={handleSubmit}
				>
          <label>
            <span className="text-gray-300">Email</span>
          </label>
          <input
						className="p-1"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>
            <span className="text-gray-300">Password</span>
          </label>
          <input
						className="p-1"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-center">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
