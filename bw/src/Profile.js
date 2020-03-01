import React from 'react';
import axios from 'axios';


class Profile extends React.Component {

    state = {
        info : {
            name: '',
            phone: '',
            email: '',
            password: '',
            location: ''
        }
    }

    componentDidMount = () => {
        axios.get('https://african-marketplace-bw-1.herokuapp.com/api/users/:id')
        .then(res => {
            console.log(res)
            // setUpdate({
            //     update: res.data
            // })
        })
    }

    onHandle = () => {


    
    }

    onSubmit = () => {



    }



    render() {
        return (
            <div>
                <form>
                    <label>Full Name </label>
                    <input
                    name='name'
                    type='text'
                    
                    />
                    <label>Phone </label>
                    <input 
                    name='phone'
                    type='number'
    
                    />
                    <label>Email </label>
                    <input 
                    name='email'
                    type='text'
    
                    />
                    <label>Password </label>
                    <input 
                    name='password'
                    type='password'
                    
                    />
                    <label>Location </label>
                    <input 
                    name='location'
                    type='location'
    
                    />
                    
                    <button>Update</button>
                </form>
            </div>
        )
    }
}

export default Profile