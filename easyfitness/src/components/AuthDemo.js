import React, { useState } from 'react';

const SessionURL = 'http://localhost:3000/api/v1/sessions';

export default function AuthDemo({ loggedIn }) {
  const [sessions, setSessions] = useState([]);

  function authorizedFetch() {
    fetch(SessionURL, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((sessions) => setSessions(sessions));
  }

  function showFetchResponse() {
    if (sessions.length > 0) {
      return sessions.map((session) => {
        return (
          <span key={session.id}>
            <h2>{session.name}</h2>
            <p>{session.notes}</p>
            <p>{session.exercise_name}</p>
          </span>
        );
      });
    } else {
      return (
        <div className="auth-taunt">
          <h2>You need authorization to click that button...</h2>
          <h3>Try all you'd like!</h3>
          {loggedIn ? (
            <h3>Oh wait...You ARE logged in! Give it a whirl!</h3>
          ) : null}
        </div>
      );
    }
  }

  return (
    <div>
    
      <button onClick={authorizedFetch}>Click me to fetch</button>
      <br />
      <br />
      {showFetchResponse()}
      {sessions.length > 0 ? (
        <h1 >
          You successfully fetched the sessions!!
        </h1>
      ) : null}
      <br />
      <br />
    </div>
  );
}