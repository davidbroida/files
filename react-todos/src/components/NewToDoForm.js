import React, { useState } from 'react';

const NewToDoForm = ({ addToDo }) => {
  const INITIAL_STATE = {
    id: '',
    task: ''
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id, task } = formData;
    addToDo(id, task);
    alert(`Task created: ${task}`);
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="task"
        type="text"
        name="task"
        placeholder="Enter a task"
        value={formData.task}
        onChange={handleChange}
      />
      <button>Add To List</button>
    </form>
  );
};

export default NewToDoForm;
