// import React from 'react'
import './Proper.css'
import Work1 from '../../assets/Work-1.jpg'
import Work2 from '../../assets/Work-2.jpg'
import Work3 from '../../assets/Work-3.jpg'
import Work from '../../assets/Work-4.jpg'
import bg from '../../assets/bg_1.jpg'
import bg2 from '../../assets/bg_2.jpg'



function Proper() {
  return (
    <div className='po'>
      <div className="explore">
        <h1>Explore Our Properties</h1>
        <p>Featured Properties</p>
        <div className="pics">
           <div className="images">
          <img src={Work1} alt="" />
        </div>
          <div className="images">
          <img src={bg} alt="" />
        </div>
          <div className="images">
          <img src={bg2} alt="" />
        </div>
            <div className="images">
          <img src={Work} alt="" />
        </div>
            <div className="images">
          <img src={Work2} alt="" />
        </div>
            <div className="images">
          <img src={Work3} alt="" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Proper
