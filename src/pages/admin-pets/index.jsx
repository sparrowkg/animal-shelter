import { useEffect, useState } from 'react'
import { PetRow } from './pet-row'
import './style.css'
import { NavLink, useNavigate } from 'react-router-dom'

const api = 'http://35.195.136.135/api'

export const AdminPetsPage = () => {
  const [pets, setPets] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      fetch(`${api}/animals/`)
        .then(res => res.json())
        .then((data) => {
          setPets(data)
        })
    } else {
      navigate('/admin/login')
    }
    
  }, [])

  return (
      <div className='container'>
       
        <NavLink to="/admin/pets/cat/new"><button>Добавить кошку</button></NavLink>
        <NavLink to="/admin/pets/dog/new"><button>Добавить собаку</button></NavLink>
       
        <div className='admin-pets-content'>
          <table className="admin-pets__list">
           <thead>
              <tr>
                <th>id</th>
                <th>Имя</th>
                <th>Пол</th>
                <th>Вид</th>
                <th>Редактировать</th>
                <th>Удалить</th>
              </tr>
           </thead>
           <tbody>
             
               {
                pets.map(pet => (
                 <PetRow key={pet.id} pet={pet} />
                ))
                }
          </tbody>
          
        </table>
          </div>
      </div>
  )  
}