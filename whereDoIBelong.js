//return lowest index at where the second argument should be inserted

function getIndexToIns(arr, num) {
  arr =  arr.sort();
  var indexItem;

  for(i = 0; i <= arr.length; i++){
    if(num > arr[i] && num <= arr[i+1]){
      indexItem = arr[i];
    }else if(num > arr[i] && !arr[i+1]){
      indexItem = arr[i];
    }
  }
  return arr.indexOf(indexItem) + 1;
}

getIndexToIns([2, 5, 10], 15); //should return 3
