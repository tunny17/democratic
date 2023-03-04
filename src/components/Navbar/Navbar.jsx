import React from 'react'
import './Navbar.css'

import { globe, logo } from '../../assets'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img src={logo} alt="a logo" />
        <h2>kwara decides</h2>
      </div>
      <div className="nav-container">
        <nav>
          <ul>
            <li>faq</li>
            <li>support</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div className="globe-container">
        <img src={globe} alt="a globe" />
        <p>eng us</p>
      </div>
    </div>
  )
}

export default Navbar