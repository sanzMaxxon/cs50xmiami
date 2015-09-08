/*
The Reading List

Keep track of which books you read and which books you want to read!

- Create an array of objects, where each object describes a book and has
  properties for the title (a string), author (a string),
  and alreadyRead (a boolean indicating if you read it yet).

- Iterate through the array of books. For each book, log the book title
  and book author like so: "The Hobbit by J.R.R. Tolkien".

- Now use an if/else statement to change the output depending on whether you
  read it yet or not. If you read it, log a string like
  'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string
  like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
*/

// write your solution here...
function Book(title, author, alreadyRead) {
  this.title = title;
  this.author = author;
  this.alreadyRead = alreadyRead;
}
// create book list
var list = [];
// create books and add them to the list array
var hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', false);
list.push(hobbit);
var lordOfRings = new Book('The Lord of the Rings', 'J.R.R. Tolkien', true);
list.push(lordOfRings);
var sideMountain = new Book('My Side of the Mountain', 'Jean Craighead George', true);
list.push(sideMountain);
var killMockingbird = new Book('To Kill a Mockingbird', 'Harper Lee', false);
list.push(killMockingbird);
var diaryAnnFrank = new Book('The Diary of a Young Girl', 'Anne Frank', false);
list.push(diaryAnnFrank);
var catcherRye = new Book('The Catcher in the Rye', 'J.D. Salinger', false);
list.push(catcherRye);
var greatGatsby = new Book('The Great Gatsby', 'F. Scott Fitzgerald', false);
list. push(greatGatsby);
var romeoJuliet = new Book('Romeo and Juliet', 'William Shakespeare', true);
list.push(romeoJuliet);
var chronicleNarnia = new Book ('The Chronicles of Narnia', 'C.S. Lewis', true);
list.push(chronicleNarnia);
// start producing info
console.log('List of Books:');
for (var i = 0; i < list.length; i++){
  console.log(list[i].title + ' by ' + list[i].author);
}
console.log('');
console.log('Books I have read:');
for (var j = 0; j < list.length; j++) {
  if (list[j].alreadyRead === true){
    console.log('Have read ' + list[j].title + ' by ' + list[j].author);
  }
}
console.log('');
console.log("Books I haven't read yet:");
for (var k = 0; k < list.length; k++) {
  if (list[k].alreadyRead === false){
    console.log('Still need to read ' + list[k].title + ' by ' + list[k].author);
  }
}
console.log('');
console.log('Blended list:');
for (var l = 0; l < list.length; l++) {
  if (list[l].alreadyRead === true){
    console.log('Have read ' + list[l].title + ' by ' + list[l].author);
  }
  else {
    console.log('Still need to read ' + list[l].title + ' by ' + list[l].author);
  }
}
