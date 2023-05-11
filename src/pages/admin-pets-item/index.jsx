import { useParams } from 'react-router-dom';
import './style.css'
import React, { useEffect, useState } from 'react';

const api = 'http://35.195.136.135/api'

export const AdminPetsItemPage = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [short_text, setShort_text] = useState('');
  const [description, setDescription] = useState('');
  const [main_image, setImage] = useState('');
  const { id, type } = useParams()
  const [data, setData] = useState(null)

  const clearForm = () => {
    setName('');
    setGender('');
    setShort_text('');
    setDescription('');
    setImage('');
  }
  var token = localStorage.getItem('token') || ""

// Проверка, существует ли токен
  useEffect(() => {
    if (!id) return
    fetch(`${api}/${type}/${id}`)
      .then(res => res.json())
      .then(setData)
  }, [id])

  useEffect(() => {
    if (!id) return
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
      main_image:  main_image,
    };
  if (!id) {
    // Make a POST request to create a new animal
    fetch(`${api}/${type}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      },
      body: JSON.stringify(newAnimal),
    })
      .then(res => res.json())
      .then(response => {
        console.log('New animal created:', response);
        clearForm();
      })
      .catch(error => {
        console.error('Error creating animal:', error);
      });
  }
  else {
    // Make a PUT request to update an existing animal
    fetch(`${api}/${type}/${id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Token ${token}`
      },
      body: JSON.stringify(newAnimal),
    })
      .then(res => res.json())
      .then(response => {
        console.log('Animal updated:', response);
        clearForm();
      })
      .catch(error => {
        console.error('Error updating animal:', error);
      });
  }
};
console.log(`${api}/${type}/${id}`);

  return (
   <div className='form-submit'>
     <form onSubmit={handleSubmit}>
      <div >
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
         <label htmlFor=" main_image">Image:</label>
         <input type="image" id=" main_image" value={ main_image} onChange={(e) => setImage(e.target.value)} />
       </div>
      <button type="submit" onClick={handleSubmit}>
        {!id ? 'Create ' : 'Update '}
         Animal</button>
    </form>
    </div>
  );
 
};

export default AdminPetsItemPage;