/*
The even/odd reporter

- Write a for loop that will iterate from 0 to 20.
- For each iteration, it will check if the current number is even or odd,
  and report that to the screen (e.g. "2 is even").
*/

// write your solution here...
var evenOdd = function(number){
  if(number % 2 == 0)
    return 'even';
  else {
    return 'odd';
  }
}
for (var i = 0; i < 21; i++){
  console.log(i + ' is ' + evenOdd(i));
}
