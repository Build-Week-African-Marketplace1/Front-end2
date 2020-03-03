import React from 'react';
import BFutton from './editButton';
import {connect} from 'react-redux'
import {DeleteProductCRUD} from '../actions/action'


function Products ({id, location, category, item, description, price, DeleteProductCRUD}) {


    return(

        <div>
            <h2>{item}</h2>
            <p> {description} </p>
            <p> {location} </p>
            <p> {category} </p>
            <p> {price} </p>
        </div>

    )
}

export default Products