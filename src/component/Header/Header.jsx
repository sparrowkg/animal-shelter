import React from "react";
import './header.css';
import Nav from '../nav'
import Logo from "../../img/Logo.png"

function Header () {
  return (
    <div className='header'> 
      <div className="container">
        <div className="header__inner">
          <img className="logo" src={Logo} alt="" />
          <Nav/>
        </div>
      </div>
    </div>
  )
}

export default Header;