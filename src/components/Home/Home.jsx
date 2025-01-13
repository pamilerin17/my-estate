// import React from 'react'
import './Home.css'
import { FaArrowRight } from "react-icons/fa";
function Home() {
  return (
    <div>
     <section className='page'>
      <div className="page-container">
       <h3 className="text">Your Property is <br /> Our Priority</h3>
       <p className="txt">A small river named Duden flows by their place and supplies it with the <br /> necessary regelialia. It is a paradisematic country, in which roasted parts of <br /> sentences fly into your mouth.</p>

       <div className="btn">
      <button className="bt">Learn More<FaArrowRight/></button>
     </div>
      </div>
 
     </section>

    </div>
  )
}

export default Home
