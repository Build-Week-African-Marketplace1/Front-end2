import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './loginPage';
import SignUpPage from './SignUpPage';
import AddProduct from './AddProductFunction';
import PrivateRoute from './privateRoute';
import DashBoard from './Bub'
import Form from './Form';
import EditProduct from './EditProduct'





const Info = () => {

    return(
        <Router>
            <Link to='/home'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/signup'> Sign Up</Link>
            <Link to='/list'> Listing </Link>
            <Link to='/add'> Add Product </Link>
            <Link to='/edit'>Edit</Link>
        
            
            
            <Switch>
                <PrivateRoute path='/list' component={AddProduct} />    
                <PrivateRoute path='/add' component={Form} />
                <PrivateRoute path='/edit' component={EditProduct} />
                <PrivateRoute path='/home' component={DashBoard} />
                <Route exact path='/login' component={LoginPage} />
                <Route path='/signup' component={SignUpPage} /> 
            </Switch>
        </Router>
    )
}



export default Info


