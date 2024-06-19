'use strict';

/**
 * コメント削除API
 * 倉庫IDとコメントIDからコメントを削除するAPIです
 *
 * comment_id Integer コメントID
 * no response value expected for this operation
 **/
exports.commentDELETE = function(comment_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * コメント登録API
 * 倉庫IDにコメントを登録するAPIです
 *
 * comment CommentRequest コメント情報
 * returns CommentRequest
 **/
exports.commentPOST = function(comment) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "uid": "user1",
      "contents": "テストコメント",
      "warehouse_id": 1
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * コメント取得API
 * 倉庫IDからコメントを一括取得するAPIです
 *
 * warehouse_id Integer 倉庫ID
 * returns List
 **/
exports.commentsGET = function(warehouse_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [
      {
        "uid": "user1",
        "contents": "テストコメント",
        "created_at": "2022-07-02 00:00:00",
        "comment_id": 1,
        "warehouse_id": 1
      }
    ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}
