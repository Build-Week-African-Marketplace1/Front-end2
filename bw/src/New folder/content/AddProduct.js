import React, { useState, useEffect } from "react";
import axios from "axios";
import './AddProduct.css';
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";


const AddProduct = ({ touched, errors, status }) => {
  console.log("This is our status", status);
  const [products, setProducts] = useState({});

  useEffect(() => {
    status && setProducts(status);
  }, [status]);

  return (
    
    <div className="add-product">
      <div className="add-product-left">
        <h1>Sauti</h1>
        <h2>Add a product</h2>
      </div>
      <Form className="add-product-right">
        <label>
          Location
          <Field type="text" name="location" placeholder="Where are you located?" />
          {touched.products && errors.products && (
            <p className="errors">{errors.products}</p>
          )}
        </label>
        <label>
          Category
          <Field type="text" name="category" placeholder="Categorize your item" />
        </label>
        <label>
          Item
          <Field type="text" name="item" placeholder="Name it" />
        </label>
        <label>
          Description
          <Field type="text" name="description" placeholder="Add a description" />
        </label>
        <label>
          Price
          <Field type="number" name="price" placeholder="Put a price tag" />
        </label>
        <button>Add Product</button>
      </Form>
      {products.props && (
        <div>
            <p>Location: {products.location}</p>
            <p>Category: {products.category}</p>
            <p>Item: {products.item}</p>
            <p>Description: {products.description}</p>
            <p>Price: {products.price}</p>
        </div>
      )}
    </div>
  );
};

export default withFormik({
  mapPropsToValues: props => ({
    location: "",
    category: "",
    item: "",
    description: "",
    price: ""
  }),
  validationSchema: yup.object().shape({
    location: yup
      .string()
      .required("Mandatory field")
  }),
  handleSubmit: (values, { resetForm, setStatus }) => {
    // console.log("Submitting!", formikBag)
    // POST body === {}
    axios
      .put("https://african-marketplace-bw-1.herokuapp.com/api/inputs", values)
      .then(response => {
        console.log(response);
        setStatus(response.data);
        resetForm();
      })
      .catch(err => console.log(err.response));
  }
})(AddProduct);
