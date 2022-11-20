import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function SignUp() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [message,setMessage]=useState("");
    let navigate = useNavigate();

    let handleSubmit = async ()=>{
       
        let res = await axios.post(`https://food-app-b.herokuapp.com/users/signup`,{
          email,
          password
        })
        if(res.data.statusCode===200)
        {
           if(res.data.role==="admin")
              navigate('/food-management')
           else
              navigate('/menu')   
        }
        else
        {
          setMessage(res.data.message)
          setTimeout(()=>{
            setMessage("")
            setEmail("")
            setPassword("")
          },5000)
    
        }
      }

  return (
    <div>
      <div className="signup-wrapper">
        <h1>Welcome to Food Token Genetor App</h1>
        <p>Sign Up to Continue</p>
      </div>
      <div className="signup-main-wrapper">
        <Form>
            <Form.Group className='mb-3'>
                <Form.Label>Email:</Form.Label>
                <Form.Control type='email' value={email} placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Password:</Form.Label>
                <Form.Control type='Password' value={password} placeholder='Enter Your Email' onChange={(e)=>setPassword(e.target.value)}/>
            </Form.Group>
            <Button variant='primary' onClick={()=>handleSubmit()}>Submit</Button>
        </Form>
        {message?<div style={{"color":"red","textAlign":"center"}}>{message}</div>:<></>}
      </div>
    </div>
  )
}

export default SignUp
