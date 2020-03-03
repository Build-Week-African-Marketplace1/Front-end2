import React from 'react';
import {connect} from 'react-redux';
import {LoginCRUD} from '../actions/action';
import axiosWithAuth from './withAuth/axiosWithAuth';

class Login extends React.Component {

    state = {
        login : {
            name : '',
            password: ''
        }
    }

    onSubmit = e => {
        e.preventDefault()
        axiosWithAuth().post(`/auth/login`, this.state.login)
        .then(res => {
            console.log('Fetch_Post_Data' , res)
            localStorage.setItem('token', res.data.token)}) 
        
        .catch(err => console.log(err))
        this.props.history.push('/')
    }

    onChange = e => {
        this.setState({
            login: {...this.state.login, 
                [e.target.name]: e.target.value}
        })
    }


    render() {

        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>Username: </label>
                    <input 
                    type='text'
                    name='name'
                    value={this.state.login.name}
                    onChange={this.onChange}

                    />


                    <label> Password: </label>
                    <input 
                    type="password"
                    name='password'
                    value={this.state.login.password}
                    onChange={this.onChange}
                    />

                    <button> Login </button>
                </form>


            </div>
        )
    }
}


const map = state => ({
    login : state.login,
    error : state.error
})

export default connect ( 
    map, {LoginCRUD}
)(Login)

