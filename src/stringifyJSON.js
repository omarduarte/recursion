// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var result = '';

  if (Array.isArray(obj)) {
    result = '[';

    result += obj.reduce(function(stringified, current) {      
      return stringified + stringifyJSON(current) + ',';
    }, '');

    // Remove trailing comma and add ending bracket;
    result = result.replace(/(,$)/, '') + ']';

  } else if (obj instanceof Object) {
  	result = '{';
  	
    for (var key in obj) {
      if (typeof obj[key] !== "undefined" && typeof obj[key] !== "function") {
        result+= '"' + key + '"' + ':';
        result+= stringifyJSON(obj[key]) + ',';  
      }
  	}

    // Remove trailing comma nad add ending curly brace
    result = result.replace(/(,$)/, '') + '}';

  } else if (typeof obj === 'string') {
  	result = '"' + obj + '"';

  } 
  else {
  	result = obj + '';
  }

  return result;

};
