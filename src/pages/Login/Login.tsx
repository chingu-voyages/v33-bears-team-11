import React from "react";
import "./Login.css";
import UseForm from "../UseForm/UseForm";

function Login() {
	const { values, handleChange, handleSubmit } = UseForm();

	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="login-box">
						<form onSubmit={handleSubmit}>
							<div className="mb-3">
								<label htmlFor="userEmail" className="form-label">
									Email address
								</label>
								<input
									className="form-control"
									type="email"
									name="email"
									id="userEmail"
									value={values.email || ""}
									onChange={handleChange}
									required={true}
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="userPassword" className="form-label">
									Password
								</label>
								<input
									className="form-control"
									type="password"
									name="password"
									id="userPassword"
									value={values.password || ""}
									onChange={handleChange}
									required={true}
								/>
							</div>
							<button type="submit" className="btn btn-primary">
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
