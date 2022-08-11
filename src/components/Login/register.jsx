import React from "react";
import {useNavigate} from 'react-router-dom'
import "./login.css";
import loginBg from "../../assets/images/login-bg.jpg";
import { Formik } from "formik";
import { register } from "./login.service";
import { toast } from "react-toastify";
const Register = () => {
    const navigate = useNavigate()

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
              initialValues={{ name: "",
                              email: "", 
                              password: "",
                              phone: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.name) {
                  errors.name = "Please enter name";
                }
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
                if (!values.phone) {
                  errors.phone = "Please enter phone";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                console.log("values", values);
                register(values)
                .then(res => {
                    if(res.success){
                        localStorage.removeItem("userData");
                        toast.success(res?.data?.message,{
                            theme: 'colored'
                        })
                        navigate('/admin/login')
                    } else {
                        toast.error(res?.error?.message,{
                            theme: 'colored'
                        })
                    }
                })
                .catch(err => console.log(err))
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
                  <h3>Account Register</h3>
                  <label>Name*</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  {errors.name && touched.name ? (
                    <div className="error">{errors.name}</div>
                  ) : null}
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
                  <label>Phone*</label>
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    placeholder="Enter Phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                  {errors.phone && touched.phone ? (
                    <div className="error">{errors.phone}</div>
                  ) : null}
                  <button type="submit">Register</button>
                  <div className="sign-in-account">
                    <span>Already have an account?</span>
                    <a href='/admin/login'>Sign In</a>
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

export default Register;
