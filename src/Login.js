import React, {useState} from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Login(props) {
let navigate = useNavigate();

const [loginPayload , setLoginPayload] = useState({
 email: "",
 password: ""
})
const [status , setStatus] = useState("")

const onEnterData = (event) => {
    console.log("event" , event.target.name , event.target.value)
    const {name , value} = event.target;
 
    setLoginPayload({
        ...loginPayload,
        [name] : value
    })
}

const onLogin = () => {
   const response = axios.post('http://localhost:9000/cmm/login',
        loginPayload
 
).then((response) => {
    console.log(response)
    navigate('/products')

}).catch((error) => {
    console.log(error)
})
if(response.status == 200){
    console.log("successfull login")
    navigate('/products')
}
else{
    setStatus("Invalid Login Details")
}
}


      return (
         <div>
            Username:  <input type="text" name="email" onChange={onEnterData} size="15"/><br /><br />
            Password:  <input type="text" name="password" onChange={onEnterData} size="15"/><br /><br />
            Submit: <button onClick={onLogin}/>
            <br /><br/>
            {status}
            <br /><br />
            <div onClick={() => navigate('/register')}>Register New User</div>
         </div>
      )
}
export default Login;