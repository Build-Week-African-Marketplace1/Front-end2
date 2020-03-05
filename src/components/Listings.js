import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Listings.css';

export default function Listings() {

  const [product, setProduct] = useState([]);

  useEffect(() => {
  
    axios
      .get("https://african-marketplace-bw-1.herokuapp.com/api/inputs")
      .then(response => {
        setProduct(response.data);
        console.log(response);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });

  }, []);

  return (
    <section className="product-list">
      {console.log(product)}
      {product.map(product => 
        <ul>
          <li>{product.item}</li>
          <li>{product.price}</li>
          <li>{product.description}</li>
        </ul>
      )}
    </section>
  );
}
