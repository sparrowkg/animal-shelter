import { NavLink } from "react-router-dom"
import './style.css'

export const PetRow = ({ pet }) => {
  const handleDelete = () => {
    // fetch
  }
  return (
   <tr className="table">
    
      <td>{pet.id}</td>
      <td>{pet.name}</td>
      <td>{pet.gender}</td>
      <td>{pet.species}</td>
      <td><NavLink to={`/admin/pets/${pet.species}/${pet.id}`}><button>UPDATE</button></NavLink> </td>
      <td><button onClick={handleDelete}>DELETE</button></td>
    
   </tr>
  )
}