export const getCharacterList = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json())
    .then(data => data.results.map(character => {
      character.name,
      character.image
    }))
}
