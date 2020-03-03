import React, { useContext, useState } from 'react';
import {ProductContext} from '../context/productContext';
import axios from 'axios';


const initialItem = {
    item: '',
    description: ''
}

const Products = ({inputs, setInputs}) => {

    console.log('itemss', inputs)
    const {products} = useContext(ProductContext)

    const [itemToEdit, setItemToEdit] = useState(initialItem)
    
    
    const Edit = e => {
        e.preventDefault()
        axios.put('https://african-marketplace-bw-1.herokuapp.com/api/inputs/:id', itemToEdit)
        .then(() => {
            axios.post('https://african-marketplace-bw-1.herokuapp.com/api/inputs')
            .then(res => {
                console.log(res)
                setInputs(res.data)
            })
            .catch(err => console.log(err))
        })
    }

    const Delete = e => {
        axios.delete('https://african-marketplace-bw-1.herokuapp.com/api/inputs/:id')
        .then(() => {
            axios.post('https://african-marketplace-bw-1.herokuapp.com/api/inputs')
            .then(res => {
                console.log('delete', res)
                setInputs(res.data)
            })
            .catch(err => console.log(err))
        })
    }

    // const [item, setItem] = useState(initialItem)

    return (
        <div>
            <h1>Listings</h1>
            <div>{products.map(items => {
                return (
                    
                    <div>



                        {console.log('inpute', itemToEdit)}
                            <form onSubmit={Edit}>
                                <input 
                                type="text"
                                onChange={e => setItemToEdit({
                                    ...inputs, item:{ [e.target.name]: e.target.value}
                                })}
                                value={itemToEdit.item}
                                
                                />
                                <button>Edit</button>
                            </form>
                        
                    </div>
                )
            })}</div>

        </div>
    )
}

export default Products