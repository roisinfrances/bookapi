const express = require('express');
const router = express.Router();

const books = require('./bookscontroller')

router.get('/books', books.index);
router.get('/books/:id', books.show)

router.post('/books/create', books.create)

router.delete('/books/:id', books.delete)

router.put('/books/:id', books.update)

module.exports = router;