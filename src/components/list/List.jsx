import React, { useState } from 'react';
import { useGetCharacters } from '../../hooks/characters';
import { Link } from 'react-router-dom';

const List = () => {
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const characters = useGetCharacters(searchTerm);
  console.log(characters);
  

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

export default List;
