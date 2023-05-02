import { NavLink } from "react-router-dom"

export const PetRow = ({ pet }) => {
  const handleDelete = () => {
    // fetch
  }
  return (
    <tr>
      <td>{pet.id}</td>
      <td>{pet.name}</td>
      <td>{pet.gender}</td>
      <td>{pet.type}</td>
      <td> <NavLink to={`/admin/pets/${pet.id}`}>UPDATE</NavLink></td>
      <td><button onClick={handleDelete}>DELETE</button></td>
    </tr>
  )
}