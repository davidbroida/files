import React from 'react';
import { useParams } from 'react-router-dom';
import ColorDetails from './ColorDetails';

function FilterColors({ colors }) {
  const { name } = useParams();

  if (name) {
    const color = colors.find((c) => c.name.toLowerCase() === name.toLowerCase());
    return <ColorDetails color={color} />;
  }
  return null;
}
export default FilterColors;
