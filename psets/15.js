/*
What number's bigger?

Write a function named greaterNum that:
- takes 2 arguments, both numbers.
- returns whichever number is the greater (higher) number.

Call that function 2 times with different number pairs,
and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
*/

// write your solution here...
var greaterNum = function(num1, num2){
  if (num1 > num2){
    return num1;
  }
  else {
    return num2;
  }
}
var x = 2;
var y = 3;
console.log("The greater number of " + x + " and " + y + " is " + greaterNum(x, y) + ".");
