const express = require('express');
const ExpressError = require('./express_errors');

const { convertNumbersArray, getMean, getMedian, getMode } = require('./helpers');
const app = express();

app.get('/mean', (req, res, next) => {
	if (!req.query.nums) {
		throw new ExpressError('You must include a query of numbers separated by commas.', 400);
	}
	let numbersAsStrings = req.query.nums.split(',');
	let nums = convertNumbersArray(numbersAsStrings);

	if (nums instanceof Error) {
		throw new ExpressError(nums.msg);
	}

	let result = {
		operation: 'mean',
		result: getMean(nums)
	};
	return res.send(result);
});

app.get('/median', (req, res, next) => {
	if (!req.query.nums) {
		throw new ExpressError('You must include a query of numbers separated by commas.', 400);
	}
	let numbersAsStrings = req.query.nums.split(',');
	let nums = convertNumbersArray(numbersAsStrings);

	if (nums instanceof Error) {
		throw new ExpressError(nums.msg);
	}

	let result = {
		operation: 'median',
		result: getMedian(nums)
	};
	return res.send(result);
});

app.get('/mode', (req, res, next) => {
	if (!req.query.nums) {
		throw new ExpressError('You must include a query of numbers separated by commas.', 400);
	}
	let numbersAsStrings = req.query.nums.split(',');
	let nums = convertNumbersArray(numbersAsStrings);

	if (nums instanceof Error) {
		throw new ExpressError(nums.msg);
	}

	let result = {
		operation: 'mode',
		result: getMode(nums)
	};
	return res.send(result);
});

app.listen(3000, function() {
	console.log('Server running on port 3000');
});

// app.get('/mode', (req, res, next) => {});
