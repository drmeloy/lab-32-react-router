export const getCharacterList = (name, page) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`)
  .then(res => res.json())
};

export const getOne = (id) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
  .then(res => res.json());
};
