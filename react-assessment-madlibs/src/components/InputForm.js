import React, { useState } from 'react';

const InputForm = ({ createMadLib }) => {
  const INITIAL_STATE = {
    noun: '',
    noun2: '',
    adjective: '',
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
    const { id, noun, noun2, adjective, color } = formData;
    createMadLib(id, noun, noun2, adjective, color);
    // alert(
    //   `Created a Mad Lib with the nouns: ${noun} and ${noun2}, the adjective: ${adjective} and the color: ${color}. Enjoy!`
    // );
    setFormData(INITIAL_STATE);
  };

  const [isClicked, setClick] = useState(false);
  const handleClick = () => {
    setClick(!isClicked);
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="noun"
        className="input"
        type="text"
        name="noun"
        placeholder="noun"
        value={formData.noun}
        onChange={handleChange}
      />
      <input
        id="noun2"
        className="input"
        type="text"
        name="noun2"
        placeholder="noun 2"
        value={formData.noun2}
        onChange={handleChange}
      />
      <input
        id="adjective"
        className="input"
        type="text"
        name="adjective"
        placeholder="adjective"
        value={formData.adjective}
        onChange={handleChange}
      />
      <input
        id="color"
        className="input"
        type="text"
        name="color"
        placeholder="color"
        value={formData.color}
        onChange={handleChange}
      />
      <br></br>
      <button className={isClicked ? 'clicked' : null} onClick={handleClick}>
        Create Mad lib!
      </button>
      <button className={isClicked ? null : 'clicked'} onClick={refreshPage}>
        Reload
      </button>
    </form>
  );
};

export default InputForm;
