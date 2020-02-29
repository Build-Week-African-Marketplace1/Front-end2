import React from 'react';
import axios from 'axios'

class SignUp extends React.Component {

    state = {
        info : {
            name: '',
            password: '',
            phone: '',
            email: '',
            location: ''
        }
    }


    onHandle = e => {
        this.setState({
            info : {
                ...this.state.info, [e.target.name]: e.target.value
            }
        })
    }

    onSubmit = e => {
        e.preventDefault()
        
        axios.post('https://african-marketplace-bw-1.herokuapp.com/api/auth/register', this.state.info)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        this.props.history.push('/login')
    }


    render(){
        return(
            <div>
                <form className='formContainer' onSubmit={this.onSubmit}>
                    <label>Full Name</label>
                    <input 
                    type='text'
                    name='name'
                    value={this.state.info.name}
                    onChange={this.onHandle}
                    maxLength={8}
                    />

                    <label>Password</label>
                    <input 
                    type='password'
                    name='password'
                    value={this.state.info.password}
                    onChange={this.onHandle}
                    />

                    <label>Phone</label>
                    <input 
                    type='number'
                    name='phone'
                    value={this.state.info.phone}
                    onChange={this.onHandle}
                    />

                    <label>Email</label>
                    <input 
                    type='email'
                    name='email'
                    value={this.state.info.email}
                    onChange={this.onHandle}
                    />

                    <label>Location</label>
                    <input 
                    type='text'
                    name='location'
                    value={this.state.info.location}
                    onChange={this.onHandle}
                    />

                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignUp