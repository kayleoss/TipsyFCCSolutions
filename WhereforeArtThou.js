//Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument)

function whatIsInAName(collection, source) {
  
    var arr = [];
    var values = [];

    Object.values(source).forEach(function(v){
        values.push(v);
    });

   
    collection.forEach(function(item){
        if(values.length == 2){
            if (item.hasOwnProperty(Object.keys(source)[1])  && Object.values(item).includes(values[0]) && Object.values(item).includes(values[1])){
                arr.push(item);
            }
        }else if (values.length == 1){
            if (Object.values(item).includes(values[0])){
                arr.push(item);
            }
        }  
    });

    return arr;
}
  
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });
  