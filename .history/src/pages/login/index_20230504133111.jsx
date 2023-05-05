import './style.css'
import React, { useState } from 'react';

 export const LoginPage = () =>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({ username, password });
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      localStorage.setItem('adminToken', data.token);
    } catch (err) {
      setError('Неверные данные для входа. Попробуйте еще раз.');
    }
   };

  return (
    <div className='avtorisation'>
      <h1>Страница авторизации админа</h1>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='Имя пользователя' value={username} onChange={(e) => setUsername(e.target.value)}
        />
       
        <input
          type="password" 
          placeholder='Пароль' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />

        <Navlink path><button type="submit">Войти</button></Navlink>
      </form>
    </div>
  );
}

export default LoginPage;