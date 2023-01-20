import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

function Login() {
    const[user,setUser]=useState('')
    const navigate =useNavigate()
    const location =useLocation()
    const auth =useAuth()
    const redirecpath=location.state?.path || '/'
   const submitHandler=()=>{
        auth.login(user)
        navigate(redirecpath,{replace:true})
    }
  return (
    <div>
        <label>
            Username :<input type='text' onChange={(e)=>setUser(e.target.value)}></input>
        </label>
        <button onClick={submitHandler}>Login</button>
    </div>
  )
}

export default Login