import React from 'react';
import { Link } from 'react-router-dom';

function DogDetails({ dog }) {
  return (
    <div>
      <>
        <img src={dog.src}></img>
        <h1>{dog.name}</h1>
        <h3>{dog.age} years old.</h3>
        <ul>
          {dog.facts.map((fact, idx) => (
            <li key={idx}>{fact}</li>
          ))}
        </ul>
        <Link to="/dogs">Go Back</Link>
      </>
    </div>
  );
}

export default DogDetails;
