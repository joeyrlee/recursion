// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
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

var stringifyJSON = function(obj) {
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
    return undefined;
  } else if(typeof obj === 'function'){
  	return undefined;
  }

  var objCopy = copyObject(obj);
  
};
