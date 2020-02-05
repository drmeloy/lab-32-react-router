export const getCharacterList = (searchTerm, page) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${searchTerm}`)
  .then(res => res.json())
}
