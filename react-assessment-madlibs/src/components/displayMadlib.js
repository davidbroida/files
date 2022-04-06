import React, { useState } from 'react';
import InputForm from './InputForm';
import Madlib from './Madlib';
import { v4 as uuid } from 'uuid';

function DisplayMadlib() {
  const INITIAL_STATE = [{ id: '', noun: '', noun2: '', adjective: '', color: '' }];

  const [words, addWords] = useState(INITIAL_STATE);
  const createMadLib = (id, noun, noun2, adjective, color) => {
    addWords((words) => [...words, { id: uuid(), noun, noun2, adjective, color }]);
  };
  return (
    <div>
      <h3>Mad Libs!</h3>
      <InputForm createMadLib={createMadLib} />
      <p>
        {words.map(({ id, noun, noun2, adjective, color }) => (
          <Madlib
            key={uuid()}
            id={id}
            noun={noun}
            noun2={noun2}
            adjective={adjective}
            color={color}
          />
        ))}
      </p>
    </div>
  );
}

export default DisplayMadlib;

// let answer = number.toLocalString();
