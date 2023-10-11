import React from "react";
import "./App.css";
import { useState } from "react";
import { useFormik } from "formik";
// import { Form } from 'formik';
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { API } from "./components/Header/global";

const formValidationSchema = yup.object({
  usesrname: yup.string().required().min(12),
  email: yup.string().email().required().min(12),
  password: yup.string().required().min(8).max(12),
});

function Login() {
  const navigate = useNavigate();
  const [register, Setregister] = useState(false);
  const [formState, SetFormState] = useState("success");
  const { handleSubmit, handleBlur, handleChange, touched, values, errors } =
    useFormik({
      initialValues: {
        username: "syed",
        email: "syed@gmail.com",
        password: "syed123",
      },
      validationSchema: formValidationSchema,
      onSubmit: async (values) => {
        console.log("Form values", values);

        const data = await fetch(
          (`${API}/questions`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              // 'Accept': 'application/json'
            },
            body: JSON.stringify(values),
          })
        );
        if (data.status === 401) {
          console.log("Error");
          SetFormState("error");
        } else {
          SetFormState("success");
          const result = await data.json();
          console.log("success", result);
          localStorage.setItem("token", result.token);
          navigate("/login");
        }
      },
    });
  return (
    <div className="auth">
      <div className="auth-container">
        {/* <p>Add another way to log in using any of the following services </p> */}
        <img
          className="s-logo"
          src="https://www.logo.wine/a/logo/Stack_Overflow/Stack_Overflow-Icon-Logo.wine.svg"
          alt=""
        />
        <div className="sign-options">
          <div className="single-option">
            <img
              src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
              alt="Google"
            />
            <p>Login with Google</p>
          </div>
          <div className="single-option">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
              alt="Google"
            />
            <p>Login with Github</p>
          </div>
          <div className="single-option">
            <img
              src="https://cdn-icons-png.flaticon.com/128/174/174848.png"
              alt="Google"
            />
            <p>Login with Facebook</p>
          </div>
        </div>

        <div className="auth-login">
          <div className="auth-login-container">
            {register ? (
              <>
                <form onSubmit={handleSubmit} className="input-field">
                  <p>UserName</p>
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    name="username"
                    type="text"
                  />
                  {touched.username && errors.username ? errors.username : null}
                </form>
                <div className="input-field">
                  <p>Email</p>
                  <input type="email" />
                </div>
                <div className="input-field">
                  <p>Password</p>
                  <input type="password" />
                </div>
                <button>Register</button>
              </>
            ) : (
              <>
                <form onSubmit={handleSubmit} className="input-field">
                  <p>Email</p>
                  <input
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    type="email"
                  />
                  {touched.email && errors.email ? errors.email : null}
                </form>
                <form onSubmit={handleSubmit} className="input-field">
                  <p>Password</p>
                  <input
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    type="password"
                  />
                  {touched.password && errors.password ? errors.password : null}
                </form>
                <button
                  color={formState}
                  className="login-button"
                  type="submit"
                >
                  {formState === "success" ? "Submit" : "Retry"}
                </button>
              </>
            )}
            <p>{register ? "Login" : "Register"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
