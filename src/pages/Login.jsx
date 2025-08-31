import React, { useRef, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/indu-logo-transparent.png";
import AuthContext from "../context/AuthProvider";
import axios from "axios";

const LOGIN_URL = "/auth";

function Login() {
  const { setAuth } = useContext(AuthContext);
  const emailRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login";
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Hardcoded credentials for frontend demonstration
      const correctEmail = "induadvertisementsystem@gmail.com";
      const correctPassword = "induxptssd2025";

      if (email === correctEmail && password === correctPassword) {
        setAuth({ isAdmin: true });
        setEmail("");
        setPassword("");
        navigate("/dashboard");
      } else {
        setErrMsg("Invalid Email or Password");
        errRef.current.focus();
      }
    } catch (err) {
      // This catch block will only run for JavaScript errors, not login failures
      setErrMsg("An unexpected error occurred.");
      errRef.current.focus();
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-800 overflow-hidden">
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <div className="h-full w-full flex flex-col justify-center items-center">
        <img
          src={logo}
          className="h-[100px] w-[150] lg:h-[100px] lg:w-[300px]"
        />
        <form
          className="flex flex-col mt-5 h-[300px] w-[250px] lg:h-[500px] lg:w-[300px] gap-2"
          onSubmit={handleSubmit}
        >
          <label>
            <span className="text-gray-300">Email</span>
          </label>
          <input
            className="p-1"
            ref={emailRef}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            required
          />
          <label>
            <span className="text-gray-300">Password</span>
          </label>
          <input
            className="p-1"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
            required
          />
          <div className="flex justify-center">
            <button
              className="px-16 py-2 mt-8 bg-gray-400 text-lg text-gray-800 border border-gray-400 rounded-md 
                               hover:bg-gray-600 hover:border-gray-200 hover:text-gray-100"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
