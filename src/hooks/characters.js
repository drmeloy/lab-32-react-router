import { useState, useEffect } from 'react';
import { getCharacterList, getOne } from '../services/rickAndMortyApi.js';
import { useHistory, useLocation } from 'react-router-dom';

export const useGetCharacters = () => {
  const [characterList, setCharacterList] = useState({ info: {}, results: [] });

  const { search } = useLocation();
  const history = useHistory();
  const params = new URLSearchParams(search);
  const name = params.get('name') || '';
  const page = +params.get('page') || 1;

  useEffect(() => {
    getCharacterList(name, page)
      .then(setCharacterList);
  }, [name, page]);

  const pageDown = () => {
    history.push(`/characters/?page=${page - 1}&name=${name}`)
  }

  const pageUp = () => {
    history.push(`/characters/?page=${page + 1}&name=${name}`)
  }

  return { characters: characterList.results, info: characterList.info, pageDown, pageUp, page };
};

export const useGetOne = id => {
  const [details, setDetails] = useState({});

  useEffect(() => {
    getOne(+id)
      .then(setDetails)
  }, [id]);

  return {details, setDetails};
};

