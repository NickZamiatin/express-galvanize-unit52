const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan('dev'));
app.use(express.json());


app.get('/',(require, response)=>{
  response.send('Welcome to the library')
})

app.listen(PORT, () => {
	console.log(`library-express: Express application is listening on port ${PORT}...`);
});
