//@ts-nocheck

import React, { useState, useEffect } from "react";
import UseForm from "../UseForm/UseForm";
import "./Register.css";

const RegisterPage = () => {
    const {errors, values, handleChange, handleSubmit, setValues } = UseForm();

    return (
        <div>
            <div className="center" id="register-container">
				<div className="center full-box">
					<h1 className="text-center">User Registration</h1>
					<form onSubmit={handleSubmit}>
						<div className="input-group mb-3">
							<span className="input-group-text">Username</span>
							<input
								className="form-control"
								type="text"
								name="userName"
								id="userName"
								aria-describedby="userNameHelp"
								value={values.userName || ""}
								onChange={handleChange}
								required={true}
							/>
						</div>
						<div className="input-group mb-3">
							<span className="input-group-text">Email address</span>
							<input
								className="form-control"
								type="email"
								name="email"
								id="userEmail"
								aria-describedby="emailHelp"
								value={values.email || ""}
								onChange={handleChange}
								required={true}
							/>
						</div>
						<div className="input-group mb-3">
							<span className="input-group-text">Password</span>
							<input
								className="form-control"
								type="password"
								name="password"
								id="password"
								value={values.password || ""}
								onChange={handleChange}
								required={true}
							/>
							<p className="errors">
								{errors.password ? `${errors.password}` : null}
							</p>
						</div>
						<div className="input-group mb-3">
							<span className="input-group-text">Confirm Password</span>
							<input
								className="form-control"
								type="password"
								name="confirmPassword"
								id="confirmPassword"
								value={values.confirmPassword || ""}
								onChange={handleChange}
								required={true}
							/>
							<p className="errors">
								{errors.confirmPassword ? `${errors.confirmPassword}` : null}
							</p>
						</div>
						<div className="row">
							<div className="col-sm-5"></div>
							<div className="col-sm-4">
								<button
									type="submit"
									className="btn btn-outline-primary btn-center">
									Submit
								</button>
							</div>
							<div className="col-sm-3"></div>
						</div>
					</form>
				</div>
			</div>
        </div>
    )
}

export default RegisterPage;