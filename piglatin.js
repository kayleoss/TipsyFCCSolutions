//Translate any word to pig latin
function translatePigLatin(str) {
  var newword = '';
  var str_array = str.split('');
  var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

  if(vowels.indexOf(str_array[0]) !== -1) {
    var newstr_array = str_array.join('') + 'way';
    newword = newstr_array;

    return newword;
  } else {
    var firstVowel = [];

    str_array.forEach(function(i) {
      if (vowels.indexOf(i) !== -1) {
        firstVowel.push(i);
      }
    });

    var index = str_array.indexOf(firstVowel[0]);
    var newstr_array1 = str_array.slice(index);
    var slicedOut = str_array.slice(0, index);

    newword = newstr_array1.join('') + slicedOut.join('') + 'ay';

    return newword;
  }

}

translatePigLatin("glove");
