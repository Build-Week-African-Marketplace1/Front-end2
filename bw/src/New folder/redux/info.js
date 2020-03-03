import React, { Fragment, useEffect } from 'react';
import Products from './Products';
import {connect} from 'react-redux';
import {LoginCRUD, SignUpCRUD, ProductCRUD, EditProductCRUD, DeleteProductCRUD, AddProductCRUD} from '../actions/action';
import ProductList from './productsList';
import AddProduct from './AddProductFunction'
import LoginPage from './loginPage'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Info = ({state, LoginCRUD, SignUpCRUD, EditProduct, DeleteCRUD, ProductCRUD, AddProductCRUD}) => {


    // const Fetch  = info => {

    //     FetchCRUD(info)

    // }

const onClick = e => {
    e.preventDefault()
    ProductCRUD()

}

    // const EditProduct = products => {
    //     products.preventDefault()
    //     EditProduct(products)
    

    // }





    return(

        

        
        <div>
            
            <button onClick={onClick}> <AddProduct /></button>



            <Products onClick={onClick} />
        

            

        </div>
    )
}

const map = state => {
    return {
        state: state,
        products : state.products
    };
};

export default connect(
    map, {LoginCRUD, SignUpCRUD, ProductCRUD, EditProductCRUD, DeleteProductCRUD}
)(Info);



