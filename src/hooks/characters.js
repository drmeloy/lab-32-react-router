import { useState, useEffect } from 'react';
import { getCharacterList } from '../services/rickAndMortyApi.js';

export const useGetCharacters = ({ searchTerm }) => {
  const [characterList, setCharacterList] = useState({ info: {}, results: [] });
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCharacterList(searchTerm, page)
      .then(setCharacterList);
  }, [searchTerm, page]);

  return { characters: characterList.results, info: characterList.info, page, setPage };
}
