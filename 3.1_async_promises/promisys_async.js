// let favoriteNumber = 8;
// let BASEURL = 'http://numbersapi.com';

// $.getJSON(`${BASEURL}/${favoriteNumber}?json`).then((data) => {
// 	console.log(data);
// });

// let array = [ 7, 8, 13 ];
// let favNums = [];
// for (let i = 0; i < array.length; i++) {
// 	$.getJSON(`${BASEURL}/${array[i]}?json`).then((data) => {
// 		favNums.push(data);
// 	});
// }
// // console.log(favNums);

// let favoriteNumbers = [ 7, 8, 13 ];
// $.getJSON(`${BASEURL}/${favoriteNumbers}?json`).then((data) => {
// 	// console.log(data);
// });

// Promise.all(
// 	Array.from({ length: 4 }, () => {
// 		return $.getJSON(`${BASEURL}/${favoriteNumber}?json`);
// 	})
// ).then((facts) => {
// 	facts.forEach((data) => $('body').append(`<p>${data.text}</p>`));
// });

let math = Math.random() * 10;
let favNum = Math.floor(math);
console.log(favNum);
let BASEURL = 'http://numbersapi.com';

async function getNumber() {
	let number = await $.getJSON(`${BASEURL}/${favNum}?json`);
	console.log(number);
}

let favNums = [ 20, 21, 22 ];
async function getNumbers() {
	let numbers = await $.getJSON(`${BASEURL}/${favNums}?json`);
	console.log(numbers);
}

async function getFacts() {
	let response = await Promise.all(Array.from({ length: 4 }, () => $.getJSON(`${BASEURL}/${favNum}?json`)));
	response.forEach((data) => {
		$('body').append(`<p>${data.text}</p>`);
	});
}
