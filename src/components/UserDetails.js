import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
const params=useParams()
const userId =params.userId

  return (
    <Fragment>
    <div>
        Details About User {userId}
    </div>

    </Fragment>
    
  )
}

export default UserDetails