import React, { useEffect, useState } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import "./products.css";
import ConfirmationModal from "../Modal/modal";
import { getProducts } from "./product.service";

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const [bikeData, setBikeData] = useState([]);
  const [scootyData, setScootyData] = useState([]);
  const [rickshawData, setRickshawData] = useState([]);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    getProducts()
      .then((res) => {
        const bike = res?.rows?.filter((value) => value.category === "bike");
        setBikeData(bike);
        const scooty = res?.rows?.filter(
          (value) => value.category === "scooty"
        );
        setScootyData(scooty);
        const rickshaw = res?.rows?.filter(
          (value) => value.category === "rickshaw"
        );
        setRickshawData(rickshaw);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {showModal && (
        <ConfirmationModal open={showModal} handleClose={closeModal} />
      )}
      <Header />
      <div className="container">
        <div className="row">
          <h1 className="topTitle">Our Products</h1>
          <p className="text-center mb-10">
            Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter
          </p>

          <div className="col-lg-2 productsCategories">
            <h2>Products Categories</h2>
            <ul>
              <li>
                <a href="#">LED Head Light</a>
              </li>
              <li>
                <a href="#">Tail Light</a>
              </li>
              <li>
                <a href="#">Indicator Light</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-10">
            <div className="row">
              {rickshawData && rickshawData.length
                ? rickshawData.map((bike) => {
                    return (
                      <div
                        className="col-lg-4 col-md-6 portfolio-item"
                        key={bike.image.toString()}
                      >
                        <img src={bike.image} alt="reporting" />
                        <div className="portfolio-info">
                          <h4>{bike.name}</h4>
                          <p>{bike.description}</p>
                          <div onClick={openModal}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                            >
                              <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
                            </svg>
                          </div>
                          <a href="" className="details-link">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                            >
                              <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z" />
                              <path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
