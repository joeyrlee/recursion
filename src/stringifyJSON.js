// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // stringify null
  if (obj === null) {
    return `${null}`;
  //stringify strings
  } else if (typeof obj === 'string') {
    return `"${obj}"`;
  //stringify numbers, booleans, undefined, and functions
  } else if (typeof obj === 'number' || typeof obj === 'boolean' || typeof obj === undefined || typeof obj === 'function') {
    return `${obj}`;
  //stringify arrays
  } else if (Array.isArray(obj)) {
    var stringifiedArr = '';
    _.each(obj, element => {
      //concatenate the stringified array contents into a comma-delimited string
      stringifiedArr += stringifyJSON(element) + ',';
    })
    //return the stringified array - sans the trailing comma - in stringified brackets
    return `[${stringifiedArr.slice(0, -1)}]`;

  //stringify objects
  } else if (typeof obj === 'object') {
    var stringifiedObj = '';
    _.each(obj, (value, key) => {
      //only if key and value are truthy (or the value is false or null) and the value is not a function
      if ((!!key && !!value || (value === false || value === null)) && typeof value !== 'function') {
        //concatenate the stringified object key-value pairs into a comma-delimited string
        stringifiedObj += `"${key}":${stringifyJSON(value)}` + ',';
      }
    })
    //return the stringified object - sans the trailing comma - in stringified curly brackets
    return `{${stringifiedObj.slice(0, -1)}}`;
  }
};


/* Solution Code */
// var isObject = function(object) {
//   return Object.prototype.toString.call(object) === '[object Object]';
// };

// var stringifyArray = function(object) {
//   return '[' + _(object).map(function(item, index) {
//     return stringifyJSON(item);
//   }).join(',') + ']';
// };

// var stringifyObject = function(object) {
//   var strings = [];

//   _.each(object, function(item, key) {
//     if (_.isUndefined(item) || _.isFunction(item)) {
//       return;
//     }

//     strings.push(stringifyJSON(key) + ':' + stringifyJSON(item));
//   });

//   return '{' + strings.join(',') + '}';
// };

// var stringifyJSON = function(obj) {
//   // your code goes here

//   if (Array.isArray(obj)) {
//     return stringifyArray(obj);
//   } else if (isObject(obj)) {
//     return stringifyObject(obj);
//   } else if (typeof obj === 'string') {
//     return '"' + obj.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
//   } else {
//     return obj + '';
//   }
// };
