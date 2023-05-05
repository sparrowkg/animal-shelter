// import './style.css'
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

//  export const LoginPage = () =>{
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log({ username, password });
//     try {
//       const response = await fetch('/api/admin/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });
//       const data = await response.json();
//       localStorage.setItem('adminToken', data.token);
//     } catch (err) {
//       setError('Неверные данные для входа. Попробуйте еще раз.');
//     }
//    };

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
//          <Link to="/pages/admin-pets/index"><button type="submit">Войти</button> </Link>
//       </form>
//     </div>
//   );
// }

// export default LoginPage;
import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './LoginPage';
import AdminPetsPage from './AdminPetsPage';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const adminToken = localStorage.getItem('adminToken');
    if (adminToken) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setLoggedIn(false);
  };

  return (
    <div>
      <Switch>
        <Route exact path="/">
          {loggedIn ? (
            <Redirect to="/pages/admin-pets/index" />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route exact path="/login">
          {loggedIn ? (
            <Redirect to="/pages/admin-pets/index" />
          ) : (
            <LoginPage setLoggedIn={setLoggedIn} />
          )}
        </Route>
        <Route exact path="/pages/admin-pets/index">
          {loggedIn ? (
            <AdminPetsPage handleLogout={handleLogout} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
      </Switch>
    </div>
  );
};

export default App;
