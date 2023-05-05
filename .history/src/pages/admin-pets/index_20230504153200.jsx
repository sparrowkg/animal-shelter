// import { useEffect, useState } from 'react'
// import { PetRow } from './pet-row'
// import './style.css'
// import { NavLink } from 'react-router-dom'

// export const AdminPetsPage = () => {
//   const [pets, setPets] = useState([])
//   useEffect(() => {
//     fetch('/animals.json')
//       .then(res => res.json())
//       .then((data) => {
//         setPets(data)
//       })
//   }, [])

//   return (
//       <div className='container'>
       
//         <NavLink to="/admin/pets/cat/new"><button>Добавить кошку</button></NavLink>
//         <NavLink to="/admin/pets/dog/new"><button>Добавить собаку</button></NavLink>
       
//         <div className='admin-pets-content'>
//           <table className="admin-pets__list">
//            <thead>
//               <tr>
//                 <th>id</th>
//                 <th>Имя</th>
//                 <th>Пол</th>
//                 <th>Вид</th>
//                 <th>Редактировать</th>
//                 <th>Удалить</th>
//               </tr>
//            </thead>
//            <tbody>
             
//                {
//                 pets.map(pet => (
//                  <PetRow key={pet.id} pet={pet} />
//                 ))
//                 }
//           </tbody>
          
//         </table>
//           </div>
//       </div>
//   )  
// }
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const AdminPetsPage = () => {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('adminToken'));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/pets');
        const data = await response.json();
        setPets(data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError('Ошибка при загрузке списка животных.');
      }
    };
    fetchData();
  }, []);

  if (!loggedIn) {
    return <Redirect to="/login" />;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Список животных</h1>
      <ul>
        {pets.map((pet) => (
          <li key={pet.id}>{pet.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPetsPage;
