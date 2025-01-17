// import React from 'react'
import Team1 from '../../assets/team-1.jpg'
import Team2 from '../../assets/team-2.jpg'
import Team3 from '../../assets/team-3.jpg'
import Team4 from '../../assets/team-4.jpg'
import './Agents.css'

function Agents() {
  return (
    <div>
      <div className="boxx">
       <h2 className='meet'>Meet Our Agents</h2>
       <h1 className='our'>Our Agents</h1>
          <div className="ima">
       <img src={Team1} alt="" />
       <h1>Mike Boogs</h1>
         <img src={Team2} alt="" />
       <h1>Mike Bochs</h1>
         <img src={Team3} alt="" />
       <h1>Jessica Moore</h1>
         <img src={Team4} alt="" />
       <h1>Sarah Genomiro</h1>
      </div>
      </div>
  
    </div>
  )
}

export default Agents
