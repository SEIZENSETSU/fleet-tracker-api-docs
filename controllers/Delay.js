'use strict';

var utils = require('../utils/writer.js');
var Delay = require('../service/DelayService');

module.exports.delayGET = function delayGET (req, res, next) {
  var warehouse_area_id = req.swagger.params['warehouse_area_id'].value;
  Delay.delayGET(warehouse_area_id)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.delayPOST = function delayPOST (req, res, next) {
  var delay = req.swagger.params['delay'].value;
  Delay.delayPOST(delay)
    .then(function (response) {
      utils.writeJson(res, response, 201);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
