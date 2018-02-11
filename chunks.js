//split first argument (arr) into arrays the size of second argument (size)

function chunkArrayInGroups(arr, size) {

    var totalChunks = arr.length/size;
    var fullArray = [];
    var chunks = [];

    do{
      chunks = arr.slice(0, size);
      arr = arr.slice(size);
      fullArray.push(chunks);
      chunks = [];
    }while(fullArray.length < totalChunks);

return fullArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); // should return [['a','b'],['c','d']]
