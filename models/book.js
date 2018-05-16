// app.get('/',(request, response)=>{
//   response.send('Welcome to the library')
// });
// index
const fs = require('fs');
const path = require('path');
const booksPath = path.join(__dirname,'..','data','books.json')

const index = () => {
  const booksJSON = fs.readFileSync(booksPath, 'utf-8');
  const books = JSON.parse(booksJSON); // we need take all str and changet to javaScript language
    // Respond with that array
  return books;

};
const show = () =>{};
const create = () =>{}
const update = () =>{}
const destroy = () =>{}
// show
// app.get('/books/:id',(request, response)=>{
//   // reade JSON file
//   fs.readFile(booksPath, 'utf-8', (error, booksJSON)=>{
//   // error handaling
//   if (error) {
//     console.error(error);
//     return response.sendStatus(500);
//   }
//   // Parse the JSON file and store in array
//   const books = JSON.parse(booksJSON)
//   //find th array item obj(book onj) that matches : id and store it
//   const matchingBook = books.find(book => book.ISBN === request.params.id);
//   // resnond with thet item
//   response.send(matchingBook);
//
//   })
// });
//
//
// // create
// app.post('/books', (request, response) => {
//   // Read JSON file
//   fs.readFile(booksPath, 'utf-8', (readError, booksJSON) => {
//     // Error handling
//     if (readError) {
//       console.error(readError);
//       return response.sendStatus(500);
//     }
//     // Parse JSON file and store in an array
//     const books = JSON.parse(booksJSON);
//     // Push new data as book object into array
//     const newBook = {
//       ISBN: request.body.ISBN,
//       title: request.body.title,
//       author: request.body.author,
//       price: parseFloat(request.body.price)
//     };
//     books.push( newBook );
//     // Stringify updated array to json
//     updatedBooksJSON = JSON.stringify(books);
//     // Write JSON back to the file
//     fs.writeFile(booksPath, updatedBooksJSON, (writeError) => {
//       // Error handling
//       if (writeError) {
//         console.error(writeError);
//         return response.sendStatus(500);
//       }
//       // Respond with new data (book object)
//       response.send( newBook );
//     });
//   });
// });
// // update
// app.put('/books/:id',(request, response)=>{
//   // reade JSON file
//   fs.readFile(booksPath, 'utf-8', (error, booksJSON)=>{
//   // error handaling
//   if (error) {
//     console.error(error);
//     return response.sendStatus(500);
//   }
//
//   // PARSE JSON file and store array
//   const books = JSON.parse(booksJSON);
//   const NewBook = {
//     ISBN: request.body.ISBN,
//     title: request.body.title,
//     author: request.body.author,
//     price: parseFloat(request.body.price)
//   }
//   // find the array item that matches : id
//   const updatedBooks = books.map (book =>{
//     if(book.ISBN === request.params.id){
//       return   NewBook
//     }else {
//       return book;
//     }
//   })
//   // convert arr to JSON (strignifi)
//   const updatedBooksJSON = JSON.stringify(updatedBooks);
//   fs.writeFile(booksPath, updatedBooksJSON,(writeError)=>{
//     if (writeError) {
//       console.error(writeError);
//       return response.sendStatus(500);
//     }
//   })
//   // write the JSON back to the file
//   // resnond with thet item
//   response.send(NewBook);
// })
// });
// //distroy
// app.delete('/books/:id', (request, response) => {
//   let matchingBook;
//   // Read JSON file
//   fs.readFile(booksPath, 'utf-8', (readError, booksJSON) => {
//     // Error handling
//     if (readError) {
//       console.error(readError);
//       return response.sendStatus(500);
//     }
//     // parse JSON file and store into an array
//     const books = JSON.parse(booksJSON);
//     // Remove item from array that matches :id, store it in an object
//     const remainingBooks = books.filter( book => {
//       if ( book.ISBN === request.params.id ) {
//         matchingBook = book;
//         return false;
//       } else {
//         return true;
//       }
//     });
//     // Convert smaller array to JSON (stringify)
//     const remainingBooksJSON = JSON.stringify(remainingBooks);
//     // Write JSON back to file
//     fs.writeFile(booksPath, remainingBooksJSON, (writeError) => {
//       // Error handling
//       if (writeError) {
//         console.error(writeError);
//         return response.sendStatus(500);
//       }
//       // Respond with stored, deleted object
//       response.send(matchingBook);
//     });
//   });
// });

module.exports = {
  index,
  show,
  create,
  update,
  destroy
}
