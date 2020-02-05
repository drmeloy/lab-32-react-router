import React, { useState } from 'react';
import Characters from '../characters/Characters.jsx';


const List = () => {
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setSearchTerm(query);
  }

  return (
    <>
      <form onSubmit={handleSubmit} >
        <p>Search for a character</p>
        <input type='text' onChange={({ target }) => setQuery(target.value)} />
        <button>Search</button>
      </form>
      <Characters searchTerm={searchTerm} />
    </>
  );
};

export default List;
