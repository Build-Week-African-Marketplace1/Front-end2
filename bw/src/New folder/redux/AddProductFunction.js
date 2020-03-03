import React from 'react'
import ProductList from './productsList'
import {connect} from 'react-redux'
import {ProductCRUD} from '../actions/action'

class AddProductProduct extends React.Component {

    conponentDidMount = () => {
        this.props.ProductCRUD()
    }


    getData = () => {

    }

    onClick = e => {
        e.preventDefault()
        ProductCRUD()
    }


    render() {
        return(
            <div onClick={this.onClick}>
                <ProductList {...this.props} />
            </div>
        )
    }
}

const map = state => ({
    products : state.products,
    error : state.error
})


export default connect (
    map, {ProductCRUD}
)(AddProductProduct)