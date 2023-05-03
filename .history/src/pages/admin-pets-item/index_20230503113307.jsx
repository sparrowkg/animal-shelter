import { useParams } from 'react-router-dom';
import './style.css'
import React, { useEffect, useState } from 'react';

const api = 'http://35.195.136.135/api'

export const AdminPetsItemPage = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [short_text, setShort_text] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const { id, type } = useParams()
  const [data, setData] = useState(null)

  const clearForm = () => {
    setName('');
    setGender('');
    setShort_text('');
    setDescription('');
    setImage('');
  }

  useEffect(() => {
    if (id === 'new') return
    fetch(`${api}/${type}/${id}`)
      .then(res => res.json())
      .then(setData)
  }, [id])

  useEffect(() => {
    if (id === 'new') return
    setName(data?.name)
    setGender(data?.gender)
    setShort_text(data?.short_text)
    setDescription(data?.description)
  }, [data])

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAnimal = {
      name: name,
      gender: gender,
      short_text: short_text,
      description: description,
      image: image
    };
    

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
          <label htmlFor="gender">Gender:</label>
          <input type="text" id="gender" value={gender} onChange={(e) => setGender(e.target.value)} />
       </div>
       
       <div>
         <label htmlFor="short_text">Short text:</label>
         <input type="text" id="short_text" value={short_text} onChange={(e) => setShort_text(e.target.value)} />
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