export const getCharacterList = searchTerm => {
  return fetch(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`)
  .then(res => res.json())
}
