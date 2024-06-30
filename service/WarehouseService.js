'use strict';

/**
 * ローカルエリアごとの倉庫情報一括取得API
 * ローカルエリアおよび倉庫エリアでグループ化された倉庫の一覧情報を取得します
 *
 * returns List
 **/
exports.areasWarehousesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [
      {
        "local_area_id": 1,
        "local_area_name": "関東",
        "warehouse_areas": [
          {
            "warehouse_area_id": 1,
            "warehouse_area_name": "東京",
            "warehouse_area_latitude": 35.689,
            "warehouse_area_longitude": 139.692,
            "warehouses": [
              {
                "warehouse_id": 1,
                "warehouse_name": "ハルフーズ東京工場",
                "warehouse_latitude": 35.689,
                "warehouse_longitude": 139.692,
              }
            ]
          }
        ]
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
 * 倉庫情報取得API
 * 倉庫エリアIDまたは倉庫IDから、倉庫情報を取得するAPIです
 *
 * warehouse_id Integer 倉庫ID
 * returns Warehouse
 **/
exports.warehouseGET = function(warehouse_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "warehouse_id": 1,
      "warehouse_area_id": 11,
      "warehouse_name": "ハルフーズ東京工場",
      "warehouse_latitude": 35.689,
      "warehouse_longitude": 139.692
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

/**
 * 倉庫一覧情報取得API
 * 倉庫の一覧情報を取得します
 *
 * warehouse_area_id Integer 倉庫エリアID (optional)
 * returns List
 **/
exports.warehousesGET = function(warehouse_area_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [
      {
        "warehouse_id": 1,
        "warehouse_area_id": 11,
        "warehouse_name": "ハルフーズ東京工場",
        "warehouse_latitude": 35.689,
        "warehouse_longitude": 139.692
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
 * 倉庫検索API
 * 倉庫名から倉庫情報を取得するAPIです。倉庫エリア内にいる場合は、該当エリア内の倉庫情報を近い順でソートして返し、倉庫エリア外にいる場合は近場の倉庫エリア情報を返します。お気に入り登録した倉庫IDを指定することで、倉庫エリア内外問わず、倉庫情報を取得できます。
 *
 * user_latitude Double ユーザーの緯度
 * user_longitude Double ユーザーの経度
 * favorite_warehouse_ids Integer お気に入りの倉庫ID (optional)
 * returns SearchWarehousesResult
 **/
exports.warehousesSearchGET = function(user_latitude, user_longitude, favorite_warehouse_ids) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [
      {
        "is_invading": true,
        "warehouses": [
          {
            "warehouse_id": 1,
            "warehouse_area_id": 11,
            "warehouse_name": "ハルフーズ東京工場",
            "average_delay_state": "normal",
            "delay_time_detail": [
                {"delay_state": "normal", "answer_count": 3},
                {"delay_state": "pause", "answer_count": 0},
                {"delay_state": "halfHour", "answer_count": 0},
                {"delay_state": "anHour", "answer_count": 0},
                {"delay_state": "impossible", "answer_count": 0}
            ],
            "distance": 10.00
          },
          {
            "warehouse_id": 2,
            "warehouse_area_id": 11,
            "warehouse_name": "ハルフーズ東京工場2",
            "average_delay_state": "normal",
            "delay_time_detail": [
                {"delay_state": "normal", "answer_count": 3},
                {"delay_state": "pause", "answer_count": 0},
                {"delay_state": "halfHour", "answer_count": 0},
                {"delay_state": "anHour", "answer_count": 0},
                {"delay_state": "impossible", "answer_count": 0}
            ],
            "distance": 20.00
          }
        ],
        "favorite_warehouses": [
          {
            "warehouse_id": 5,
            "warehouse_area_id": 12,
            "warehouse_name": "ハルフーズ大阪工場",
            "average_delay_state": "normal",
            "delay_time_detail": [
                {"delay_state": "normal", "answer_count": 3},
                {"delay_state": "pause", "answer_count": 0},
                {"delay_state": "halfHour", "answer_count": 0},
                {"delay_state": "anHour", "answer_count": 0},
                {"delay_state": "impossible", "answer_count": 0}
            ],
            "distance": 10.00
          }
        ],
        "warehouse_areas": [
          {
            "warehouse_area_id": 1,
            "warehouse_area_name": "東京",
            "average_delay_state": "normal",
            "distance": 10.00
          }
        ]
      },
      {
        "is_invading": true,
        "warehouses": [],
        "favorite_warehouses": [],
        "warehouse_areas": [
          {
            "warehouse_area_id": 1,
            "warehouse_area_name": "東京",
            "average_delay_state": "normal",
            "distance": 10.00
          }
        ]
      },
      {
        "is_invading": false,
        "warehouses": [],
        "favorite_warehouses": [
          {
            "warehouse_id": 5,
            "warehouse_area_id": 12,
            "warehouse_name": "ハルフーズ大阪工場",
            "average_delay_state": "normal",
            "delay_time_detail": [
                {"delay_state": "normal", "answer_count": 3},
                {"delay_state": "pause", "answer_count": 0},
                {"delay_state": "halfHour", "answer_count": 0},
                {"delay_state": "anHour", "answer_count": 0},
                {"delay_state": "impossible", "answer_count": 0}
            ],
            "distance": 10.00
          }
        ],
        "warehouse_areas": [
          {
            "warehouse_area_id": 1,
            "warehouse_area_name": "東京",
            "average_delay_state": "normal",
            "distance": 10.00
          }
        ]
      }
    ];

    if (Object.keys(examples).length > 0) {
      resolve(examples['application/json'][0]); // Replace index to 0, 1, or 2 as per the required example
    } else {
      resolve();
    }
  });
}
