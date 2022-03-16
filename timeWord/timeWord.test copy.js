const timeWord = require('./timeWord');

describe('timeWord', function() {
	const time = '23:23';

	test('it turns a string of 24hr time into words', function() {
		let sentence = timeWord(time);
		expect(sentence).toBe('eleven twenty three pm');
	});
});

describe('timeWord', function() {
	const time = '00:00';

	test('it responds with midnight', function() {
		let response = timeWord(time);
		expect(response).toBe('midnight');
	});
});

describe('timeWord', function() {
	const time = '12:00';

	test('it responds with noon', function() {
		let response = timeWord(time);
		expect(response).toBe('noon');
	});
});
