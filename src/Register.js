import React, {useState} from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Register(props) {
   let navigate = useNavigate();

const[registerData , setRegisterData] = useState({
   firstname: "",
   lastname: "",
   email: "",
   gender: "",
   phone: "",
   age: "",
   password: "",
   confirm: ""
})
const[status , setStatus] = useState("")

const onEnterData = (event) => {
   console.log(event)
   const { name , value} = event.target
   setRegisterData({
       ...registerData,
       [name] : value
   })
}

const onRegister = () => {
   console.log("registerData",registerData)
  const response = axios.post('http://localhost:9000/cmm/register',registerData).then((response) => {
   if(response.status == 200){
      console.log("successfull Register")
      navigate('/')
   }
  }).catch((error) => {
     console.log(error)
  })


}

      return (
         <div>
            firstname:  <input type="text" name="firstname" onChange={onEnterData} size="15"/><br /><br />
            lastname:  <input type="text" name="lastname" onChange={onEnterData} size="15"/><br /><br />
            email: <input type="text" name="email" onChange={onEnterData} size="15"/><br /><br />
            gender: <br /><br />
            <input type="radio" name="gender" value="male"  onChange={onEnterData} /> Male <br />
            <input type="radio" name="gender" value="female"  onChange={onEnterData} /> Female <br /><br />
            phone: <input type="text" name="phone" onChange={onEnterData} size="15"/><br /><br />
            age: <input type="text" name="age" onChange={onEnterData} size="15"/><br /><br />
            password: <input type="text" name="password" onChange={onEnterData} size="15"/><br /><br />
           Confirm password: <input type="text" name="confirm" onChange={onEnterData} size="15"/><br /><br />
            Submit: <button onClick={onRegister}/>
         </div>
      )
}
export default Register;