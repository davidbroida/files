import React from 'react';

function UserCard({ id, firstName, lastName, email, state }) {
  return (
    <div>
      <p>
        <b>
          Name: {firstName} {lastName}
        </b>
      </p>
      <p>Email: {email}</p>
      <p style={state === 'active' ? { color: 'green' } : { color: 'red' }}>status {state}</p>
      <hr></hr>
    </div>
  );
}

export default UserCard;
