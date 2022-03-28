import React, {useState} from "react";

const NewBoxForm = ({addBox}) => {
  const INITIAL_STATE = {
    width:'',
    height:'',
    color:''
  }

  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const {id, width, height, color} = formData;
    addBox(id,width, height, color);
    // addBox(8, 8, 8, "GREEN");
    alert(`Created Box with width: ${width} height: ${height} and color: ${color}!`)
    setFormData(INITIAL_STATE);
  }

  return (
    <form onSubmit ={handleSubmit}>
      {/* <label htmlFor="name">Width</label> */}
      <input
      id="width"
      type="text"
      name="width"
      placeholder="Box width"
      value={formData.width}
      onChange={handleChange}
      />
      {/* <label htmlFor="name">Height</label> */}
      <input
      id="height"
      type="text"
      name="height"
      placeholder="Box height"
      value={formData.height}
      onChange={handleChange}
      />
      {/* <label htmlFor="name">Color</label> */}
      <input
      id="color"
      type="text"
      name="color"
      placeholder="Background color"
      value={formData.color}
      onChange={handleChange}
      />
      {/* <p>{formData.width}</p>
      <p>{formData.height}</p>
      <p>{formData.color}</p> */}
      <button>Create Box</button>
    </form>
  )
}

export default NewBoxForm;

