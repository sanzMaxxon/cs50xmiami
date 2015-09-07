/*

Not Bad

Create a function called notBad that takes a single argument, a string.
It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'

*/

function notBad(sentence) {
  // write your solution here...
  if (sentence.indexOf('not') >= 0 && sentence.indexOf('bad') > sentence.indexOf('not')){
    var newSentence = '';
    var insert = 'good'
    var inserted = 0;
    for (var i = 0, n = sentence.length; i < n; i++){
      if (i >= sentence.indexOf('not') && i <= sentence.indexOf('bad') + 3 && inserted == 0){
        for (var k = 0, o = insert.length; k < o; k++){
          newSentence += insert[k];
        }
        i = sentence.indexOf('bad') + 2;
        inserted++;
      }
      else if (i < sentence.indexOf('not') || i > sentence.indexOf('bad') + 2){
        newSentence += sentence[i];
      }
    }
    return newSentence;
  }
  else {
    return sentence;
  }
}
console.log(notBad('This dinner is bad but not terrible!'));
