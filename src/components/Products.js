import React, { Fragment } from 'react'
import { Link,Outlet } from 'react-router-dom'

function Products() {
  return (
    <Fragment>
    <div>
        <input type='search' placeholder='search product'></input>
    </div>
    <nav>
        <Link to='features'>Features</Link>
        <Link to='new'>New</Link>
    </nav>
    <Outlet/> 
    </Fragment>
    
  )
}

export default Products