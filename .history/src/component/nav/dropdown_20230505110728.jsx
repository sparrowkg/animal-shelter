import './style.css'
import { NavLink } from 'react-router-dom'

const links = [
    {id:1, to: '/', text: 'glav'},
    {id:2, to: '/pets/dogs', text: 'dog'},
    {id:3, to: '/pets/cats', text: 'cat'},
    {id:4, to: '/about', text: 'avbout'},
]

export const Dropdown = ({ onClose }) => {
    return (
        <div className='nav__dropdown-parent'>
            <div onClick={onClose} className="nav__dropdown-overlay"></div>
            <div className="nav__dropdown">
                {
                    links.map(({ id, to, text }) => (
                        <NavLink 
                            onClick={} 
                            key={id} 
                            to={to}
                        >
                            {text}</NavLink>
                    ))
                } 
            </div>
        </div>
    )
}