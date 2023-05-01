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
      <div className='container mtb-3'>
        <div className="table_responsive">
        <table className='table'>
     <thead>
     <tr>
    <th>#</th>
    <th>Name</th>
    <th>Id</th>
    <th>Gender</th>
    <th>Details</th>
    <th>Update</th>
    <th>Delete</th>
    </tr>
     </thead>
  <tr>
    <td>1</td>
    <td>Teddi</td>
    <td>012</td>
    <td>dog</td>
    <td>Burger</td>
    <td><button>Update</button></td>
    <td><button>Delete</button></td>
  </tr>
  <tr>
    <td>2</td>
    <td>Teddi</td>
    <td>012</td>
    <td>dog</td>
    <td>Burger</td>
    <td><button>Update</button></td>
    <td><button>Delete</button></td>
  </tr>
  <tr>
    <td>3</td>
    <td>Teddi</td>
    <td>012</td>
    <td>dog</td>
    <td>Burger</td>
    <td><button>Update</button></td>
    <td><button>Delete</button></td>
  </tr>
  <tr>
    <td>4</td>
    <td>Teddi</td>
    <td>012</td>
    <td>dog</td>
    <td>Burger</td>
    <td><button>Update</button></td>
    <td><button>Delete</button></td>
  </tr>
  <tr>
    <td>5</td>
    <td>Teddi</td>
    <td>012</td>
    <td>dog</td>
    <td>Burger</td>
    <td><button>Update</button></td>
    <td><button>Delete</button></td>
  </tr>
 
</table>
        </div>
      </div>
  )  
}


// export const AdminPetsPage = () => {
//   const [pets, setPets] = useState(mockPets)
//   useEffect(() => {
//     // fetch()
//   }, [])

//   return (
//       <div className='container'>
//         <div className="admin-pets__title">Имя питомца</div>
//         <button>add</button>
//         <div className="admin-pets__list">
//           {
//             pets.map(pet => (
//               <PetRow key={pet.id} pet={pet} />
//             ))
//           }
//         </div>
//       </div>
//   )  
// }