'use strict';

/**
 * 遅延情報取得API
 * 倉庫IDから遅延情報を取得するAPIです
 *
 * warehouse_area_id Integer 倉庫エリアID
 * returns List
 **/
exports.delayGET = function(warehouse_area_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [
      {
        "delay_information_id": 1,
        "warehouse_id": 1,
        "warehouse_name": "ハルフーズ東京工場",
        "delay_time_detail": [
          {"delay_state": "normal", "answer_count": 3},
          {"delay_state": "pause", "answer_count": 1}
        ],
        "created_at": "2022-07-02 00:00:00",
        "updated_at": "2022-07-02 00:00:00"
      }
    ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

/**
 * 遅延情報登録API
 * 倉庫IDに遅延情報を登録するAPIです。 delay_stateにはnormal, pause, halfHour, anHour, impossibleのいずれかを指定してください。
 *
 * delay DelayInformationRequest 遅延情報
 * returns DelayInformationRequest
 **/
exports.delayPOST = function(delay) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "warehouse_id": 1,
      "delay_state": "normal"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}
