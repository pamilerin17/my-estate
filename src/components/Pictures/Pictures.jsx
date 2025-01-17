// import React from 'react'
import './Pictures.css'
import Gallery1 from '../../assets/gallery-1.jpg'
import Gallery2 from '../../assets/gallery-2.jpg'
import Gallery3 from '../../assets/gallery-3.jpg'
import Gallery4 from '../../assets/gallery-4.jpg'
import Gallery5 from '../../assets/gallery-5.jpg'


function Pictures() {
  return (
    <div className='last'>
      <img src={Gallery1} alt="" />
      <img src={Gallery2} alt="" />
      <img src={Gallery3} alt="" />
      <img src={Gallery4} alt="" />
      <img src={Gallery5} alt="" />
    </div>
  )
}

export default Pictures
