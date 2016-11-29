// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//copies arrays/objects so that originals aren't mutated in recursive stringification
var copyObject = function(obj){
  if(Array.isArray(obj)){
    return Array.prototype.slice.call(obj, 0);
  } else if(typeof obj === 'object'){
    var objCopy = {};
    for(var key in obj){
      objCopy[key] = obj[key];
    }
    return objCopy;
  }
}

var stringifyJSON = function(obj){
  //Covers everything but arrays/objects
  if(typeof obj === 'boolean'){
    return `${obj}`;
  //strict equals evaluation since typeof null doesn't work
  } else if(obj === null){
    return `${obj}`;
  } else if(typeof obj === 'number'){
    return `${obj}`;
  } else if(typeof obj === 'string'){
    return '"' + obj + '"';
  } else if(typeof obj === 'undefined'){
    return '';
  } else if(typeof obj === 'function'){
    return '';
  }

  var stringifyArray = function(arr){
    if(arr.length === 0){
      return '';
    } else {
      return `${stringifyJSON(arr.shift())},` + stringifyArray(arr);
    }
  }

  var copy = copyObject(obj);
  if(Array.isArray(copy)){
    return '[' + stringifyArray(copy).slice(0, -1) + ']';
  } else {
    var result = (function stringifyObj(){
      if(Object.keys(copy).length === 0){
        return '';
      } else {
        var key = Object.keys(copy)[0];
        var value = Object.values(copy)[0];
        delete copy[key];
        if (key === 'functions' || key === 'undefined'){
          return '' + stringifyObj();
        } else {
          return `${stringifyJSON(key)}:${stringifyJSON(value)},` + stringifyObj();
        }
      }
    }());
    return '{' + result.slice(0, -1) + '}';
  }
}