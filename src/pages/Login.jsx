import React, { useRef, useState , useEffect ,useContext} from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/images/indu-logo-transparent.png';
import AuthContext from "../context/AuthProvider";
import axios from "axios";

const LOGIN_URL = "/auth";

function Login() {
  const {setAuth} = useContext(AuthContext);
  //useRef for email and error
  const emailRef = useRef();
  const errRef = useRef();
  //useState for login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [email ,password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //const response = await axios.post(
      //  LOGIN_URL, 
      //  {email, password},
      //    {
      //      headers: { 'Content-type': 'application/json' },
      //      withCredentials: true
      //    }
      //)
      //console.log(JSON.stringify(response?.data));
      
      setAuth({ isAdmin: true });

      setEmail('');
      setPassword('');
      navigate("/dashboard");
    } 
    catch (err) {
      if (!err?.response){
        setErrMsg("No service response");

      } else if(err.response?.status === 400){
        setErrMsg("Missing Email or Password");
      } else if(err.response?.status === 401){
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }

  };
  return (
		//Login wrapper
    <div className="h-screen w-screen bg-gray-800">
      {/* Error message */}
      <p ref={errRef} className={errMsg ? "errmsg" : 
        "offscreen"} aria-live="assertive">{errMsg}
      </p>

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
							type="submit">
								Login
						</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
