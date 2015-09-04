/*

MixUp

Create a function called mixUp. It should take in two strings,
and return the concatenation of the two strings (separated by a space) slicing out
and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.

For example:
  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/

function mixUp(a, b) {
  // write your solution here...
  var pre1 = a.substring(0, 2);
  var post1 = a.substring(2);
  var pre2 = b.substring(0, 2);
  var post2 = b.substring(2);
  a = pre2 + post1;
  b = pre1 + post2;
  console.log(a + ' ' + b);
}
mixUp ('ferry man', 'benton stop');
