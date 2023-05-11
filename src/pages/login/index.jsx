
import { Navigate }  from "react-router-dom"
import './style.css';
import React, { useState, useEffect } from 'react';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [redirectToAdmin, setRedirectToAdmin] = useState(false); // Добавлено состояние для перенаправления

  const loginApiUrl = 'http://35.195.136.135/api/auth_token/';

  useEffect(() => {
    // Проверяем наличие токена при загрузке страницы
    const token = localStorage.getItem('token');
    if (token) {
      setRedirectToAdmin(true);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(loginApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        setRedirectToAdmin(true); // Перенаправляем на страницу админа после получения токена
      } else {
        setError('Неверные данные для входа. Попробуйте еще раз.');
      }
    } catch (err) {
      setError('Ошибка при выполнении запроса. Попробуйте еще раз.');
    }
  };

  if (redirectToAdmin) {
    return <Navigate to="/admin" />
  }

  return (
    <div className="avtorisation">
      <h1>Страница авторизации админа</h1>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Имя пользователя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginPage;