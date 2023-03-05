import React from 'react'
import './Hero.css'
import Carousel from '../Carousel/Carousel'
import { slide1, slide2, slide3, slide4 } from '../../assets'

const Hero = () => {
  return (
    <Carousel data-scroll-section>
      <div>
        <img
        src={slide1}
        alt="img1"
        className='carousel-image'
        />
        <div  className='text-content'>
          <h3>GET ELECTION UPDATES</h3>
          <p>Follow Election updates, predictions, real-time <br /> results and get more information <br />from INEC’s press release</p>
          <button>LIVE ELECTIONS</button>
        </div>
      </div>
      <div>
        <img
        src={slide2}
        alt="img3"
        className='carousel-image'
        />
        <div  className='text-content'>
          <h3>LIVE STREAM ELECTIONS</h3>
          <p> Get the latest coverage, Live stream videos and <br /> photos for the 2023 Governorship election.</p>
          <button>LIVE ELECTIONS</button>
        </div>
      </div>
      <div>
        <img
        src={slide3}
        alt="img2"
        className='carousel-image'
        />
        <div  className='text-content'>
          <h3>REPORT IRREGULARITIES</h3>
          <p>Get access to eye Witness reports at polling units <br /> and report vote disruption and thuggery at your <br /> polling centre. </p>
          <button>LIVE ELECTIONS</button>
        </div>
      </div>
      <div>
        <img
        src={slide4}
        alt="img2"
        className='carousel-image'
        />
        <div  className='text-content'>
          <h3>EXPLORE RECORDS</h3>
          <p>Share political thoughts and ideas about your desired <br /> candidates and engage with individuals about ongoing <br /> elections, interests and voting experiences.</p>
          <button>LIVE ELECTIONS</button>
        </div>
      </div>
    </Carousel>
  )
}

export default Hero