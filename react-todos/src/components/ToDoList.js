import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import NewToDoForm from './NewToDoForm';
import ToDo from './ToDo';

const INITIAL_STATE = [{ id: uuid(), task: '' }];

const ToDoList = () => {
  const [toDos, setToDos] = useState(INITIAL_STATE);
  const addToDo = (id, task) => {
    setToDos((toDos) => [...toDos, { id: uuid(), task }]);
  };
  const remove = (id) => {
    setToDos((toDos) => toDos.filter((toDo) => toDo.id !== id));
    alert('removed!');
  };

  return (
    <div>
      <h3>To Do List</h3>
      <NewToDoForm addToDo={addToDo} />
      <div>
        {toDos.map(({ id, task }) => (
          <ToDo id={id} task={task} handleRemove={remove} key={id} />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
