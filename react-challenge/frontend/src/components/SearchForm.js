import React, { useState } from 'react';

function SearchForm({ searchFor }) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    searchFor(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  }

  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Search users.." value={searchTerm} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
