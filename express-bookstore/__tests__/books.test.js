process.env.NODE_ENV = 'test';

const request = require('supertest');

const app = require('../app');
const db = require('../db');

let book_isbn;

beforeEach(async () => {
	let result = await db.query(`INSERT INTO
    books(isbn, amazon_url, author, anguage, pages, publisher,title,year) 
    VALUES ('12313324',
    'https://amazon.com/davidsbook',
    'David Broida',
    'English',
    200,
    'Broida Publishing',
    'The Life of David', 2009)
    RETURNING isbn`);

	book_isbn = result.rows[0].isbn;
});

describe('POST /books', function() {
	test('creates a new book', async function() {
		const response = await request(app).post(`/books`).send({
			isbn: '12423532',
			amazon_url: 'https://amazon.com/bali',
			author: 'David Broida',
			language: 'English',
			pages: 150,
			publisher: 'Broida Publishing',
			title: ' The Life of David II',
			year: 2000
		});
		expect(response.statusCode).tobe(201);
		expect(response.body.book).toHaveProperty('isbn');
	});
	test('Prevents creation of book without a title', async function() {
		const response = await request(app).post(`/books`).send({ year: 2000 });
		expect(response.statusCode).toBe(400);
	});
});

describe('GET /books', function() {
	test('Gets a list of 1 book', async function() {
		const response = await request(app).get(`/books`);
		const books = response.body.books;
		expect(books).toHaveLength(1);
		expect(books[0]).toHaveProperty('isbn');
		expect(books[0]).toHaveProperty('amazon_url');
	});
});

describe('GET /books/:isbn', function() {
	test('Gets a single book', async function() {
		const response = await request(app).get(`/books/${book_isbn}`);
		expect(response.body.book).toHaveProperty('isbn');
		expect(response.body.book.isbn).toBe(book_isbn);
	});

	test("Responds with 404 if can't find book", async function() {
		const response = await request(app).get(`/books/999`);
		expect(response.statusCode).toBe(404);
	});
});

describe('PUT /books/:id', function() {
	test('Updates a book', async function() {
		const response = await request(app).put(`/books/${book_isbn}`).send({
			amazon_url: 'https://amazon.com/bali',
			author: 'AnneMarie Catanzano',
			language: 'spanish',
			pages: 500,
			publisher: 'Catanzano Publishing',
			title: 'UPDATED BOOK',
			year: 2010
		});
		expect(response.body.book).toHaveProperty('isbn');
		expect(response.body.book.title).toBe('UPDATED BOOK');
	});

	test('Prevents a bad book update', async function() {
		const response = await request(app).put(`/books/${book_isbn}`).send({
			isbn: '32794782',
			badField: 'DO NOT ADD ME!',
			amazon_url: 'https://amazon.com/bali',
			author: 'David Broida',
			language: 'english',
			pages: 400,
			publisher: 'Broida Publishing',
			title: 'UPDATED BOOK',
			year: 2010
		});
		expect(response.statusCode).toBe(400);
	});

	test("Responds 404 if can't find book", async function() {
		// delete book first
		await request(app).delete(`/books/${book_isbn}`);
		const response = await request(app).delete(`/books/${book_isbn}`);
		expect(response.statusCode).toBe(404);
	});
});

describe('DELETE /books/:id', function() {
	test('Deletes a book', async function() {
		const response = await request(app).delete(`/books/${book_isbn}`);
		expect(response.body).toEqual({ message: 'Book deleted' });
	});
});

afterEach(async function() {
	await db.query('DELETE FROM BOOKS');
});

afterAll(async function() {
	await db.end();
});
