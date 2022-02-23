let shuffleCards = 'http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

let firstDraw = 'http://deckofcardsapi.com/api/deck/new/draw/?count=2';

let BASEHTML = 'http://deckofcardsapi.com/api/deck/new/draw/?count=';

let cardsDrawn = 1;

async function drawCard() {
	await $.getJSON(`${BASEHTML}${cardsDrawn}`).then((data) => {
		console.log(`${data.cards[0].value} OF ${data.cards[0].suit}`);
		cardsDrawn += 1;
		let card = data.cards[0].image;
		console.log(card);
		$('.deck').append(`<img class="card" src="${card}" width="300" height="400">`);
	});
	console.log(cardsDrawn);
}
