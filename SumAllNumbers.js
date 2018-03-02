//given two numbers return the sum and all numbers in between
function sumAll(arr) {
    var difference = Math.max(...arr) - Math.min(...arr);
    var lowest = Math.min(...arr);
   
    var array = [];

    for (i = 0; i <= difference; i++){
        array.push(lowest + i);
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
    
    return array.reduce(reducer);
    
}
  
  sumAll([1, 4]); 
