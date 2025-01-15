// import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import './Video.css'
function Video() {
  return (
    <div>
     <div className="vid">
        <div className="words">
       <h3 className="word">Modern House Video</h3>
       <p className="wor">Far far away, behind the mountains far from the countries Volkavia <br /> and Consonantia, there live the blind texts</p>
       <a href="https://www.youtube.com/"><button className="bot"><CiPlay1 className="ci"/></button></a>
      </div>
     </div>
    </div>
  )
}

export default Video
