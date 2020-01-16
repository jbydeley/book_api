const express = require('express');
const app = express();

const books = [
    {
        id: 0,
        title: 'The Secrets They Keep',
        author: 'Alison Haines',
    },
    {
        id: 1,
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        id: 2,
        title: 'Jurassic Park',
        author: 'Michael Crichton',
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