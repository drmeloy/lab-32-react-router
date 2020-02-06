import { useState, useEffect } from 'react';
import { getCharacterList, getOne } from '../services/rickAndMortyApi.js';

export const useGetCharacters = ({ searchTerm }) => {
  const [characterList, setCharacterList] = useState({ info: {}, results: [] });
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCharacterList(searchTerm, page)
      .then(setCharacterList);
  }, [searchTerm, page]);

  return { characters: characterList.results, info: characterList.info, page, setPage };
};

export const useGetOne = id => {
  const [details, setDetails] = useState({});

  useEffect(() => {
    getOne(+id)
      .then(setDetails)
  }, [id]);

  return {details, setDetails};
};