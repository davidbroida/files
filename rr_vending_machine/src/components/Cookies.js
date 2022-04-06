import React from 'react';
import { Link } from 'react-router-dom';

const Cookies = () => {
  return (
    <div>
      <h1>YUM! Cookies!</h1>
      <img
        height="450px"
        width="450px"
        src="https://m.media-amazon.com/images/I/81O7yOGtrpL._SL1500_.jpg"></img>
      <h2>
        <Link to="/">Go Back</Link>
      </h2>
    </div>
  );
};

export default Cookies;
