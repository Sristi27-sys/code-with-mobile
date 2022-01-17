import React, {useState , useEffect} from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Products(props){
let navigate = useNavigate();

const [products , setProducts] = useState([])

useEffect(() => {
  const response = axios.get('http://localhost:9000/cmm/products').then((response) => {
   setProducts(response.data)


  }).catch((err) => {
     console.log(err)
  })
},[])

const onProductDetails = (v) => {
   navigate('/productsDetails/'+v)
}

      return (
         <div>
            Products:
            <br /><br />
            {products && products.map((value) => {
               return(
               <>
               <div onClick={() => onProductDetails(value._id)}>{value.name}</div>
               <br /><br />
               </>
            )})}
         </div>
      )
}
export default Products;