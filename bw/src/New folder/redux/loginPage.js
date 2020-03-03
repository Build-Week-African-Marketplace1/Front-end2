import React from 'react';
import {connect} from 'react-redux';
import {LoginCRUD} from '../actions/action'

class Login extends React.Component {

    state = {
        login : {
            name : '',
            password: ''
        }
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.LoginCRUD(this.state.login)
        // this.props.history.push('/')
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