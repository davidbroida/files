import React from 'react';
import { Link } from 'react-router-dom';

function ColorList({ colors }) {
  return (
    <div>
      <div>
        <div className="heading">
          <h1>Welcome to the color factory.</h1>
          <Link className="button" to="/colors/new">
            Add a color!
          </Link>
        </div>
      </div>
      <div className="mainBody">
        <br></br>
        <p>Please select a color.</p>
        {colors.map((color) => (
          <div key={color.name}>
            <h3>
              <Link to={`/colors/${color.name.toLowerCase()}`}>{color.name}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorList;
