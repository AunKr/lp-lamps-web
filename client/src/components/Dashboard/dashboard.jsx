import React, { useContext, useEffect, useState } from "react";
import "./dashboard.css";
import Products from "../../assets/images/products.png";
import blogger from "../../assets/images/blogger.png";
import plus from "../../assets/images/plus.png";
import editing from "../../assets/images/editing.png";
import deleteIcon from "../../assets/images/delete.png";
import { AuthContext } from "../AuthContextProvider/authContextProvider";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../Modal/productModal";
import { getProducts, deleteProduct } from "../Products/product.service.js";
import { toast } from 'react-toastify'

const Dashboard = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setLoggedIn } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [productList, setProductList] = useState([]);
  const [editProductValue, setEditProductValue] = useState({});
  const [deleteProductValue, setDeleteProductValue] = useState({});

  useEffect(() => {
    // if (!isLoggedIn) {
    //     navigate('/admin/login')
    // }
  });

  const logout = () => {
    localStorage.removeItem("userData");
    setLoggedIn(false);
    navigate("/admin/login");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProductList(res?.rows);
      })
      .catch((err) => console.log(err));
  }, []);

  const addProduct = () => {
    setEditProductValue({})
    setShowModal(true)
  }

  const editProduct = (index) => {
    const product = productList[index]
    setEditProductValue(product)
    setShowModal(true)
  }

  const deletetProduct = (index) => {
    const product = productList[index]
    deleteProduct(product?.id)
    .then((res) => {
      if(res){
        toast.error("Post Deleted Successfully",{
          theme: 'colored'
      })
        getProducts()
        .then((res) => {
          setProductList(res?.rows);
        })
        .catch((err) => console.log(err));
      }
    })
    .catch(err => console.log(err))
  }

  const updatedPosts = () => {
    getProducts()
    .then((res) => {
      setProductList(res?.rows);
    })
    .catch((err) => console.log(err));
  }

  return (
    <div>
      {showModal && (
        <ConfirmationModal
          open={showModal}
          title={"Add Product"}
          handleClose={closeModal}
          product={editProductValue}
          onSubmit={updatedPosts}
        />
      )}
      <div className="dashboard">
        <div className="sidebar ">
          <h3>
            Bharat Gupta <span>Admin</span>
          </h3>

          <a href="index.html" className=" active">
            Dashboard
          </a>
          <a className="text-right" onClick={logout}>
                Logout
              </a>
        </div>
        <div className="content">
          <div className="container-fluid ">
            <div className="top-bg">
              <h1>Dashboard</h1>
            
            </div>
            <div className="row">
              <div className="col-sm-6 col-xl-6">
                <div className="cardItem">
                  <img src={Products} alt="" />
                  <div className="ms-3">
                    <p className="mb-2">Today Products</p>
                    <h6 className="mb-0">$1234</h6>
                  </div>
                  <div onClick={addProduct}>
                    <img className="addButton" src={plus} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-6">
                <div className="cardItem">
                  <img src={blogger} alt="" />
                  <div className="ms-3">
                    <p className="mb-2">Today Blog</p>
                    <h6 className="mb-0">$1234</h6>
                  </div>
                  <div onClick={addProduct}>
                    <img className="addButton" src={plus} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="productsTable">
              <h6 className="mb-4">Products Table</h6>
              <table className="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Sub Category</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {productList &&
                    productList.map((val,index) => {
                      return (
                        <tr key={index+1}>
                          <th scope="row">{index+1}</th>
                          <td>{val.name}</td>
                          <td>{val.category === 'bike' ? 'E-Bike': val.category === 'scooty'? 'E-Scooty': 'E-Rickshaw'}</td>
                          <td>{val.subcategory === 'head' ? 'Head': val.subcategory === 'tail'? 'Tail': 'Indicator'}</td>
                          <td>
                            {" "}
                            <div onClick={()=> editProduct(index)}>
                                <img src={editing} alt="" />{" "}
                            </div>
                            <div onClick={()=> deletetProduct(index)}>
                                <img src={deleteIcon} alt="" />{" "}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
            <div className="productsTable">
              <h6 className="mb-4">Blog Table</h6>
              <table className="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Products</th>
                    <th scope="col">Products Name</th>
                    <th scope="col">Products ID</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row">1</td>
                    <td>John</td>
                    <td>Doe</td>
                    <td>mark@email.com</td>
                    <td>
                      {" "}
                      <img src={editing} alt="" />{" "}
                      <img src={deleteIcon} alt="" />{" "}
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">2</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>mark@email.com</td>
                    <td>
                      {" "}
                      <img src={editing} alt="" />{" "}
                      <img src={deleteIcon} alt="" />{" "}
                    </td>
                  </tr>
                  <tr>
                  <td scope="row">3</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>jacob@email.com</td>
                    <td>
                      {" "}
                      <img src={editing} alt="" />{" "}
                      <img src={deleteIcon} alt="" />{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
