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

export default LoginPage;
