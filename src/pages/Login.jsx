import React, {useState} from 'react';
import React, { useNavigate } from "react-router-dom";
function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate("/*");
	}
  return (
		<div>
			<form>
				<label>
					<span>Email</span>
				</label>
				<input 
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}/>
				<label>
					<span>Password</span>
				</label>
				<input 
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}/>
				<div>
					<button type="submit">Login</button>
				</div>
			</form>
		</div>
	);
}
export default Login;
