const express = require('express');
const app = express();

const books = [
    {
        id: 0,
        title: 'The Secrets They Keep',
        author: 'Alison Haines',
        rating: 5,
    },
    {
        id: 1,
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
        rating: 4,
    },
    {
        id: 2,
        title: 'Jurassic Park',
        author: 'Michael Crichton',
        rating: 3,
    },
    {
        id: 3,
        title: 'Mistborn',
        author: 'Brandon Sanderson',
        rating: 5,
    },
];

app.get('/books/:id', (req, res) => {
    const book = books[req.params.id];
    res.status(200).send(book);
});

app.get('/books', (req, res) => {
    res.status(200).send(books);
});

module.exports = {api: app};