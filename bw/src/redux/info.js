import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './loginPage';
import SignUpPage from './SignUpPage';
import AddProduct from './AddProductFunction';
import PrivateRoute from './privateRoute';
import DashBoard from './Bub'
import Form from './Form';





const Info = () => {

    return(
        <Router>
            <Link to='/home'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/signup'> Sign Up</Link>
            <Link to='/list'> Listing </Link>
            <Link to='/add'> Add Product </Link>
        
            
            
            <Switch>
                <PrivateRoute path='/home' component={DashBoard} />
                <Route exact path='/login' component={LoginPage} />
                <Route path='/signup' component={SignUpPage} />
                <Route path='/list' component={AddProduct} />    
                <Route path='/add' component={Form} />
            </Switch>
        </Router>
    )
}



export default Info


