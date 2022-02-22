let favoriteNumber = 8;
let BASEURL = 'http://numbersapi.com';

$.getJSON(`${BASEURL}/${favoriteNumber}?json`).then((data) => {
	console.log(data);
});

let array = [ 7, 8, 13 ];
let favNums = [];
for (let i = 0; i < array.length; i++) {
	$.getJSON(`${BASEURL}/${array[i]}?json`).then((data) => {
		favNums.push(data);
	});
}
// console.log(favNums);

let favoriteNumbers = [ 7, 8, 13 ];
$.getJSON(`${BASEURL}/${favoriteNumbers}?json`).then((data) => {
	// console.log(data);
});

Promise.all(
	Array.from({ length: 4 }, () => {
		return $.getJSON(`${BASEURL}/${favoriteNumber}?json`);
	})
).then((facts) => {
	facts.forEach((data) => $('body').append(`<p>${data.text}</p>`));
});
