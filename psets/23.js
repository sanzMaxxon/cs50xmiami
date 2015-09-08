/*
The Movie Database

It's like IMDB, but much much smaller!

- Create an object to store the following information about your favorite movie:
  title (a string), duration (a number), and stars (an array of strings).

- Create a function to print out the movie information like so:
  "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
*/

// write your solution here...
function Movie(title, duration, stars) {
  this.title = title;
  this.duration = duration;
  this.stars = stars;
}
// create book list
var list = [];
// create books and add them to the list array
var hobbit = new Movie('The Hobbit: The Desolation of Smaug', 161, ['Ian McKellen', 'Martin Freeman', 'Richard Armitage']);
list.push(hobbit);
var lordOfRings = new Movie('The Lord of the Rings: The Return of the King', 201, ['Elijah Wood', 'Viggo Mortensen', 'Ian McKellen']);
list.push(lordOfRings);
var godFather = new Movie('The Godfather', 175, ['Marlon Brando', 'Al Pacino', 'James Caan']);
list.push(godFather);
var darkKnight = new Movie('The Dark Knight', 152, ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart']);
list.push(darkKnight);
var schindlersList = new Movie("Schindler's List", 195, ['Liam Neeson', 'Ralph Fiennes', 'Ben Kingsley']);
list.push(schindlersList);
var starWars4 = new Movie('Star Wars: Episode IV - A New Hope', 121, ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher']);
list.push(starWars4);
var jaws = new Movie('Jaws', 124, ['Roy Scheider', 'Robert Shaw', 'Richard Dreyfuss']);
list. push(jaws);
var goodfellas = new Movie('Goodfellas', 146, ['Robert De Niro', 'Ray Liotta', 'Joe Pesci']);
list.push(goodfellas);
var gladiator = new Movie ('Gladiator', 155, ['Russell Crowe', 'Joaquin Phoenix', 'Connie Nielsen']);
list.push(gladiator);

for (var i = 0; i < list.length; i++) {
  var temp = list[i].title + ' lasts for ' + list[i].duration + ' minutes. Stars:';
  for (var j = 0; j < list[i].stars.length; j++) {
    if (j !== 0){
      temp += ',';
    }
    temp += ' ' + list[i].stars[j];
  }
  temp += '.';
  console.log(temp);
}
