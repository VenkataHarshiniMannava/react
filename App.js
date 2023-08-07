// src/App.js
import React, { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';

function App() {
  const [userDetails, setUserDetails] = useState([]);

  const addUserDetails = (details) => {
    setUserDetails([...userDetails, details]);
  };

  return (
    <div className="app">
      <h1>User Details</h1>
      <UserForm addUserDetails={addUserDetails} />
      <div className="user-details">
        {userDetails.map((user, index) => (
          <div className="user" key={index}>
            <p>{`${user.name} is ${user.age} years old.`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
