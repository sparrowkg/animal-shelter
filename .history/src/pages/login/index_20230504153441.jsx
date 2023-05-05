// // import './style.css'
// // import React, { useState } from 'react';

// //  export const LoginPage = () =>{
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState(null);

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     console.log({ username, password });
// //     try {
// //       const response = await fetch('/api/admin/login', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ username, password }),
// //       });
// //       const data = await response.json();
// //       localStorage.setItem('adminToken', data.token);
// //     } catch (err) {
// //       setError('Неверные данные для входа. Попробуйте еще раз.');
// //     }
// //    };

// //   return (
// //     <div className='avtorisation'>
// //       <h1>Страница авторизации админа</h1>
// //       {error && <div>{error}</div>}
// //       <form onSubmit={handleSubmit}>
// //         <input 
// //           type="text" 
// //           placeholder='Имя пользователя' value={username} onChange={(e) => setUsername(e.target.value)}
// //         />
       
// //         <input
// //           type="password" 
// //           placeholder='Пароль' 
// //           value={password} 
// //           onChange={(e) => setPassword(e.target.value)}
// //         />

// //         <button type="submit">Войти</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default LoginPage;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const LoginPage = ({ setLoggedIn }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch('/api/admin/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });
//       const data = await response.json();
//       localStorage.setItem('adminToken', data.token);
//       setLoggedIn(true);
//     } catch (err) {
//       setError('Неверные данные для входа. Попробуйте еще раз.');
//     }
//   };

//   return (
//     <div className='avtorisation'>
//       <h1>Страница авторизации админа</h1>
//       {error && <div>{error}</div>}
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="text" 
//           placeholder='Имя пользователя' 
//           value={username} 
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password" 
//           placeholder='Пароль' 
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Войти</button>
//       </form>
//       <p>
//         Нет аккаунта?{' '}
//         <Link to="/register">Зарегистрироваться</Link>
//       </p>
//     </div>
//   );
// };

// export default LoginPage;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import AdminPetsPage from './AdminPetsPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/pages/admin-pets" component={AdminPetsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

const HomePage = () => {
  return (
    <div>
      <h1>Домашняя страница</h1>
      <p>Добро пожаловать на наш сайт!</p>
    </div>
  );
};

const NotFoundPage = () => {
  return (
    <div>
      <h1>Страница не найдена</h1>
      <p>Извините, запрашиваемая страница не найдена.</p>
    </div>
  );
};

export default App;
