import { Formik } from "formik";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import {addProduct} from '../Products/product.service'
import './productModal.css'

const ProductModal = (props) => {
    const [imageSrc, setImageSrc] = useState(null);

  return (
    <Modal show={props.open} onHide={props.handleClose} className='products-page'>
      <Modal.Header closeButton>
        <Modal.Title>{props?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Formik
      initialValues={{ file: null }}
      validate={(values) => {
        const errors = {};
        if (!values.file) {
          errors.email = "Choose an image";
        }
        return errors;
      }}
      onSubmit={(values) => {
        console.log("values", values);
        const data = {
            name:  values.name,
            category: values.category,
            subcategory: values.subcategory,
            description:  values.description,
            path: values.file?.path
        }
        addProduct(data)
        .then((res)=>{
            console.log("res",res);
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
        setFieldValue,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <label>Name</label>
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
            <label>
                Category
            </label>
            <select
              name="category"
              value={values.category}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">
                Please select Category{" "}
              </option>
              <option value="bike">
                {" "}
                E-bike
              </option>
              <option value="scooty">
                E-Scooty
              </option>
              <option value="rickshaw">
                E-Rickshaw
              </option>
            </select>
            {errors.category && touched.category ? (
              <div className="error">{errors.category}</div>
            ) : null}
          </div>
          <div>
            <label>
                Subcategory
            </label>
            <select
              name="subcategory"
              value={values.subcategory}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">
                Please select subcategory{" "}
              </option>
              <option value="head">
                {" "}
                Head
              </option>
              <option value="indicator">
                Indicator
              </option>
              <option value="tail">
                Tail
              </option>
            </select>
            {errors.subcategory && touched.subcategory ? (
              <div className="error">{errors.subcategory}</div>
            ) : null}
          </div>
          <div className="form-input">
            <label>Description-</label>
            <input
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
          <div>
            <label>File upload</label>
            <input
              id="file"
              name="file"
              type="file"
              onClick={() => console.log("clicked")}
              onChange={(event) => {
                setImageSrc(URL.createObjectURL(event.currentTarget.files[0]));
                setFieldValue("file", event.currentTarget.files[0]);
              }}
              onBlur={handleBlur}
              className="form-control"
            />
            <span>hhhh</span>
            {errors.file && touched.file ? (
              <div className="error">{errors.file}</div>
            ) : null}
            <img src={imageSrc}></img>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={props.handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
