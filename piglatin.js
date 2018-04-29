//Translate any word to pig latin
function translatePigLatin(str) {
  var newword = '';
  var str_array = str.split('');
  var firstVowel = [];
  var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

  if(vowels.indexOf(str_array[0]) !== -1) {
    str_array.push('way');
    var newstr_array = str_array.join('');
    newword = newstr_array;

    return newword;
  } else {

    str_array.forEach(function(i) {
      if (vowels.indexOf(i) !== -1) {
        firstVowel.push(i);
      }
    });

    var index = str_array.indexOf(firstVowel[0]);
    var newstr_array1 = str_array.slice(index);

    var slicedOut = str_array.slice(0, index);
    var z = slicedOut.join('');

    newword = newstr_array1.join('') + z + 'ay';

    return newword;
  }

}

translatePigLatin("paragraphs");
