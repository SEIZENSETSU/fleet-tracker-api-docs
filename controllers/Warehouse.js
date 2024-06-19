'use strict';

var utils = require('../utils/writer.js');
var Warehouse = require('../service/WarehouseService');

module.exports.areasWarehousesGET = function areasWarehousesGET (req, res, next) {
  Warehouse.areasWarehousesGET()
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.warehouseGET = function warehouseGET (req, res, next) {
  var warehouse_id = req.swagger.params['warehouse_id'].value;
  Warehouse.warehouseGET(warehouse_id)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.warehousesGET = function warehousesGET (req, res, next) {
  var warehouse_area_id = req.swagger.params['warehouse_area_id'].value;
  Warehouse.warehousesGET(warehouse_area_id)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.warehousesSearchGET = function warehousesSearchGET (req, res, next) {
  var user_latitude = req.swagger.params['user_latitude'].value;
  var user_longitude = req.swagger.params['user_longitude'].value;
  var favorite_warehouse_ids = req.swagger.params['favorite_warehouse_ids'].value;
  Warehouse.warehousesSearchGET(user_latitude,user_longitude,favorite_warehouse_ids)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
