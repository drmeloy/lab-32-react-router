import React from 'react';
import { useGetCharacters } from '../../hooks/characters';
import { Link } from 'react-router-dom';
import Pagination from '../pagination/Pagination.jsx';

const Characters = searchTerm => {
  const { characters, info, page, setPage } = useGetCharacters(searchTerm);
  
  const characterList = characters ? 
    characters.map(character => (
      <li key={character.id}>
        <Link to={`/characters/${character.name}`}>
          <figure>
            <img src={character.image}/>
            <p>{character.name}</p>
          </figure>
        </Link>
      </li>
    ))
    :
    <li>No results found, please try another search</li>

  return (
    <>
      <Pagination info={info} page={page} setPage={setPage} />
      <ul>
        {characterList}
      </ul>
    </>
  );
}

export default Characters;
