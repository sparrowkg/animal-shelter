export const PetRow = ({ pet }) => {
  return (
    <div>
      <div>{pet.name}</div>
      <div>{pet.type}</div>
      <button>edit</button>
      <button>delete</button>
    </div>
  )
}