/*
Multiplication Tables

Write a for loop that will iterate from 0 to 10.
- For each iteration of the for loop,
  it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

- Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
*/

// write your solution here...
var lineM = '';
for (var i = 1; i < 11; i++){
  for (var j = 1; j < 11; j++){
    if (j == 1){
      if (j * i < 10)
        lineM += ' ' + (j * i);
      else
        lineM += (j * i);
    }
    else {
      if (j * i < 10)
        lineM += '   ' + (j * i);
      else if (j * i < 100)
        lineM += '  ' + (j * i);
      else
        lineM += ' ' + (j * i);
    }
  };
  console.log(lineM);
  lineM = '';
};
