import React from 'react';

const ToDo = ({ id, task, handleRemove }) => {
  const remove = () => handleRemove(id);
  if (task === '') {
    return null;
  } else
    return (
      <div>
        <li id={id}>{task}</li>
        <button onClick={remove}>Remove</button>
      </div>
    );
};

export default ToDo;
