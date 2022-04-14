import React, { useState } from 'react';
import axios from "axios";

const AddItem = ({ drinks }) => {
  const INITIAL_STATE = {
    id: '',
    name: '',
    description: '',
    recipe: '',
    serve: ''
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
    const { id, name, description, recipe, serve } = formData;
    setFormData(id, name, description, recipe, serve);
    axios.post('http://localhost:5000/drinks',
      { id, name, description, recipe, serve })
    alert(`Item ${name} added!`);
    setFormData(INITIAL_STATE);
  };

  return (
    <div className="submitForm">

      <h3> Add a drink to our menu!</h3>

      <form onSubmit={handleSubmit}>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Drink name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          id="description"
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          id="recipe"
          type="text"
          name="recipe"
          placeholder="Recipe"
          value={formData.recipe}
          onChange={handleChange}
        />
        <input
          id="serve"
          type="text"
          name="serve"
          placeholder="How to serve"
          value={formData.serve}
          onChange={handleChange}
        />
        <button>Add Drink!</button>
      </form>
    </div>

  );
};

export default AddItem;



