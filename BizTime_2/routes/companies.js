const db = require('../db');
const express = require('express');
const router = express.Router();
const ExpressError = require('../expressError');
const slugify = require('slugify');

router.get('/', async (req, res) => {
	const results = await db.query(`SELECT * FROM companies`);
	return res.json(results.rows);
});

// router.get('/:code', async (req, res, next) => {
// 	try {
// 		const code = req.params.code;
// 		const results = await db.query(
// 			`SELECT code, name, description
//     FROM companies WHERE code=$1`,
// 			[ code ]
// 		);

// 		return res.json(results.rows);
// 	} catch (err) {
// 		return next(err);
// 	}
// });

router.get('/:code', async (req, res, next) => {
	try {
		const code = req.params.code;
		const results = await db.query(
			`SELECT c.code,
            c.name,
            c.description,
            i.id,
            i.comp_code,
            i.amt,
            i.paid,
            i.add_date,
            i.paid_date 
            FROM invoices AS i INNER JOIN companies AS c
            ON (i.comp_code = c.code) WHERE code=$1`,
			[ code ]
		);

		if (results.rows.length === 0) {
			throw new ExpressError(`Company: ${code} does not exist`, 404);
		}

		const data = results.rows[0];
		const company = {
			code: data.comp_code,
			name: data.name,
			description: data.description,
			invoices: {
				id: data.id,
				comp_code: data.comp_code,
				amt: data.amt,
				paid: data.paid,
				add_date: data.add_date,
				paid_data: data.paid_date
			}
		};

		return res.json({ company: company });
	} catch (err) {
		return next(err);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const { name, description } = req.body;
		const code = slugify(name, { lower: true });

		const result = await db.query(
			`INSERT INTO companies (code, name, description) 
        VALUES ($1, $2, $3)
        RETURNING code, name, description`,
			[ code, name, description ]
		);

		return res.status(201).json(result.rows[0]);
	} catch (err) {
		return next(err);
	}
});

router.put('/:code', async (req, res, next) => {
	try {
		const { code, name, description } = req.body;
		const results = await db.query(
			`UPDATE companies SET code=$1, name=$2, description=$3
            WHERE code=$1
            RETURNING code, name, description`,
			[ code, name, description ]
		);

		return res.json(results.rows[0]);
	} catch (err) {
		return next(err);
	}
});

router.delete('/:code', async (req, res, next) => {
	try {
		const result = await db.query('DELETE FROM companies WHERE code = $1', [ req.params.code ]);
		return res.json({ message: 'Deleted' });
	} catch (err) {
		return next(err);
	}
});

module.exports = router;
