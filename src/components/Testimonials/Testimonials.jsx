// import React from 'react'
import Person from '../../assets/person_1.jpg'
import './Testimonials.css'

function Testimonials() {
  return (
    <div className='tess'>
     <h3 className="test">Testimonials</h3>
     <h2 className="cli">Clients We Help</h2>
      <div className="box">
       <div className="bo">
        <p className='lor'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Dolores alias non dolor sunt voluptate ducimus quis,  beatae aliquam molestias inventore  dolorem ipsum libero ut omnis nam obcaecati excepturi fugit consequuntur!</p>
        <img src={Person} alt="" />
        <h1>Roger Scott</h1>
        <p>Marketing Manager</p>
       </div>
       <div className="bo">
        <p className='lor'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Dolores alias non dolor sunt voluptate ducimus quis,  beatae aliquam molestias inventore  dolorem ipsum libero ut omnis nam obcaecati excepturi fugit consequuntur!</p>
        <img src={Person} alt="" />
        <h1>Roger Scott</h1>
        <p>Marketing Manager</p>
       </div>
       <div className="bo">
        <p className='lor'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Dolores alias non dolor sunt voluptate ducimus quis,  beatae aliquam molestias inventore  dolorem ipsum libero ut omnis nam obcaecati excepturi fugit consequuntur!</p>
        <img src={Person} alt="" />
        <h1>Roger Scott</h1>
        <p>Marketing Manager</p>
       </div>
      </div>
    </div>
  )
}

export default Testimonials
