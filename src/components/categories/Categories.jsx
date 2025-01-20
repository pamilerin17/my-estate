// import React from 'react'
import './Categories.css'
import Land from '../../assets/land.png'
import Residential from '../../assets/Residential.png'
import Commercial from '../../assets/Commercial.png'
import Industrial from '../../assets/Industrial.png'
function Categories() {
  return (
    <div className='po'>
      <section className="categories">
       <h3 className="cate">HomeBuild Categories</h3>
       <h2 className="cat">Explore Our Categories <br /> & Places</h2>
      </section>
      <div className="programs">
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

      <div className="properties">
        <div className="place">
          <h2>New York </h2>
          <button className='butt'>200 Properties</button>
        </div>
        <div className="place">
          <h2>Carlifonia </h2>
          <button className='butt'>200 Properties</button>
        </div>
        <div className="place">
          <h2>Florida </h2>
          <button className='butt'>200 Properties</button>
        </div>
          <div className="place">
          <h2>London </h2>
          <button className='butt'>200 Properties</button>
        </div>
        <div className="place">
          <h2>Teneesee </h2>
          <button className='butt'>200 Properties</button>
        </div>
        <div className="place">
          <h2>Charlotte </h2>
          <button className='butt'>200 Properties</button>
        </div>
          <div className="place">
          <h2>Chicago </h2>
          <button className='butt'>200 Properties</button>
        </div>
        <div className="place">
          <h2>Texas </h2>
          <button className='butt'>200 Properties</button>
        </div>
        <div className="place">
          <h2>Orlando </h2>
          <button className='butt'>200 Properties</button>
        </div>
          <div className="place">
          <h2>Illinois </h2>
          <button className='butt'>200 Properties</button>
        </div>
        <div className="place">
          <h2>North-Carolina </h2>
          <button className='butt'>200 Properties</button>
        </div>
        <div className="place">
          <h2>Atalanta</h2>
          <button className='butt'>200 Properties</button>
        </div>
      </div>
    </div>
  )
}

export default Categories
