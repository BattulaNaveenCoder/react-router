import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

function Profile() {
    const auth =useAuth()
const navigate =useNavigate()
    const logoutClicked=()=>{
auth.logout()
navigate('/')
    }
  return (
    <div>wel Come {auth.user}
    <button onClick={logoutClicked}>Logout</button>
    </div>
  )
}

export default Profile