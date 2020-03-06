import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LoginPage from './loginPage';
import SignUpPage from './SignUpPage';
import AddProduct from './AddProductFunction';
import PrivateRoute from './privateRoute';
import Form from './Form';
import EditProduct from './EditProduct';
import ProfilePage from './Profile'
import '../fonts/Poppins-Regular.otf';
import data from '../data'
import { ProfileContext } from './profileContext';
import '../petros/AddProduct.css';


// import Module from  '../module'





const Info = () => {

    const [profile] = useState(data)

    return(
        <ProfileContext.Provider  value={{profile}}>
        <Router>
<nav>
            <Link to='/list'>List</Link>
            <Link to='/add'>Add Product</Link>
            <Link to='/edit'>Edit Product</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
</nav>
            <Switch>
                <PrivateRoute path='/list' component={AddProduct} />    
                <PrivateRoute path='/add' component={Form} />
                <PrivateRoute path='/edit' component={EditProduct} />
                {/* <PrivateRoute path='/home' component={DashBoard} /> */}
                <PrivateRoute path='/profile' component={ProfilePage} />
                <Route exact path='/login' component={LoginPage} />
                <Route path='/register' component={SignUpPage} /> 
                
            </Switch>
        </Router>
        </ProfileContext.Provider>
    )
}



export default Info


