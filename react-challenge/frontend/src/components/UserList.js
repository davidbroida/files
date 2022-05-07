import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import companyApi from '../api/api';
import UserCard from './UserCard';
import SearchForm from './SearchForm';

function UserList({ users }) {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(
    function getUserInfo() {
      async function getUsers() {
        let user = await companyApi.getUsers();
        console.log(user);
        setUser(user);
      }

      getUsers();
    },
    [id]
  );

  if (!user)
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );

  return (
    <div className="outer-container">
      <div className="inner-container">
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
            state={user.state}
          />
        ))}
      </div>
    </div>
  );
}

export default UserList;
