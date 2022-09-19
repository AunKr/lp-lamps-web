import { Formik } from "formik";
import React from "react";
import './contactUs.css'
import { useNavigate } from "react-router-dom";
import { sendMail } from "../Login/login.service";
import { toast } from "react-toastify";

const ContactUs = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", message: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.firstName) {
          errors.firstName = "Please enter name";
        }
        if (!values.email) {
          errors.email = "Please enter email";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.message) {
          errors.message = "Please enter message";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log("values", values);
        sendMail(values)
        .then(res => {
          if(res.success){
            toast.success(res?.data?.message,{
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
          <div className="row">
            <div className="col-lg-6">
              <input
                id="firstName"
                type="text"
                name="firstName"
                placeholder="Enter First Name*"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
              {errors.firstName && touched.firstName ? (
                <div className="formError">{errors.firstName}</div>
              ) : null}
            </div>
            <div className="col-lg-6">
              <input
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
              {errors.lastName && touched.lastName ? (
                <div className="formError">{errors.lastName}</div>
              ) : null}
            </div>
            <div className="col-lg-12">
              <input
                type="email"
                name="email"
                placeholder="Enter Email*"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <div className="formError">{errors.email}</div>
              ) : null}
            </div>
            <div className="col-lg-12">
              <textarea
                type="text"
                name="message"
                autoComplete="on"
                placeholder="Enter Message*"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              {errors.message && touched.message ? (
                <div className="formError">{errors.message}</div>
              ) : null}
            </div>
            <button type="submit">Send Message</button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default ContactUs;
