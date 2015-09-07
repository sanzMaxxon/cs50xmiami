/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

Create a function called celsiusToFahrenheit:
- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called fahrenheitToCelsius:
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...
var celsiusToFahrenheit = function(celTemp){
  return celTemp * 9 / 5 + 32;
}
var fahrenheitToCelsius = function(farTemp){
  return (farTemp -32) * 5 / 9;
}
var celt = 33;
var fart = 70;
console.log(celt + "\xB0C is " + celsiusToFahrenheit(celt) + "\xB0F, and " + fart + "\xB0F is " + fahrenheitToCelsius(fart) + "\xB0C");
