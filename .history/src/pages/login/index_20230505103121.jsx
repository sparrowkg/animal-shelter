import './style.css'
import React, { useState } from 'react';

 export const LoginPage = () =>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const loginApiUrl = 'http://35.195.136.135/api/auth_token'

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({ username, password });
    try {
      const response = await fetch(loginApiUrl, {
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

        <button type="submit">Войти</button>
      </form>
    </div>
  );
}

export default LoginPage;

// import React, { useState } from 'react';

// function LoginPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // отправляем запрос на сервер для проверки данных
//     fetch('/api/login', {
//       method: 'POST',
//       body: JSON.stringify({ username, password })
//     })
//       .then(response => response.json())
//       .then(data => {
//         if (data.success) {
//           // если авторизация успешна, перенаправляем на страницу администратора
//           window.location.href = '/admin';
//         } else {
//           // иначе выводим сообщение об ошибке
//           alert('Неверное имя пользователя или пароль.');
//         }
//       })
//       .catch(error => {
//         console.error('Ошибка при выполнении запроса: ', error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Имя пользователя:
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//       </label>
//       <label>
//         Пароль:
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </label>
//       <button type="submit">Войти</button>
//     </form>
//   );
// }

// export default LoginPage;