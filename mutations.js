//return true if string in first element of array contains all letters of the string in second element of array
function mutation(arr) {

  var firstArray = arr[0].toLowerCase().split('');
  var secondArray = arr[1].toLowerCase().split('');
  var matchedLetters= [];


  for(i = 0; i <= firstArray.length; i++){
    if (firstArray.includes(secondArray[i])){
      matchedLetters.push(secondArray[i]);
    }
  }

  if (matchedLetters.join('') === arr[1].toLowerCase()){
    return true;
  }

  return false;

}

mutation(["Mary", "Aarmy"]); //should return true
