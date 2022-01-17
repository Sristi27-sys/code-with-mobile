import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";


function ProductsDetails(props) {
   let navigate = useNavigate();
   let quantity = 0;

let id = window.location.pathname.split('/')[2]
const [productsDetails , setProductsDetails] = useState({})
const [orderDetails , setOrderDetails] = useState({
   noOfQuantities: 0,
   address: "",
})
const[qua , setQuantity] = useState(0)
const [status , setStatus] = useState("")



useEffect(() => {
   console.log('http://localhost:9000/cmm/products/'+id)
   const response = axios.get('http://localhost:9000/cmm/products/'+id,{ params : { id : id}}).then((response) => {
      setProductsDetails(response.data)
      

   }).catch((error) => {
      console.log(error)
   })
},[])
console.log("=========productDetails=========",productsDetails)

const onAdd = (e) => {
   const { name , value } = e.target;
   console.log(name , value)
   setOrderDetails({...orderDetails , [name]: value})
}

const onAddQuantity = () => {
   let a = qua + 1
   console.log(a)
   setQuantity(a)
   setOrderDetails({...orderDetails , "noOfQuantities": qua})
}

const onOrder = () => {
   console.log("orderDetails===================",orderDetails)
  
   const response = axios.post('http://localhost:9000/cmm/ordered', {...productsDetails , ...orderDetails}).then((response) => {
      console.log(response)
      if(response.data == "success"){
         setStatus("successfully ordered")
      }
   }).catch((error) => {
      console.log(error)
   })
}

      return (
         <div>
            <h1>{productsDetails.name}</h1><br /><br />
            <h1>{productsDetails.size}</h1><br /><br />
            <h1>{productsDetails.price}</h1><br /><br />

            ADD: <button onClick={onAddQuantity}/> <br /><br />
            QUANTITY: {qua}<br /><br />

            ADDRESS: <input type="text" name="address" onChange={onAdd} size="15"/><br /><br />

            ORDER: <button onClick={onOrder} /><br /><br />

            <div style={{color: "Green" , fontSize: "30px"}}>{status}</div>

         </div>
      )
}
export default ProductsDetails;