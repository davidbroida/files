import React from 'react';
import { Link } from 'react-router-dom';

function DogDetails({ dog }) {
  return (
    <div>
      <div>
        <img src={dog.src}></img>
        <h2>{dog.name}</h2>
        <h3>{dog.age} years old.</h3>
        <ul>
          {dog.facts.map((fact, idx) => (
            <li key={idx}>{fact}</li>
          ))}
        </ul>
        <Link to="/dogs">Go Back</Link>
      </div>
    </div>
  );
}

export default DogDetails;
