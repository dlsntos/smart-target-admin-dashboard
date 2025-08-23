import React, {useState} from 'react';
function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
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
