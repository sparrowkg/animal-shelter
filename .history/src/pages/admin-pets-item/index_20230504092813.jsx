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
      main_image:  main_image,
    };
    

    clearForm()
  };

  return (
   div
};

export default AdminPetsItemPage;