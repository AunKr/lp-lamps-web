// Layout that will be used after login.

import React, { useContext, useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/AuthContextProvider/authContextProvider";
import Dashboard from "../../components/Dashboard/dashboard";
import Login from "../../components/Login/login";
import EditProducts from "../../components/Products/editProducts";

const SecuredLayout = (props) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  const session =  JSON.parse(localStorage.getItem('userData'))

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/admin/login");
    }else {
      navigate("/admin/dashboard");
    }
  }, []);

  return (
    <Routes>
      <>
          <Route
            path="dashboard"
            element={
              isLoggedIn ? <Dashboard /> : <Navigate to={"admin/login"} />
            }
          />
          <Route
            path="edit/product"
            element={
              isLoggedIn ? <EditProducts /> : <Navigate to={"admin/login"} />
            }
          />
          <Route
            path="edit/blog"
            element={
              isLoggedIn ? <EditProducts /> : <Navigate to={"admin/login"} />
            }
          />
           <Route path="login" element={<Login />} />
        </>
    </Routes>
  );
};

export default SecuredLayout;
