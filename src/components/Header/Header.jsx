import {useState} from 'react'
import './Header.css'
import Download from '../../assets/download-removebg-preview.png'
import {Link} from 'react-router-dom'
import { BiMenu } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import OutsideClickHandler from 'react-outside-click-handler'
function Header() {
 const [menuOpened,setMenuOpened]=useState(false)
 const getMenuStyles=(menuOpened)=>{
  if(document.documentElement.clientWidth<=800){
   return{right:!menuOpened && '-100%'}
  }
 }
  return (
    <div>
            <div className="first">
        <div className="reach">
        <p className="call"><FaPhone/>Call us: <br />  +234 712 3456 213</p>
        <p className="location"><FaLocationArrow/>
          Our Location : <br />Suite 47 Ikeja Road
        </p>
        </div>
      </div>
      <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
          <img src={Download} alt="" className='Logo' />
          <OutsideClickHandler onOutsideClick={()=>{
        setMenuOpened(false)
       }}> </OutsideClickHandler>
        </div>
         <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Sermon'>Properties</Link>
        <Link to='/Blog'>Agents</Link>
        <button className='button'><a href="contact">Contact US</a></button>
       </div>

        <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
        <BiMenu size={30}/>
       </div>
      </section>
    </div>
  )
}

export default Header
