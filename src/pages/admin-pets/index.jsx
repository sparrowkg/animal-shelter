import { useEffect, useState } from 'react'
import { PetRow } from './pet-row'
import './style.css'
import { NavLink } from 'react-router-dom'

export const AdminPetsPage = () => {
  const [pets, setPets] = useState([])
  useEffect(() => {
    fetch('/animals.json')
      .then(res => res.json())
      .then((data) => {
        setPets(data)
      })
  }, [])

  return (
      <div className='container'>
       
        <NavLink to="/admin/pets/new"><button>Добавит питомца</button></NavLink>
        <div className="admin-pets__title">Имя питомца</div>
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