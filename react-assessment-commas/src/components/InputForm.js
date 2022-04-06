import React, { useState } from 'react';

const InputForm = ({ addCommas }) => {
  const INITIAL_STATE = {
    number: ''
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
    const { number } = formData;
    addCommas(number);
    alert(`Submit of ${number} working！`);
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="number"
        type="text"
        name="number"
        placeholder="Enter a number"
        value={formData.number}
        onChange={handleChange}
      />
      <button>Add commas!</button>
    </form>
  );
};

export default InputForm;
