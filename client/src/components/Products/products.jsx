import React, { useEffect, useState } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import "./products.css";
import ConfirmationModal from "../Modal/modal";
import { getProducts } from "./product.service";
import motorIcon from "../../assets/images/electric-motor.png";
import { Button } from 'react-bootstrap'

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const [productData, setProductData] = useState({});
  const [allProductData, setAllProductData] = useState([]);
  const [headLightData, setHeadLightData] = useState([]);
  const [indicatorLightData, setIndicatorLightData] = useState([]);
  const [tailLightData, setTailLightData] = useState([]);
  const driveUrl = 'https://drive.google.com/uc?id=';

  useEffect(() => {
    getProducts()
      .then((res) => {
        setAllProductData(res?.rows)
        setHeadLightData(res?.rows?.filter((val) => (val.category === "bike" && val.subcategory === "head")))
        setIndicatorLightData(res?.rows?.filter(val => (val.category === "bike" && val.subcategory === "indicator")));
        setTailLightData(res?.rows?.filter(val => (val.category === "bike" && val.subcategory === "tail")));
      })
      .catch((err) => console.log(err));
  }, []);


  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = (val) => {
    setProductData(val);
    setShowModal(true);
  };

  const handleCategoryChange = (value) => {
    setHeadLightData(allProductData?.filter(val => (val.category === value && val.subcategory === "head")));
    setIndicatorLightData(allProductData?.filter(val => (val.category === value && val.subcategory === "indicator")));
    setTailLightData(allProductData?.filter(val => (val.category === value && val.subcategory === "tail")));
  }
  return (
    <div>
      {showModal && (
        <ConfirmationModal
          open={showModal}
          product={productData}
          handleClose={closeModal}
        />
      )}
      <Header />
      <div className="container-fluid">
        <div className="row marginBottomAdd">
          <h1 className="topTitle">Our Products</h1>
          <div className="col-lg-2 productsCategories">
            <h2>Products Categories</h2>
            <ul>
              <li>
                <a onClick={() => handleCategoryChange("bike")}>
                  {" "}
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M280 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h57.7l16.4 30.3L256 192l-45.3-45.3c-12-12-28.3-18.7-45.3-18.7H64c-17.7 0-32 14.3-32 32v32h96c88.4 0 160 71.6 160 160c0 11-1.1 21.7-3.2 32h70.4c-2.1-10.3-3.2-21-3.2-32c0-52.2 25-98.6 63.7-127.8l15.4 28.6C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6L418.2 128H480c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H459.6c-7.5 0-14.7 2.6-20.5 7.4L391.7 78.9l-14-26c-7-12.9-20.5-21-35.2-21H280zM462.7 311.2l28.2 52.2c6.3 11.7 20.9 16 32.5 9.7s16-20.9 9.7-32.5l-28.2-52.2c2.3-.3 4.7-.4 7.1-.4c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64c0-15.5 5.5-29.7 14.7-40.8zM187.3 376c-9.5 23.5-32.5 40-59.3 40c-35.3 0-64-28.7-64-64s28.7-64 64-64c26.9 0 49.9 16.5 59.3 40h66.4C242.5 268.8 190.5 224 128 224C57.3 224 0 281.3 0 352s57.3 128 128 128c62.5 0 114.5-44.8 125.8-104H187.3zM128 384c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z" /></svg>
                  </span>
                  E-Bike
                </a>
              </li>
              <li>
                <a onClick={() => handleCategoryChange("scooter")}>
                  {" "}
                  <span>
                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MopedOutlinedIcon"><path d="M19 7c0-1.1-.9-2-2-2h-3v2h3v2.65L13.52 14H10V9H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48L19 10.35V7zM4 14v-1c0-1.1.9-2 2-2h2v3H4zm3 3c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1z"></path><path d="M5 6h5v2H5zm14 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></svg>
                  </span>
                  E-Scooter
                </a>
              </li>
              <li>
                <a onClick={() => handleCategoryChange("rickshaw")}>
                  {" "}
                  <span>
                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ElectricRickshawIcon"><path d="M21 11.18V9.72c0-.47-.16-.92-.46-1.28L16.6 3.72c-.38-.46-.94-.72-1.54-.72H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h.18C3.6 16.16 4.7 17 6 17s2.4-.84 2.82-2h8.37c.41 1.16 1.51 2 2.82 2 1.66 0 3-1.34 3-3-.01-1.3-.85-2.4-2.01-2.82zM18.4 9H16V6.12L18.4 9zM3 5h4v4H3V5zm3 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3-2v-2h3V9H9V5h5v8H9zm11 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM7 20h4v-2l6 3h-4v2z"></path></svg>
                  </span>
                  E-Rickshaw
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-10 productsDetails">
            <div className="row">
              <h1 className="productsTitle">Head Light</h1>
              {headLightData && headLightData.length
                ? headLightData.map((val) => {
                  return (
                    <div
                      className="col-lg-3 col-md-6 portfolio-item"
                      key={val?.id}
                    >
                    <div className="portfolio-itemDiv">
                      <p>Loading...</p>
                    <img src={`${driveUrl}${val?.driveId}`} alt="reporting" />
                      <div className="portfolio-info">
                        <h4>{val.name}</h4>
                        <p>{val.description}</p>
                        <div
                          className="add-icon"
                          onClick={() => openModal(val)}
                        >
                          <Button>View</Button>
                        </div>
                      </div>
                    </div>
                    </div>
                  );
                })
                : <p className="comingSoon">Coming Soon...</p>}
            </div>
            <div className="row">
              <h1 className="productsTitle">Indicator Light</h1>
              {indicatorLightData && indicatorLightData.length
                ? indicatorLightData.map((val) => {
                  return (
                    <div
                      className="col-lg-3 col-md-6 portfolio-item"
                      key={val?.id}
                    >
                       <div className="portfolio-itemDiv">
                      <p>Loading...</p>
                      <img src={`${driveUrl}${val?.driveId}`} alt="reporting" />
                      <div className="portfolio-info">
                        <h4>{val.name}</h4>
                        <p>{val.description}</p>
                        <div
                          className="add-icon"
                          onClick={() => openModal(val)}
                        >
                          <Button>View</Button>
                        </div>
                      </div>
                      </div>                      
                    </div>
                  );
                })
                : <p className="comingSoon">Coming Soon...</p>}
            </div>
            <div className="row">
              <h1 className="productsTitle">Tail Light</h1>
              {tailLightData && tailLightData.length
                ? tailLightData.map((val) => {
                  return (
                    <div
                      className="col-lg-3 col-md-6 portfolio-item"
                      key={val?.id}
                    >
                      <img src={`${driveUrl}${val?.driveId}`} alt="reporting" />
                      <div className="portfolio-info">
                        <h4>{val.name}</h4>
                        <p>{val.description}</p>
                        <div
                          className="add-icon"
                          onClick={() => openModal(val)}
                        >
                          <Button>View</Button>
                        </div>
                      </div>
                    </div>
                  );
                })
                :<p className="comingSoon">Coming Soon...</p>}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
