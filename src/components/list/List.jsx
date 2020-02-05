import React, { useState } from 'react';
import { useGetCharacters } from '../../hooks/characters';

const List = () => {
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

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
    <>
      //Search Box
      {characterList}
    </>
  );
};

export const List;
