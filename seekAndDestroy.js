//remove array elements that match all arguments passed after the array

function destroyer(arr) {
  var finalArray = [];
  var argsArray = [];

  for(i = 1; i < arguments.length; i++){
   argsArray.push(arguments[i]);
  }


  arguments[0].forEach(function(item){
    if (!argsArray.includes(item)){
        finalArray.push(item);
      }
  })


  return finalArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3 ); //should return [1,1]
