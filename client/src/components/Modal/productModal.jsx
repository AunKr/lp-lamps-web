import { Formik } from "formik";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

const ProductModal = (props) => {
    const [imageSrc, setImageSrc] = useState(null);

  return (
    <Modal show={props.open} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Formik
      initialValues={{ name:'',
      file: null,
      category:'', 
      subcategory:'', 
      description:'' 
    }}
      validate={(values) => {
        const errors = {};
        if (!values.file) {
          errors.email = "Choose an image";
        }
        return errors;
      }}
      onSubmit={async(values) => {
        let formData = new FormData();
        formData.append('name', values.name)
        formData.append('category', values.category)
        formData.append('subcategory', values.subcategory)
        formData.append('description', values.description)
        formData.append('image', values.file)
        const res = await axios.post('http://localhost:4500/product/create',formData)
        console.log("res", res);
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
        <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
          <div>
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
          <div>
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
