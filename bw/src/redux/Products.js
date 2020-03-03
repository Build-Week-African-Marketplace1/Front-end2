import React from 'react';
import axiosWithAuth from './withAuth/axiosWithAuth'


function Products ({id, location, category, item, description, price}) {

    const deleteProduct = () => {
        
        axiosWithAuth().delete(`/inputs/${id}`)
        .then(res => {
            console.log('Delete INFO', res)
        })
        .catch(err => console.log(err))

    }

    const editProduct = e => {
        e.preventDefault()
        axiosWithAuth().put(`/inputs/${id}`)
        .then(res => console.log('Edited Product', res))
        .catch(err => console.log('Error, Product Not Edited', err))
    }




    return(

        <div>
            <h2>{item}</h2>
            <p> {description} </p>
            <p> {location} </p>
            <p> {category} </p>
            <p> {price} </p>
            <span onClick={deleteProduct}>X</span>
            <button onClick={editProduct}>Edit</button>
            
        </div>

    )
}

export default Products