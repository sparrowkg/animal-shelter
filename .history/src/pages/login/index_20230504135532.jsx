import './style.css'
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

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
        history.push('/admin'), 
      });
      const data = await response.json();
      localStorage.setItem('adminToken', data.token);
    } catch (err) {
      setError('Неверные данные для входа. Попробуйте еще раз.');
    }
   };

//   return (
//     <div className='avtorisation'>
//       <h1>Страница авторизации админа</h1>
//       {error && <div>{error}</div>}
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="text" 
//           placeholder='Имя пользователя' value={username} onChange={(e) => setUsername(e.target.value)}
//         />
       
//         <input
//           type="password" 
//           placeholder='Пароль' 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)}
//         />
//          <button type="submit">Войти</button> 
//       </form>
//     </div>
//   );
// }

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
       <button type="submit">Войти</button> 
    </form>
  </div>
);
}

export default LoginPage;