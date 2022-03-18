import React from 'react';
import Pokedex from './Pokedex';

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

function Pokecard(props) {
	let img = `${POKE_API}${props.id}.png`;

	return (
		<div className="Pokecard">
			<div className="name">{props.name}</div>
			<img className="image" src={img} />
			<div className="type">Type: {props.type}</div>
			<div className="exp">EXP: {props.base_experience}</div>
		</div>
	);
}

export default Pokecard;
