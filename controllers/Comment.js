'use strict';

var utils = require('../utils/writer.js');
var Comment = require('../service/CommentService');

module.exports.commentDELETE = function commentDELETE (req, res, next) {
  var comment_id = req.swagger.params['comment_id'].value;
  Comment.commentDELETE(comment_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.commentPOST = function commentPOST (req, res, next) {
  var comment = req.swagger.params['comment'].value;
  Comment.commentPOST(comment)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.commentsGET = function commentsGET (req, res, next) {
  var warehouse_id = req.swagger.params['warehouse_id'].value;
  Comment.commentsGET(warehouse_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
