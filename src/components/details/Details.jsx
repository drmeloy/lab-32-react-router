import React from 'react';
import { useGetOne } from '../../hooks/characters';

const Details = ({ match, history }) => {
  const { details } = useGetOne(match.params.characterId);
  console.log(history);
  
  const { name, image, status, species, gender, origin, location } = details;  

  return (
    <>
      <h1>{name}</h1>
      <img src={image} />
      <p>Status: {status}</p>
      <p>Species: {species}</p>
      <p>Gender: {gender}</p>
      {origin && <p>Origin: {origin.name}</p>}
      {location && <p>Location: {location.name}</p>}
      <button onClick={() => history.goBack()}>Back</button>
    </>
  );
}

export default Details;
