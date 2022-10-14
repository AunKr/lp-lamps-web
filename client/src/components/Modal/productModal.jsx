import React, { useState } from "react";

import { Formik } from "formik";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

import "./productModal.css";
import { updateProduct } from "../Products/product.service";

const ProductModal = (props) => {
  const [imageSrc, setImageSrc] = useState(
    props.product?.image ? props.product.image : null
  );
  const [productValue, setProductValue] = useState(
    props?.product ? props.product : null
  );
  const session = JSON.parse(localStorage.getItem("userData"));

  return (
    <Modal
      show={props.open}
      onHide={props.handleClose}
      className="products-page"
    >
      <Modal.Header closeButton>
        <Modal.Title>{props?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            name: productValue ? productValue.name : "",
            file: productValue ? productValue.file : null,
            category: productValue ? productValue.category : "",
            subcategory: productValue ? productValue.subcategory : "",
            description: productValue ? productValue.description : "",
            keyfeatures: productValue ? productValue.keyfeatures : "",
            features: productValue ? productValue.features : "",
          }}
          validateOnChange={true}
          validateOnBlur={true}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "Please enter name of product";
            }
            if (!values.category) {
              errors.category = "Please select category";
            }
            if (!values.subcategory) {
              errors.subcategory = "Please select subcategory";
            }
            if (!values.description) {
              errors.description = "Please select description";
            }
            if (!productValue && !values.file) {
              errors.file = "Please select file";
            }
            return errors;
          }}
          onSubmit={async (values) => {
            if (!productValue) {
              let formData = new FormData();
              formData.append("name", values.name);
              formData.append("category", values.category);
              formData.append("subcategory", values.subcategory);
              formData.append("description", values.description);
              formData.append("image", values.file);
              formData.append("keyfeatures", values.keyfeatures);
              formData.append("features", values.features);
              const res = await axios.post(
                // "http://localhost:4700/product/create",
                "https://luxpallamps.org/api/product/create",
                formData,
                { headers: { Authorization: `Bearer ${session?.token}` } }
              );
              if (res) {
                toast.success("Post Added Successfully", {
                  theme: "colored",
                });
                props.handleClose();
                props.onSubmit();
              } else {
                toast.error("Something went wrong", {
                  theme: "colored",
                });
              }
            } else {
              updateProduct(productValue.id, values)
                .then((res) => {
                  if (res) {
                    toast.success("Post Updated Successfully", {
                      theme: "colored",
                    });
                    props.handleClose();
                    props.onSubmit();
                  }
                })
                .catch((err) => console.log(err));
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form
              onSubmit={handleSubmit}
              method="POST"
              encType="multipart/form-data"
            >
              <div className="form-input">
                <label>Name*</label>
                <input
                  type="name"
                  name="name"
                  placeholder="Enter Product Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name ? (
                  <div className="error">{errors.name}</div>
                ) : null}
              </div>
              <div>
                <label>Category*</label>
                <select
                  name="category"
                  value={values.category}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">Please select Category </option>
                  <option value="bike"> E-bike</option>
                  <option value="scooter">E-Scooter</option>
                  <option value="rickshaw">E-Rickshaw</option>
                </select>
                {errors.category && touched.category ? (
                  <div className="error">{errors.category}</div>
                ) : null}
              </div>
              <div>
                <label>Subcategory*</label>
                <select
                  name="subcategory"
                  value={values.subcategory}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">Please select subcategory*</option>
                  <option value="head"> Head</option>
                  <option value="indicator">Indicator</option>
                  <option value="tail">Tail</option>
                </select>
                {errors.subcategory && touched.subcategory ? (
                  <div className="error">{errors.subcategory}</div>
                ) : null}
              </div>
              <div className="form-input">
                <label>Features*</label>
                <textarea
                  type="features"
                  name="features"
                  placeholder="Enter Features"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.features}
                />
              </div>
              <div className="form-input">
                <label>Key Features*</label>
                <textarea
                  type="keyfeatures"
                  name="keyfeatures"
                  placeholder="Enter Key Features"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.keyfeatures}
                />
              </div>
              <div className="form-input">
                <label>Description*</label>
                <textarea
                  type="description"
                  name="description"
                  placeholder="Enter Description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                />
                {errors.description && touched.description ? (
                  <div className="error">{errors.description}</div>
                ) : null}
              </div>
              {!productValue && (
                <div className="file-upload">
                  <label>File upload*</label>
                  <input
                    id="file"
                    name="file"
                    type="file"
                    onClick={() => console.log("clicked")}
                    onChange={(event) => {
                      setImageSrc(
                        URL.createObjectURL(event.currentTarget.files[0])
                      );
                      setFieldValue("file", event.currentTarget.files[0]);
                    }}
                    onBlur={handleBlur}
                    className="form-control"
                  />
                  <div className="custome-file">
                    <span>Choose File</span>
                    <p>
                      {values?.file?.name
                        ? values?.file?.name
                        : "No file Upload"}{" "}
                    </p>
                  </div>
                  {errors.file && touched.file ? (
                    <div className="error">{errors.file}</div>
                  ) : null}
                  <img src={imageSrc}></img>
                </div>
              )}
              <div className="save-button">
                <Button variant="secondary" onClick={props.handleClose}>
                  Close
                </Button>
                <Button type="submit" variant="primary" disabled={isSubmitting}>
                  {productValue ? "Update" : "Add"}
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default ProductModal;
