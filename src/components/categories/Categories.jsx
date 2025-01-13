// import React from 'react'
import './Categories.css'
import Land from '../../assets/Land.png'
import Residential from '../../assets/Residential.png'
import Commercial from '../../assets/Commercial.png'
import Industrial from '../../assets/Industrial.png'
function Categories() {
  return (
    <div>
      <section className="categories">
       <h3 className="cate">HomeBuild Categories</h3>
       <h2 className="cat">Explore Our Categories <br /> & Places</h2>
      </section>

      <div className="grid-container">
        <div className="icon">
       <img src={Land} alt="" />
      </div>
      <div className="tx">
       <h2>Land</h2>
      </div>

      <div className="icon">
       <img src={Residential} alt="" />
      </div>
      <div className="tx">
       <h2>Residential</h2>
      </div>

     <div className="icon">
       <img src={Commercial} alt="" />
      </div>
      <div className="tx">
       <h2>Commercial</h2>
      </div>

            <div className="icon">
       <img src={Industrial} alt="" />
      </div>
      <div className="tx">
       <h2>Industrial</h2>
      </div>
      </div>
    </div>
  )
}

export default Categories
