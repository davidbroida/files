import React from 'react';
import { Link } from 'react-router-dom';

function ColorDetails({ color }) {
  return (
    <div className={`color-${color.name}`}>
      <>
        <h1>This is the color {color.name}!</h1>
        <b>
          <Link to="/colors">Go Back</Link>
        </b>
      </>
    </div>
  );
}

export default ColorDetails;
