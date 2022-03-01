const express = require('express');
const ExpressError = require('./expressError');
// const ExpressError = require('./expressError');
const router = new express.Router();
const items = require('./fakeDB');

// const ITEMS = [ { name: 'popsicle', price: 1.0 }, { name: 'cheerios', price: 2.0 } ];

router.get('/', function(req, res) {
	res.json({ item: items });
});

router.post('/', function(req, res) {
	const newItem = { name: req.body.name, price: req.body.price };
	items.push(newItem);
	res.status(201).json({ item: newItem });
});

router.get('/:name', (req, res) => {
	const foundItem = items.find((item) => item.name === req.params.name);
	// if (foundItem === undefined) {
	// 	throw new ExpressError('Item Not Found', 404);
	// }
	res.json({ item: foundItem });
});

router.patch('/:name', function(req, res) {
	const foundItem = items.find((item) => item.name === req.params.name);
	// if (foundItem === undefined) {
	// 	throw new ExpressError('Item not found', 404);
	// }
	foundItem.name = req.body.name;
	foundItem.price = req.body.price;
	res.json({ updated: { item: foundItem } });
});

router.delete('/:name', function(req, res) {
	const foundItem = items.find((item) => item.name === req.params.name);
	// if (foundItem === -1) {
	// 	throw new ExpressError('Item not found', 404);
	// }
	items.splice(foundItem, 1);
	res.json({ message: 'Deleted' });
});

module.exports = router;
