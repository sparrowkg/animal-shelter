import './style.css'
import React, { useState } from 'react';

export const AdminPetsItemPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const clearForm = () => {
    setName('');
    setAge('');
    setBreed('');
    setDescription('');
    setImage('');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAnimal = {
      name: name,
      age: age,
      breed: breed,
      description: description,
      image: image
    };
    // тут будет запрос на бэк с новым животным
    clearForm()
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      
       <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
       </div>
       
       <div>
         <label htmlFor="breed">Breed:</label>
         <input type="text" id="breed" value={breed} onChange={(e) => setBreed(e.target.value)} />
       </div>
       
       <div>
         <label htmlFor="description">Description:</label>
         <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
       </div>

       <div>
         <label htmlFor="image">Image:</label>
         <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
       </div>
      <button type="submit">Create Animal</button>
    </form>
  );
};

export default AdminPetsItemPage;