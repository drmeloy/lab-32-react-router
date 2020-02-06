import React from 'react';
import { useGetOne } from '../../hooks/characters';

const Details = ({ match }) => {
  const { details } = useGetOne(match.params.characterId);
  console.log(details);
  
  const { name, image, status, species, type, gender, origin, location } = details;
  console.log(origin);
  console.log(location);
  

  return (
    <>
      <h1>{name}</h1>
      <img src={image} />
      <p>Status: {status}</p>
      <p>Species: {species}</p>
      <p>Gender: {gender}</p>
      {origin && <p>Origin: {origin.name}</p>}
      {location && <p>Location: {location.name}</p>}
    </>
  );
}

export default Details;
