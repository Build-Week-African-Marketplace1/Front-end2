import React, { useContext } from 'react';
import {ProductContext} from '../context/productContext'

const Products = () => {
    const {products} = useContext(ProductContext)

    return (
        <div>
            <h1>Listings</h1>
            <div>{products.map(items => {
                return (
                    <div>
                        {console.log(products)}
                        <h6> {items.item} </h6>
                        <p> {items.description} </p>
                        <button> Edit </button>
                    </div>
                )
            })}</div>

        </div>
    )
}

export default Products