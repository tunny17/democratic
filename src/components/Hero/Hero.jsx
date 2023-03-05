import React from 'react'
import './Hero.css'
import Carousel from '../Carousel/Carousel'
import { slide1, slide2, slide3, slide4 } from '../../assets'

const Hero = () => {
  return (
    <Carousel>
      <div>
        <img
        src={slide1}
        alt="img1"
        className='carousel-image'
        />
        {/* <h1 className='figure'>01</h1> */}
      </div>
      <div>
        <img
        src={slide2}
        alt="img3"
        className='carousel-image'
        />
        {/* <h1 className='figure'>02</h1> */}
      </div>
      <div>
        <img
        src={slide3}
        alt="img2"
        className='carousel-image'
        />
        {/* <h1 className='figure'>03</h1> */}
      </div>
      <div>
        <img
        src={slide4}
        alt="img2"
        className='carousel-image'
        />
        {/* <h1 className='figure'>04</h1> */}
      </div>
    </Carousel>
  )
}

export default Hero