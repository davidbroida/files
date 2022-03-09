const db = require('../db');
const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const ExpressError = require('../expressError');

router.get('/', async (req, res) => {
	const results = await db.query(`SELECT * FROM invoices`);
	return res.json({ invoices: results.rows });
});

router.get('/:id', async (req, res, next) => {
	try {
		const id = req.params.id;
		const result = await db.query(
			`SELECT i.id,
            i.comp_code,
            i.amt,
            i.paid,
            i.add_date,
            i.paid_date,
            c.name,
            c.description FROM invoices AS i
            INNER JOIN companies AS c ON (i.comp_code = c.code)
            WHERE id = $1`,
			[ id ]
		);

		if (result.rows.length === 0) {
			throw new ExpressError(`Invoice: ${id} does not exist`, 404);
		}

		const data = result.rows[0];
		const invoice = {
			id: data.id,
			company: {
				code: data.comp_code,
				name: data.name,
				description: data.description
			},
			amt: data.amt,
			paid: data.paid,
			add_date: data.add_date,
			paid_date: data.paid_date
		};

		return res.json({ invoice: invoice });
	} catch (err) {
		return next(err);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const { comp_code, amt } = req.body;
		const result = await db.query(
			`INSERT INTO invoices (comp_code, amt) VALUES ($1, $2)
        RETURNING id, comp_code, amt, paid, add_date, paid_date`,
			[ comp_code, amt ]
		);

		return res.status(201).json({ invoice: result.rows[0] });
	} catch (err) {
		return next(err);
	}
});

router.put('/:id', async (req, res, next) => {
	try {
		const { amt } = req.body;
		const id = req.params.id;
		const result = await db.query(
			`UPDATE invoices SET amt=$1
            WHERE id =$2
            RETURNING id, comp_code, amt, paid, add_date, paid_date`,
			[ amt, id ]
		);

		return res.json({ invoice: result.rows[0] });
	} catch (err) {
		return next(err);
	}
});

router.delete('/:id', async (req, res, next) => {
	try {
		const result = await db.query('DELETE FROM invoices WHERE id = $1', [ req.params.id ]);
		return res.json({ status: 'deleted' });
	} catch (err) {
		return next(err);
	}
});

module.exports = router;
