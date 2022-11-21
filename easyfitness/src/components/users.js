import React from 'react'

const users = (props) => {
  return  <div>
      <h1> List of users</h1>
      {props.users.map((user) => {
             return <div key= {user.id}>
                <h2>{user.username}</h2>
                <p>{user.email}</p>
             </div>
      })}
       
    </div>;
  
}

export default users
