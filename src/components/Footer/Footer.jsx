import React from 'react'
import { globe, logo, social } from '../../assets'
import './Footer.css'

const Footer = () => {
  return (
    <div  className='footer-container'>
      <div className="logo-container">
        <img src={logo} alt="a logo" />
        <h2>Democratic</h2>
      </div>
      <div>
        <p>Ilorin Innovation Hub</p>
        <p>Kwara State Government</p>
        <p>Move Co.</p>
      </div>
      <div>
        <img src={social} alt="" />
      </div>
      <div>
        <p>Democratic is a web-based app designed to monitor elections in real time and display automatically compiled results at all levels. It also provides up-to-date data such as registered voter counts for each LGA/Wards/PU, expected voter turnout, winning criteria, and distribution of political strongholds. </p>
      </div>
    </div>
  )
}

export default Footer