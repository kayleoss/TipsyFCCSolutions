//find the missing letter in the passed letter range and return it, if all letters are present return undefined
function fearNotLetter(str) {
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var wrong = [];

  for (i = 0; i < str.length -1; i++) {
    var x = i+1;
    if (str.charCodeAt(x) !== str.charCodeAt(i) + 1) {
      wrong.push(str.charCodeAt(x));
    }
  }

  if (wrong.length == 0) {
    return undefined;
  } else {
    return String.fromCharCode(wrong - 1);
  }
}

fearNotLetter("abce");
