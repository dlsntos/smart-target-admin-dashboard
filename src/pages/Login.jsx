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
    <div className="h-screen w-screen flex justify-center items-start bg-red-300">
      <form onSubmit={handleSubmit} className="flex flex-col w-1/4 mt-40 p-3">
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
  );
}
export default Login;
