import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginLogo from '../assets/images/indu-logo-transparent.png';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <div className="h-screen w-screen bg-gray-700">
      <div className="h-full w-full flex flex-col justify-center items-center">
				<img src={loginLogo} className="h-[100px] w-[300px]"/>
        <form  className="flex flex-col mt-5 h-[500px] w-[300px] gap-2" 
							 onSubmit={handleSubmit}
				>
          <label>
            <span>Email</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>
            <span>Password</span>
          </label>
          <input
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
