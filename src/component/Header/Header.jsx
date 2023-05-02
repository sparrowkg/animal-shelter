import React from "react";
import './header.css';
import Nav from '../nav'
import Logo from "../../img/Logo.png"

function Header () {
  return (
    <div className='header'> 
      <div className="container">
        <div className="header__inner">
         <div className="header__h3">
         <img className="logo" src={Logo} alt="" />
          <h3>Сердце в лапках</h3>
         </div>
          <Nav/>
        </div>
      </div>
    </div>
  )
}

export default Header;