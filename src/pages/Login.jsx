import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <div className="h-screen w-screen bg-blue-300">
      <div className="h-full w-full flex justify-center">
        <form  className="flex flex-col mt-20 h-[500px] w-[300px] bg-red-400" 
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
