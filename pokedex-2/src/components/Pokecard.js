import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import './pokecard.css';

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const Name = styled.div`
  color: black;
  cursor: pointer;
  ${(props) =>
    props.isClicked &&
    css`
      color: red;
    `}
`;

const Wrapper = styled.div`
  cursor: pointer;
  border: 1px solid grey;
`;

const Pokecard = (props) => {
  let img = `${POKE_API}${props.id}.png`;

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  console.log(isClicked);
  return (
    <Wrapper onClick={(e) => handleClick(e)}>
      {/* <div className={isClicked ? 'name red' : 'name black'}>{props.name}</div> */}
      <Name isClicked={isClicked}>{props.name}</Name>
      <img className="image" src={img} />
      <div className="type">Type: {props.type}</div>
      <div className="exp">EXP: {props.base_experience}</div>
    </Wrapper>
  );
};

export default Pokecard;
