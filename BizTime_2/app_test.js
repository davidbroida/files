// connect to right DB --- set before loading db.js
process.env.NODE_ENV = 'test';

// npm packages
const request = require('supertest');

// app imports
const app = require('./app');
const db = require('./db');

let testCompany;

beforeEach(async function() {
	let result = await db.query(
		`INSERT INTO companies (code, name, description) VALUES ('TestCompany', ' Test Company', 'Testing 123') RETURNING code, name, description`
	);
	testCompany = result.rows[0];
});

afterEach(async function() {
	await db.query('DELETE FROM companies');
});

afterAll(async function() {
	await db.end();
});

describe('GET /companies', function() {
	test('Gets a list of 1 company', async function() {
		const response = await request(app).get(`/companies`);
		expect(response.statusCode).toEqual(200);
		companies: [ testCompany ];
	});
});
