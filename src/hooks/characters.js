import { useState, useEffect } from 'react';
import { getCharacterList } from '../services/rickAndMortyApi.js';

export const useGetCharacters = ({ searchTerm }) => {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    getCharacterList(searchTerm)
      .then(setCharacterList);
  }, [searchTerm]);

  return characterList;
}
