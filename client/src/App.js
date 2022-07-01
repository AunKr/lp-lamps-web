import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./components/Home/home";
import Products from "./components/Products/products";
import Blog from "./components/Blog/blog";
import Register from "./components/Login/register";
import AuthContextProvider from "./components/AuthContextProvider/authContextProvider";
import SecuredLayout from "./pages/SecuredLayouts/securedLayouts";

const App = () => {

  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/admin/register" element={<Register />} />
          <Route path="/admin/*" element={<SecuredLayout />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
        />
      </Router>
    </AuthContextProvider>
  );
};

export default App;
