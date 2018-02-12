function rot13(str) {
  var charCodes = [];
  var decoded = [];

  var strSplit = str.split('');

  strSplit.forEach(function(item){
    if (item !== ' ' && item !== '!' && item !== '.' && item !== '?'){
      charCodes.push((item.charCodeAt() - 65 + 13) % 26 + 65);
    }else{
      charCodes.push(item);
    }
  });


  charCodes.forEach(function(code){
    if (code !== ' ' && code !== '!' && code !== '.' && code !== '?'){
        decoded.push(String.fromCharCode(code));
    }else{
      decoded.push(code);
    }
  });

  return decoded.join('');

}

rot13("SERR CVMMN!");
