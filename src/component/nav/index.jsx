import React, { useState } from 'react';
import { NavLink } from "react-router-dom"
import "./style.css"

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className='headerMenu'>
    <ul>
          <NavLink to="/">Главная</NavLink> 
          <NavLink to="/dogs">Собаки</NavLink> 
          <NavLink to="/cats">Кошки</NavLink>
          <NavLink to="/about">О нас</NavLink> 
        </ul>
    </div>
      
      <div className='burgerMenu'>
   <button onClick={handleToggleMenu}>
   <svg className='logoMenu' width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 17H20M4 12H20M4 7H20" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
   </button>
      {isOpen && (
      <div>
        <ul>
          <NavLink to="/">Главная</NavLink> 
          <NavLink to="/dogs">Собаки</NavLink> 
          <NavLink to="/cats">Кошки</NavLink>
          <NavLink to="/about">О нас</NavLink> 
        </ul>
      </div>
      )}
      </div>
   
    </>
  );
};

export default BurgerMenu;
