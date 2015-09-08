/*
The Calculator

- Write a function called squareNumber that will take one argument (a number),
  square that number, and return the result.
  It should also log a string like "The result of squaring the number 3 is 9."

- Write a function called halfNumber that will take one argument (a number),
  divide it by 2, and return the result.
  It should also log a string like "Half of 5 is 2.5.".

- Write a function called percentOf that will take two numbers,
  figure out what percent the first number represents of the second number,
  and return the result. It should also log a string like "2 is 50% of 4."

- Write a function called areaOfCircle that will take one argument (the radius),
  calculate the area based on that, and return the result.
  It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
  - Bonus: Round the result so there are only two digits after the decimal.

Write a function that will take one argument (a number) and perform the following operations,
  using the functions you wrote earlier:
  - Take half of the number and store the result.
  - Square the result of #1 and store that result.
  - Calculate the area of a circle with the result of #2 as the radius.
  - Calculate what percentage that area is of the squared result (#3).
*/

// write your solution here...
var squareNumber = function (number){
  var square = number * number;
  console.log("The result of squaring the number " + number + " is " + square + '.');
  return square;
}
var halfNumber = function (number){
  var half = parseFloat(Math.round(number * 10 / 2) / 10).toFixed(1);
  console.log("Half of " + number + " is " + half + '.');
  return half;
}
var percentOf = function(num1, num2){
  var percent = Math.round(num1 / num2 * 100);
  console.log(num1 + ' is ' + percent + '% of ' + num2 + '.');
  return percent;
}
var areaOfCircle = function(radius){
  var area = parseFloat(Math.round(Math.PI * radius * radius * 100) / 100).toFixed(2);
  console.log('The area for a circle with radius ' + radius + ' is ' + area);
  return area;
}
var mashUp = function(number){
  var medio = halfNumber(number);
  var cuadrado = squareNumber(medio);
  var circulo = areaOfCircle(cuadrado);
  var result = percentOf(circulo, cuadrado);
}
mashUp(10);
