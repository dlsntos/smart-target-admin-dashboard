import React, {useState} from 'react';
function Login() {
  return (
		<div>
			<form>
				<label>
					<span>Email</span>
				</label>
				<input type="email"/>
				<label>
					<span>Password</span>
				</label>
				<input type="password"/>
				<div>
					<button type="submit">Login</button>
				</div>
			</form>
		</div>
	);
}
export default Login;
