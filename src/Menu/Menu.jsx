// import React from 'react'

import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <nav className="menu" role="navigation" aria-label="Main menu"> 
        <ul>
            
            <li><Link to="/" title="Homepage-Personal Budget">Homepage</Link></li>
            <li><Link to="about" title="Learn more about personal budget">About</Link></li>
            <li><Link to="/login" title="Login to personal budget">Login</Link></li>
            
        </ul>
    </nav>
  )
}

export default Menu