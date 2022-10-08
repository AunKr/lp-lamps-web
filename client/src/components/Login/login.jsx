import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Formik } from "formik";

import "./login.css";
import loginBg from "../../assets/images/login-bg.jpg";
import { login } from "./login.service";
import { toast } from "react-toastify";

import { AuthContext } from "../AuthContextProvider/authContextProvider";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setLoggedIn, setSession } = useContext(AuthContext);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="loginBg">
              <img src={loginBg} alt="" />
            </div>
          </div>
          <div className="col-4">
            <Formik
              initialValues={{ email: "", password: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Please enter email";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                if (!values.password) {
                  errors.password = "Please enter password";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                login(values)
                  .then((res) => {
                    if (res.success) {
                      const userData = {
                        ...res?.data.userData,
                        token: res?.data.token,
                      };
                      localStorage.setItem(
                        "userData",
                        JSON.stringify(userData)
                      );
                      setSession(res?.data.token);
                      setLoggedIn(true);
                      toast.success(res?.data?.message, {
                        theme: "colored",
                      });
                      navigate("/admin/dashboard");
                    } else {
                      toast.error(res?.error?.message, {
                        theme: "colored",
                      });
                    }
                  })
                  .catch((err) => console.log(err));
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit} className="loginFrom">
                  <h3>Account Login</h3>
                  <label>Email*</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email ? (
                    <div className="error">{errors.email}</div>
                  ) : null}
                  <label>Password*</label>
                  <input
                    type="password"
                    name="password"
                    autoComplete="on"
                    placeholder="Enter Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password ? (
                    <div className="error">{errors.password}</div>
                  ) : null}
                  <button type="submit">Sign In</button>
                  <div className="sign-in-account">
                    <span>Don't have an account?</span>
                    <a href="/admin/register">Sign Up</a>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
