import React, { useState } from 'react';
import {  useNavigate, NavLink } from 'react-router-dom';

export default function Login({ setCurrentUser }) {
  const nav = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(event) {
    event.preventDefault();
    event.target.reset();
    nav('/User')


    const user = { username, password };

    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user }),
    })
      .then((r) => r.json())
      .then((response) => {
        localStorage.token = response.jwt;
        setCurrentUser(response.user);
      });
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <br />
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        Don't have an account?
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
      <br />
      <br />
    </div>
  );
}