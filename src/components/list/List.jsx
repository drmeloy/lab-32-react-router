import React from 'react';
import Characters from '../characters/Characters.jsx';
import { useGetCharacters } from '../../hooks/characters.js';
import { useLocation } from 'react-router-dom';

const List = () => {
  const { characters, info, page, pageUp, pageDown, handleSubmit, query, setQuery } = useGetCharacters(); 
  
  // const { search } = useLocation();
  // const params = new URLSearchParams(search);
  // const name = params.set('name') || '';
  // console.log(name);
  

  return (
    <>
      <form onSubmit={handleSubmit} >
        <p>Search for a character</p>
        <input type='text' value={query} onChange={({ target }) => setQuery(target.value)} />
        <button>Search</button>
      </form>
      <Characters characters={characters} info={info} page={page} pageUp={pageUp} pageDown={pageDown} />
    </>
  );
};

export default List;
