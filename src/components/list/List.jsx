import React, { useState } from 'react';
import Characters from '../characters/Characters.jsx';
import { useHistory, useLocation } from 'react-router-dom';

const List = () => {
  const history = useHistory();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const [query, setQuery] = useState(params.get('name'));

  const handleSubmit = event => {
    event.preventDefault();
    history.push(`/characters/?name=${query}`);
  }

  return (
    <>
      <form onSubmit={handleSubmit} >
        <p>Search for a character</p>
        <input type='text' value={query} onChange={({ target }) => setQuery(target.value)} />
        <button>Search</button>
      </form>
      <Characters />
    </>
  );
};

export default List;
