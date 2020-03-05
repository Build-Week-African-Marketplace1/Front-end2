import React from 'react';
import './App.css';
import AddProduct from "./components/AddProduct";
import Listings from './components/Listings';

function App() {
  return (
    <div className="App">
      <AddProduct />
      <Listings />
    </div>
  );
}

export default App;
