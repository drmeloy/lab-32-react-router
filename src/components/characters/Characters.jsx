import React from 'react';
import { useGetCharacters } from '../../hooks/characters';
import { Link } from 'react-router-dom';

const Characters = searchTerm => {
  const data = useGetCharacters(searchTerm);
  const characters = data.results;
  const info = data.info;  

  
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
    <ul>
      {characterList}
    </ul>
  );
}

export default Characters;
