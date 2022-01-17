import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom'
import Login from '../src/Login'
import Register from '../src/Register'
import Products from '../src/Product'
import ProductsDetail from '../src/ProductsDetails'


function AllFiles() {
  return (
    <div className="App">
    < BrowserRouter >
      <div>
         <Routes>
         <Route path="/" element = {<Login />} />
         <Route path="/register" element = {<Register />} />
         <Route path="/products" element = {<Products />} />
         <Route path='/productsDetails/:id' element ={<ProductsDetail />} />
         </Routes>
      </div>
   </ BrowserRouter >     
    </div>
  );
}

export default AllFiles;
