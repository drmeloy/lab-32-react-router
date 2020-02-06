import React from 'react';
import { useGetCharacters } from '../../hooks/characters';
import { Link } from 'react-router-dom';
import Pagination from '../pagination/Pagination.jsx';

const Characters = () => {
  const { characters, info, page, pageUp, pageDown,  } = useGetCharacters();
  
  const characterList = characters ? 
    characters.map(character => (
      <li key={character.id}>
        <Link to={`/characters/details/${character.id}`}>
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
      {characters && <Pagination info={info} page={page} pageUp={pageUp} pageDown={pageDown} />}
      <ul>
        {characterList}
      </ul>
    </>
  );
}

export default Characters;
