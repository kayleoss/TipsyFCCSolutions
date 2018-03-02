//return items that are not present in the other array
function diffArray(arr1, arr2) {
    var newArr = [];
    arr1.forEach(function(item){
        if(!arr2.includes(item)){
            newArr.push(item);
        }
    })
    arr2.forEach(function(item){
        if(!arr1.includes(item)){
            newArr.push(item);
        }
    })
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // should return [4]