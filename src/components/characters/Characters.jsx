import React from 'react';
import { useGetCharacters } from '../../hooks/characters';
import { Link } from 'react-router-dom';

const Characters = searchTerm => {
  const characters = useGetCharacters(searchTerm);

  const characterList = characters.map(character => (
    <li key={character.name}>
      <Link to={`/characters/${character.name}`}>
        <figure>
          <img src={character.image}/>
          <p>{character.name}</p>
        </figure>
      </Link>
    </li>
  ));

  return (
    <ul>
      {characterList}
    </ul>
  );
}

export default Characters;
