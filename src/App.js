import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter } from 'react-router-dom'
import Login from '../src/Login'
import Register from '../src/Register'
import Products from '../src/Product'
import ProductsDetail from '../src/ProductsDetails'
import AllFiles from '../src/AllFiles'


function App() {
  return (
    <div className="App">
    <AllFiles />
    </div>
  );
}

export default App;
