import { useEffect, useState } from 'react'
import { PetRow } from './pet-row'
import './style.css'

const mockPets = [
  { id: 1, name: "Buddy", gender: "male", type: "dog" },
  { id: 2, name: "Max", gender: "male", type: "dog" },
  { id: 3, name: "Charlie", gender: "male", type: "dog" },
  { id: 4, name: "Rocky", gender: "male", type: "dog" },
  { id: 5, name: "Cooper", gender: "male", type: "dog" },
  { id: 6, name: "Daisy", gender: "female", type: "dog" },
  { id: 7, name: "Luna", gender: "female", type: "dog" },
  { id: 8, name: "Bailey", gender: "female", type: "dog" },
  { id: 9, name: "Sadie", gender: "female", type: "dog" },
  { id: 10, name: "Oliver", gender: "male", type: "cat" },
  { id: 11, name: "Leo", gender: "male", type: "cat" },
  { id: 12, name: "Milo", gender: "male", type: "cat" },
  { id: 13, name: "Simba", gender: "male", type: "cat" },
  { id: 14, name: "Tiger", gender: "male", type: "cat" },
  { id: 15, name: "Luna", gender: "female", type: "cat" },
  { id: 16, name: "Bella", gender: "female", type: "cat" },
  { id: 17, name: "Lily", gender: "female", type: "cat" },
  { id: 18, name: "Lucy", gender: "female", type: "cat" }
];


export const AdminPetsPage = () => {
  const [pets, setPets] = useState(mockPets)
  useEffect(() => {
    // fetch()
  }, [])

  return (
      <div className='container'>
        <div className="admin-pets__title">Имя питомца</div>
        <button>add</button>
        <div className="admin-pets__list">
          {
            pets.map(pet => (
              <PetRow key={pet.id} pet={pet} />
            ))
          }
        </div>
      </div>
  )  
}