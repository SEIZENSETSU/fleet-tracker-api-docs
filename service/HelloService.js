'use strict';

/**
 * Hello API
 * Hello API
 *
 * returns String
 **/
exports.helloGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "Hello, World!";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}
