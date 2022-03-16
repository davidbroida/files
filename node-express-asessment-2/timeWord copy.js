function timeWord(time) {
	const HOURS = [
		'twelve',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
		'eleven',
		'twelve'
	];

	const TENS = [ '', '', 'twenty', 'thirty', 'forty', 'fifty' ];

	const ONES = [
		'',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
		'eleven',
		'twelve',
		'thirteen',
		'fourteen',
		'fifteen',
		'sixteen',
		'seventeen',
		'eighteen',
		'nineteen'
	];

	if (time === '00:00') {
		return 'midnight';
	} else if (time === '12:00') {
		return 'noon';
	} else {
		let splitTime = time.split(':');
		hrs = +splitTime[0];
		hoursOutput = HOURS[hrs % 12];
		mins = +splitTime[1];
		if (mins >= 20) {
			minutesOutput = `${TENS[Math.floor(mins / 10)]} ${ONES[mins % 10]}`;
		} else if (mins >= 10) {
			minutesOutput = ONES[mins];
		} else minutesOutput = 'oh' + ' ' + ONES[mins];

		let amPm = '';

		if (hrs < 12) {
			amPm = 'am';
		} else amPm = 'pm';

		if (hrs > 24 || mins > 59) {
			throw 'Invalid time. Please re-enter';
		}

		sentence = `${hoursOutput} ${minutesOutput} ${amPm}`;

		return sentence;
	}
}

module.exports = timeWord;
