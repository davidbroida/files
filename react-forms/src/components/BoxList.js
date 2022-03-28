import NewBoxForm from "./NewBoxForm";
import React, {useState} from "react";
import Box from "./Box"
import { v4 as uuid} from 'uuid';


const BoxList = () => {
  const INITIAL_STATE = [
    { id:"", width: "", height: "", color: ""},
  ]
  const [boxes, setBoxes] = useState(INITIAL_STATE);
  const addBox = (id,width, height, color) =>{
    setBoxes(boxes => [...boxes, {id: uuid(), width, height, color}])
  };
  const remove = id => {
    setBoxes(boxes => boxes.filter(box => box.id !== id))
    alert('Removed!')
  }

  return (
    <div>
      <h3> Box List </h3>
      <NewBoxForm addBox={addBox} />
      <div>
        {boxes.map(({id, width, height, color}) => <Box id={id} width={width} height={height} color={color} key={id} handleRemove={remove}/>)}
      </div>
    </div>
  )
}

export default BoxList;