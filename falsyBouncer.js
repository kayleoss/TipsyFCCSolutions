//remove all falsy items in the array
function bouncer(arr) {
  return arr.filter(Boolean);
}

bouncer([1, null, NaN, 2, undefined]); //should return [1, 2]
