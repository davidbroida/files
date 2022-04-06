import React from 'react';
import { Link } from 'react-router-dom';

const Snickers = () => {
  return (
    <div>
      <h1>Snickers. Sweet!</h1>
      <img src="https://m.media-amazon.com/images/I/71+r1gAwsZL._SX522_.jpg"></img>
      <h2>
        <Link to="/">Go Back</Link>
      </h2>
    </div>
  );
};

export default Snickers;
