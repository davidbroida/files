import React, { useState } from 'react';

function NewColorForm({ addColor }) {
  const INITIAL_STATE = {
    color: ''
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
    const { color } = formData;
    addColor(color);
    alert(`Color: ${color} added!`);
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="color"
        type="color"
        name="color"
        placeholder="Enter a color"
        value={formData.color}
        onChange={handleChange}
      />
      <button>Add Color</button>
    </form>
  );
}

export default NewColorForm;
