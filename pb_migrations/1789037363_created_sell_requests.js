/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "azzhgtghpque0wc",
    "created": "2026-09-10 10:49:23.770Z",
    "updated": "2026-09-10 10:49:23.770Z",
    "name": "sell_requests",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "etzgnxuu",
        "name": "seller_name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("azzhgtghpque0wc");

  return dao.deleteCollection(collection);
})
