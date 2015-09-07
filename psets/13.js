/*
The Geometrizer

Create 2 functions that calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm

Create a function called calcCircumfrence:
- Pass the radius to the function.
- Calculate the circumference based on the radius, and output "The circumference is NN".

Create a function called calcArea:
- Pass the radius to the function.
- Calculate the area based on the radius, and output "The area is NN".
*/

// write your solution here...
var calcCircumfrence = function(radius){
  return 2 * Math.PI * radius;
}
var calcArea = function(radius){
  return Math.PI * radius * radius;
}
console.log("The circumference is " + calcCircumfrence(1) + ", and the area is " + calcArea(1) + ".");
