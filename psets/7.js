/*
FixStart

Create a function called fixStart.
It should take a single argument, a string, and return a version where all
occurences of its first character have been replaced with '*',
except for the first character itself. You can assume that the string is at least one character long.

For example:

fixStart('babble'): 'ba**le'
*/

function fixStart(s) {
  // write your solution here...
  var newWord = '';
  for(var i = 0; i < s.length; i++) {
    if(i > 0 && s[i] == s[0]) {
      newWord = newWord + ('*');
    }
    else {
      newWord = newWord + s[i];
    }
  }
  console.log(newWord);
}
fixStart('brooklyn bridge babble');
