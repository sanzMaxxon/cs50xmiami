/*
Your top choices

Create an array to hold your top choices (colors, presidents, whatever).
- For each choice, log to the screen a string like: "My #1 choice is blue."

- Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
  picking the right suffix for the number based on what it is.
*/

// write your solution here...
var myArray = {
  'color': ['blue', 'aqua', 'red', 'orange', 'purple'],
  'president': ['Bill Clinton', 'Abraham Lincoln', 'Ronald Reagan', 'Franklin D Rosevelt'],
  'city': ['San Francisco', 'Brussels', 'LA', 'London'],
  'view': ['Lake Tahoe on a calm, clear day', 'a sunset on the west coast of PR', 'sunrise on the cliffs of Malibu'],
  'whatever': ['Atlantic Ocean', 'Niagara Falls', 'Iguazu Falls', 'phosphorescent bay in Lajas PR', 'Mount Everest']
}
var suffixer = function(number){
  switch (number) {
    case 1:
      return '1st';
      break;
    case 2:
      return '2nd';
      break;
    case 3:
      return '3rd';
      break;
    default:
      return number + 'th';
  }
}
for (var key in myArray){
  var i = 1;
  for (var item in myArray[key]){
    console.log('My ' + suffixer(i) + ' choice of ' + key + ' is ' + myArray[key][item] + '!');
    i++
  }
  console.log(' ');
}
