import { NavLink } from "react-router-dom"
import "./style.css"

export const Nav = () => {
    return (
        <ul className="nav">
        <li>
          <NavLink to="/">Главная</NavLink>
        </li>
        <li>
          <NavLink to="/dogs">Собаки</NavLink>
        </li>
        <li>
          <NavLink to="/cats">Кошки</NavLink>
        </li>
        <li>
          <NavLink to="/about">О нас</NavLink>
        </li>
      </ul>
    )
}