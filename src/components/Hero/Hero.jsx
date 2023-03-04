import React from 'react'
import './Hero.css'
import { Parallax } from 'react-parallax';
import { slide1, slide2, slide3, slide4 } from '../../assets'

const Hero = () => {
  return (
    <div className='hero-container'>
      <Parallax strength={600} bgImage={slide1} >
        <div className="content">
          <div className="text-content">
            <h3>GET ELECTION UPDATES</h3>
            <p>Follow Election updates, predictions, real-time <br /> results and get more information <br /> from INEC’s press release</p>
            <button>get started</button>
          </div>
        </div>
      </Parallax>
      <Parallax strength={300} blur={{ min: -5, max: 15 }} bgImage={slide2} >
        <div className="content">
          <div className="text-content">
            <h3>LIVE STREAM ELECTIONS</h3>
            <p> Get the latest coverage, Live stream videos and <br /> photos for the 2023 Governorship election.</p>
            <button>get started</button>
          </div>
        </div>
      </Parallax>
      <Parallax strength={-600} bgImage={slide3} >
        <div className="content">
          <div className="text-content">
            <h3>REPORT IRREGULARITIES</h3>
            <p>Get access to eye Witness reports at polling units <br /> and report vote disruption and thuggery at your <br /> polling centre.</p>
            <button>get started</button>
          </div>
        </div>
      </Parallax>
      <Parallax strength={-600} bgImage={slide4} >
        <div className="content">
          <div className="text-content">
            <h3>EXPLORE RECORDS</h3>
            <p>Share political thoughts and ideas about your desired <br /> candidates and engage with individuals about ongoing <br /> elections, interests and voting experiences.</p>
            <button>get started</button>
          </div>
        </div>
      </Parallax>
    </div>
  )
}

export default Hero