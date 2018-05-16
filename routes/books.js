const express = require('express');
const router = express();
const booksController = require('../controllers/books')

router.get('/',booksController.index)
router.get('/:id',booksController.show)
router.post('/',booksController.create)
router.put('/',booksController.update)
router.delete('/:id',booksController.destroy)

module.exports = router;
