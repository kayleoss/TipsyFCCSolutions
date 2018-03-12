//Perform a search and replace on the sentence using the arguments provided and return the new sentence.
function myReplace(str, before, after) {

    var arr = after.split('');
    var newStr = '';

    if(before.split('')[0] === before.split('')[0].toUpperCase()){
        arr[0] = arr[0].toUpperCase();  
        var newAfter = arr.join('');
        newStr = str.replace(before, newAfter);
    }else{
        newStr = str.replace(before, after);
    }

    return newStr;
}
  
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") 
//should return "He is Sitting on the couch"
  