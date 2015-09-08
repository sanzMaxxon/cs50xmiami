/*
The Recipe Card

Never forget another recipe!

- Create an object to hold information on your favorite recipe. It should have
  properties for title (a string), servings (a number),
  and ingredients (an array of strings).

- On separate lines (one console.log statement for each), log the recipe
  information so it looks like:
    Mole
    Serves: 2
    Ingredients:
    cinnamon
    cumin
    cocoa
*/

// write your solution here...
var recipe = {
  'title': 'Mole',
  'Serves:': 2,
  'Ingredients:': ['cinnamon', 'cumin', 'cocoa']
}
for (var key in recipe) {
  if (key != 'title'){
    console.log(key);
  }
  if (recipe[key].constructor === Array){
    for (var item in recipe[key]){
      console.log(recipe[key][item]);
    }
  }
  else{
    console.log(recipe[key]);
  }
}
