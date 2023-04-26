import React from "react";
import './header.css';
import Nav from '../nav'
import Logo from "../../img/Logo.png"

function Header () {
  return (
   <div className='header container'> 
   <img className="logo" src={Logo} alt="" />
    <Nav/>
   </div>
  )
}

export default Header;