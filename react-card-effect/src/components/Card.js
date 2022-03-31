import React, { useState } from 'react';

function Card({ name, image }) {
  return <img className="Card" src={image} />;
}

export default Card;
