import React from "react"


const Box = ({id, width, height, color, handleRemove}) => {

const remove = () => handleRemove(id);
if (id === ""){
  return null
}else

  return ( 
    <div>
      <div id= {id} style={{ width: `${width}px`, height: `${height}px`, backgroundColor: color }}></div>
      <button onClick={remove}>Remove</button>
    </div>
  )
}

export default Box;