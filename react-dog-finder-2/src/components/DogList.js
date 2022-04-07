import React from 'react';
import { Link } from 'react-router-dom';

function DogList({ dogs }) {
  return (
    <div>
      <div>
        <div>
          <h1> Click on a dog for more info!</h1>
        </div>
      </div>
      <div>
        {dogs.map((dog) => (
          <div key={dog.name}>
            <img src={dog.src}></img>
            <h3>
              <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
