import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const nav = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [created, setCreated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function createUser(event) {

    event.preventDefault();
    event.target.reset();
    nav("/LogIn")

    let user = {
      username,
      email,
      password,
    };

    fetch('http://localhost:3000/api/v1/sign_up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ user }),
    })
      .then((r) => r.json())
      .then((response) => {
        if (response.status === 'created') {
          setCreated(true);
          setErrorMessage('');
        }
      })
      .catch((response) =>
        setErrorMessage(
          "Please try again"
        )
      );
  }

  return (
    <div>
      {created ? (
        <Link to="/login" />
      ) : (
        <div>
          <div>
            <p>{errorMessage}</p>
          </div>
          <br />
          <form onSubmit={createUser}>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
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
        </div>
      )}
      <br />
      <br />
    </div>
  );
}