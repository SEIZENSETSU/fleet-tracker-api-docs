'use strict';

/**
 * ユーザー削除API
 * ユーザーを削除するAPIです
 *
 * uid String ユーザーID
 * no response value expected for this operation
 **/
exports.userDELETE = function(uid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

/**
 * ユーザー情報取得API
 * ユーザーIDからユーザー情報を取得するAPIです
 *
 * uid String ユーザーID
 * returns UserResponse
 **/
exports.userGET = function(uid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "uid": "user1",
      "user_name": "ユーザー1"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

/**
 * ユーザー登録API
 * ユーザーを登録するAPIです
 *
 * user User ユーザー情報
 * returns User
 **/
exports.userPOST = function(user) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "uid": "user1",
      "user_name": "ユーザー1",
      "fcm_token_id": "fcm_token_id"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

/**
 * ユーザー更新API
 * ユーザーを更新するAPIです
 * 
 * uid String ユーザーID
 * user User ユーザー情報
 * returns User
 **/
exports.userPUT = function(uid, user) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "uid": "user1",
      "user_name": "ユーザー1",
      "fcm_token_id": "fcm_token_id"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}
