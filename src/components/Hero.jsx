import React from 'react'
import { Parallax } from 'react-parallax';
import first from '../assets/slide1.png'
import second from '../assets/slide2.png'
import third from '../assets/slide3.png'

const Hero = () => {
  return (
    <div>
      <Parallax strength={600} bgImage={first}>
        <div className="content">
          <div className="text-content">Normal Parallax</div>
        </div>
      </Parallax>
      <Parallax strength={300} blur={{ min: -5, max: 15 }} bgImage={second}>
        <div className="content">
          <div className="text-content">Blur Parallax</div>
        </div>
      </Parallax>
      <Parallax strength={-600} bgImage={third}>
        <div className="content">
          <div className="text-content">Reverse Parallax</div>
        </div>
      </Parallax>
    </div>
  )
}

export default Hero