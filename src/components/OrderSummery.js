import React from 'react'
import { useNavigate } from 'react-router-dom'

function OrderSummery() {
     const navigate=useNavigate()
  return (
    <div>
        Order Confirmed!
        <button onClick={()=>navigate(-1)}>back</button>
    </div>
  )
}

export default OrderSummery