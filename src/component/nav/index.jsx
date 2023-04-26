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
   <button onClick={handleToggleMenu}>menu</button>
      {isOpen && (
        <ul>
          <NavLink to="/">Главная</NavLink> 
          <NavLink to="/dogs">Собаки</NavLink> 
          <NavLink to="/cats">Кошки</NavLink>
          <NavLink to="/about">О нас</NavLink> 
        </ul>
      )}
      </div>
   
    </>
  );
};

export default BurgerMenu;
