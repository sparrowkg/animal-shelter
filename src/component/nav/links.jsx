import { NavLink } from 'react-router-dom'
import './style.css'

export const Links = () => {
    return (
        <div className="nav__links">
            <div className="div__for__link">
              <NavLink to="/">Главная</NavLink> 
            </div>
            <div className="div__for__link">
              <NavLink to="/pets/dogs">Собаки</NavLink> 
            </div>
            <div className="div__for__link">
              <NavLink to="/pets/cats">Кошки</NavLink>
            </div>
            <div className="div__for__link">
              <NavLink to="/about">О нас</NavLink> 
            </div>
        </div>
    )
}