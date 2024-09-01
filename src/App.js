import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import Welcome from './components/Welcome';
import LoginForm from './components/LoginForm';
import UserList from './components/UserList';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('register');

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    setCurrentPage('welcome');
  };

  const handleNavigation = (page, event) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <a className="navbar-brand" href="#" onClick={(e) => handleNavigation('register', e)}>Register</a>
        <a className="nav-link" href="#" onClick={(e) => handleNavigation('login', e)}>Login</a>
        <a className="nav-link" href="#" onClick={(e) => handleNavigation('userList', e)}>User List</a>
      </nav>

      {currentPage === 'register' && <RegistrationForm />}
      {currentPage === 'login' && <LoginForm onLogin={handleLogin} />}
      {currentPage === 'userList' && <UserList />}
      {currentPage === 'welcome' && user && <Welcome user={user} />}
    </div>
  );
};

export default App;


