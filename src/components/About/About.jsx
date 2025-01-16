// import React from 'react'
import './About.css'
import About1 from '../../assets/about-1.jpg'
import About2 from '../../assets/about.jpg'
import CountUp from 'react-countup'
function About() {
  return (
    <div>
      <div className="sec">
       <h3 className='abt'>ABOUT US</h3>
       <img src={About2} alt=""  className='image'/>
      </div>
      <div className="build">
       <h2 className='real'>HomeBuild A Real Estate <br /> Company</h2>
       <p className="far">Far far away, behind the mountains <br /> far from the countries Volkavia <br /> and Consonantia, there live the blind texts</p>
      </div>
      <div className="start">
       <div className="cou">
        <span>
         <CountUp start={20} end={60} duration={5}></CountUp>+<br />
         <span className="secondary">Years Experienced</span>
        </span>
       </div>
       <div className="cou">
        <span><CountUp start={150} end={200} duration={5}></CountUp>k+</span>
       
        <span className='secondary'>Total Properties</span>
        
       </div>
       <div className="cou">
        <span><CountUp start={200} end={450} duration={5}></CountUp>+</span>
        <span className='secondary'>Total Realtors</span>
       </div>
       <div className="cou">
        <span><CountUp start={40} end={100} duration={5}></CountUp>+</span>
        <span className='secondary'>Total Properties</span>
       </div>
      </div>
      <div className="seco">
       <img src={About1} alt="" className='images' />
      </div>
    </div>
  )
}

export default About
