/*
Your top choices

Create an array to hold your top choices (colors, presidents, whatever).
- For each choice, log to the screen a string like: "My #1 choice is blue."

- Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
  picking the right suffix for the number based on what it is.
*/

// write your solution here...
var myArray = {
  'color': 'blue',
  'president': 'Bill Clinton',
  'city': 'San Francisco',
  'view': 'Lake Tahoe on a calm, clear day',
  'whatever': 'Atlantic Ocean'
}
for (var key in myArray){
  console.log('My #1 choice of ' + key + ' is ' + myArray[key] + '!');
}
