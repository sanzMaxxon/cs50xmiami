/*
The Pluralizer

Write a function named pluralize that:
- takes 2 arguments, a noun and a number.
- returns the number and pluralized form, like "5 cats" or "1 dog".

Call that function for a few different scores and log the result to make sure it works.
- Bonus: Make it handle a few collective nouns like "sheep" and "geese".
*/

// write your solution here...
var pluralize = function (noun, number){
  switch (noun) {
    case 'goose':
      if (number > 1)
        return number + ' geese';
      else
        return number + ' ' + noun;
      break;
    case 'woman':
      if (number > 1)
        return number + ' women';
      else
        return number + ' ' + noun;
      break;
    case 'man':
      if (number > 1)
        return number + ' men';
      else
        return number + ' ' + noun;
      break;
    case 'person':
      if (number > 1)
        return number + ' people';
      else
        return number + ' ' + noun;
      break;
    case 'mouse':
    if (number > 1)
      return number + ' mice';
    else
      return number + ' ' + noun;
      break;
    case 'witch':
    case 'box':
    case 'gas':
    case 'bus':
    case 'kiss':
    case 'Jones':
    if (number > 1)
      return number + ' ' + noun + 'es';
    else
      return number + ' ' + noun;
      break;
    case 'child':
    if (number > 1)
      return number + ' children';
    else
      return number + ' ' + noun;
      break;
    case 'nucleus':
    case 'syllabus':
    case 'focus':
    case 'fungus':
    case 'cactus':
    if (number > 1)
      return number + ' ' + noun.substring(0, (noun.length - 2)) + 'i';
    else
      return number + ' ' + noun;
    break;

    default:
    if (number > 1)
      return number + ' ' + noun + 's';
    else
      return number + ' ' + noun;
  }
}
console.log(pluralize('cactus', 7));
