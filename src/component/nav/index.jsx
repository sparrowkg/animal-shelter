import React, { useState } from 'react';
import { Links } from './links'
import { Dropdown } from './dropdown'
import { Burger } from '../burger'
import "./style.css"

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Links />

      <Burger className="nav__burger" onClick={handleToggleMenu}/>
      { isOpen && <Dropdown onClose={handleToggleMenu}/> }
    </div>
  );
};

export default BurgerMenu;
