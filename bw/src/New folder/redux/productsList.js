import React from 'react';
import {connect} from 'react-redux'
import {EditProductCRUD, DeleteProductCRUD, ProductCRUD} from '../actions/action'
import Product from './Products'
import Form from './Form';



class ProductList extends React.Component {


    render(){
        return (
            <div>
                <Form />
                {this.props.products.map(product => (
                    <Product
                    key={product.id}
                    item={product.item}
                    description={product.description}
                    {...this.props}
                    
                    category={product.category}
                    price ={product.price}
                    location ={product.location}

                    />
                    
                ))}
                
                
            </div>
        )
    }
}


const map = state => ({
    products: state.products,
    error: state.error
});

export default connect (
    map, {EditProductCRUD, DeleteProductCRUD, ProductCRUD}
)(ProductList)