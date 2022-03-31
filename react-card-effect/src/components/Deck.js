import React, { useState } from 'react';
import Card from './Card';
import axios from 'axios';
// import { v4 as uuid } from 'uuid';

const BASE_URL = 'http://deckofcardsapi.com/api/deck';

function Deck() {
  const [deck, setDeck] = useState(null);
  const [drawn, setDrawn] = useState([]);

  async function getDeck() {
    let d = await axios.get(`${BASE_URL}/new/shuffle/`);
    setDeck(d.data);
  }
  getDeck();

  async function getCard() {
    let { deck_id } = deck;

    let res = await axios.get(`${BASE_URL}/${deck_id}/draw/`);
    let card = res.data.cards[0];

    if (res.data.remaining === 0) {
      throw new Error('No cards left!');
    }

    setDrawn((d) => [
      ...d,
      {
        id: card.code,
        image: card.image,
        name: card.value + '' + card.suit
      }
    ]);
  }
  const cards = drawn.map((c) => <Card key={c.id} image={c.image} name={c.name} />);

  return (
    <>
      <button onClick={getCard}>Draw Card!</button>
      <div>{cards}</div>
    </>
  );
}

export default Deck;
