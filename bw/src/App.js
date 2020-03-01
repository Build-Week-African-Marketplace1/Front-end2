import React, {useState} from 'react';
import './App.css';
import Login from './content/login'
import SignUp from './content/signup';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import PrivateRoute from './content/privateRoute';
import Bub from './content/Bub';
import AddProduct from './content/AddProduct';
import Products from './content/products'
import Profile from './Profile';

import data from './data'

import {ProductContext} from './context/productContext'





function App() {

  const [products] = useState(data)

  return (
    <div className="App">
      <header className="App-header">

        <h1> African MarketPlace </h1>

        <ProductContext.Provider value={{products}}>
          <Router>
            <div>
            <Link to='/home'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/signup'> Sign Up</Link>
            <Link to='/add'> Add </Link>
            <Link to='/products'> Products</Link>
            <Link to='/profile'> Profile </Link>

            </div>

              
            <Switch>
              <PrivateRoute path='/home' component={Bub} />
              <Route exact path='/login' component={Login} />
              <Route path='/signup' component={SignUp} />
              <Route path='/add' component={AddProduct} />

              <Route path='/products' component={Products} />
              <Route path='/profile' component={Profile} />
            </Switch>
          </Router>
        </ProductContext.Provider>
          
      </header>
    </div>
  );
}

export default App;