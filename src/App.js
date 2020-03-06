import React from 'react';
import './App.css';
import AddProduct from './components/AddProduct';
import Listings from './components/Listings';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
       <nav>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/addproduct">Add Product</Link>
          <Link to="/listings">Listings</Link>
        </div>
      </nav>
      <Route path="/" exact component={Home} />
      <Route
        path="/addproduct"
        exact
        render={routeProps => {
          return <AddProduct {...routeProps} />;
        }}
      />
      <Route
        path="/listings"
        render={routeProps => {
          console.log("routeProps", routeProps);
          return (
            <Listings
              // {...routeProps}
              // item={routeProps.item}
              // price={routeProps.price}
              // description={routeProps.description}
            />
          );
        }}
      />
      </Router>
    </div>
  );
};

export default App;
