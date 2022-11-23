import React, { useState, useEffect} from 'react';

const SessionURL = 'http://localhost:3000/api/v1/sessions';

export default function Sessions({ loggedIn }) {
  const [sessions, setSessions] = useState([]);

 useEffect(()=> {
    fetch(SessionURL, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then((res) => res.json())
        .then((sessions) => setSessions(sessions));
 },[])
    
  

  return (
    <div>
        {sessions.map((session) => {
            return <div key= {session.id}>
                    <h2>{session.name}</h2>
                    <p>{session.notes}</p>
                    <p>{session.exercise_name}</p>
                </div>
                
            })}
      
      
    </div>
  
  )
    
}