//return remaining elements of an array after chopping off howMany elements from the head
function slasher(arr, howMany) {
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2); //should return 3
