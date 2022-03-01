function convertNumbersArray(numbersAsStrings) {
	let result = [];

	for (let i = 0; i < numbersAsStrings.length; i++) {
		let valToNumber = Number(numbersAsStrings[i]);

		if (Number.isNaN(valToNumber)) {
			return new Error(`The value '${numbersAsStrings[i]}' at index ${i} is not a valid number.`);
		}
		result.push(valToNumber);
	}
	return result;
}

function getMean(nums) {
	if (nums.length === 0) return 0;
	return (
		nums.reduce(function(accumulator, nextValue) {
			return accumulator + nextValue;
		}) / nums.length
	);
}

function getMedian(nums) {
	// sort and get the middle element

	nums.sort((a, b) => a - b);

	let middleIndex = Math.floor(nums.length / 2);
	let median;

	if (nums.length % 2 === 0) {
		median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
	} else {
		median = nums[middleIndex];
	}
	return median;
}

function getMode(nums) {
	var numMapping = {};
	var greatestFreq = 0;
	var mode;
	nums.forEach(function findMode(number) {
		numMapping[number] = (numMapping[number] || 0) + 1;

		if (greatestFreq < numMapping[number]) {
			greatestFreq = numMapping[number];
			mode = number;
		}
	});
	return +mode;
}

module.exports = {
	convertNumbersArray,
	getMean,
	getMedian,
	getMode
};
