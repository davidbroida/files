import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import companyApi from '../api/api';
import UserList from './UserList';
import SearchForm from './SearchForm';

function getList() {
  const [users, setUsers] = useState([]);

  useEffect(function getUsersOnLoad() {
    search();
  }, []);

  async function search(name) {
    let users = await companyApi.getUsers(name);
    setUsers(users);
  }

  return (
    <div>
      <h2>Users</h2>

      {users.length ? (
        <div>
          <UserList users={users} />
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default getList;
