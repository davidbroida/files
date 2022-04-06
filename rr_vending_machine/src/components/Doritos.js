import React from 'react';
import { Link } from 'react-router-dom';

const Doritos = () => {
  return (
    <div>
      <h1>Doritos... spicy choice!</h1>
      <img
        height="500px"
        width="400px"
        src="https://m.media-amazon.com/images/I/81S5rKXF10L._SY879_.jpg"></img>
      <h2>
        <Link to="/">Go Back</Link>
      </h2>
    </div>
  );
};

export default Doritos;
