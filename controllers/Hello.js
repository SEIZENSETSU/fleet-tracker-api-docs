'use strict';

var utils = require('../utils/writer.js');
var Hello = require('../service/HelloService');

module.exports.helloGET = function helloGET (req, res, next) {
  Hello.helloGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
