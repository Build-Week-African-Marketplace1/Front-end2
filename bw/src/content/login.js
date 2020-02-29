import React from 'react';
import { axiosWithAuth } from './axiosWithAuth';



class Login extends React.Component {


    state = {
        userInfo: {
            name: '',
            password: ''
        }
    }


    onHandle = e => {
        this.setState({
        userInfo: { ...this.state.userInfo,
            [e.target.name]: e.target.value }
        })
    }
    // api.pokemontcg.io/v1/sets

    onSubmit = e => {
        e.preventDefault()
        axiosWithAuth().post('/login', this.state.userInfo)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            this.props.history.push('/')
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <form className='formContainer' onSubmit={this.onSubmit}>
                    <label> Username:  </label>
                    <input 
                    type='text' 
                    name='name' 
                    value={this.state.userInfo.name}
                    onChange={this.onHandle}
                    />

                    <label> Password: </label>
                    <input 
                    type='password'
                    name='password'
                    value={this.state.userInfo.password}
                    onChange={this.onHandle}
                    />

                    <button> Sign In </button>
                </form>
            </div>
        )
    }
}

export default Login