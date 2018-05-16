const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const app = express();
const booksPath = path.join(__dirname, 'data','books.json')// to grab json folder we need use path and join and  _ _dirname
const PORT = process.env.PORT || 3003;
const bookRoutes = require('./routes/books');

app.use(morgan('dev'));
app.use(express.json());
app.use('/books',bookRoutes)




app.listen(PORT, () => {
	console.log(`library-express: Express application is listening on port ${PORT}...`);
});
