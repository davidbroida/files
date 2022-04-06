import React, { useState } from 'react';
import InputForm from './InputForm';

function AddCommas() {
  // const addCommas = (number) => {
  //   let answer = number.toLocaleString();
  // };

  const nfObject = new Intl.NumberFormat('en-US');

  const [number, toString] = useState(null);
  const addCommas = (number) => {
    toString(nfObject.format(number));
  };
  return (
    <div>
      <InputForm addCommas={addCommas} />
      <p>{number}</p>
    </div>
  );
}

export default AddCommas;

// let answer = number.toLocalString();
