import './style.css'
import { NavLink } from 'react-router-dom'

const links = [
    {id:1, to: '/', text: 'glav'}
]

export const Dropdown = ({ onClose }) => {
    return (
        <div className='nav__dropdown-parent'>
            <div onClick={onClose} className="nav__dropdown-overlay"></div>
            <div className="nav__dropdown">
                <NavLink to="/">Главная</NavLink> 
                <NavLink to="/pets/dogs">Собаки</NavLink> 
                <NavLink to="/pets/cats">Кошки</NavLink>
                <NavLink to="/about">О нас</NavLink> 
            </div>
        </div>
    )
}