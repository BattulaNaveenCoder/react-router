import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

function RequiredAuth({children}) {
    const auth= useAuth()
    const location =useLocation()

  
    
    if(!auth.user)
    {
        return <Navigate to='/login' state={{path:location.pathname}}></Navigate>
    }
  return children
}

export default RequiredAuth