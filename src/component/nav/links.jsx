import { NavLink } from 'react-router-dom'
import './style.css'

export const Links = () => {
    return (
        <div className="nav__links">
            <NavLink to="/">Главная</NavLink> 
            <NavLink to="/pets/dogs">Собаки</NavLink> 
            <NavLink to="/pets/cats">Кошки</NavLink>
            <NavLink to="/about">О нас</NavLink> 
        </div>
    )
}