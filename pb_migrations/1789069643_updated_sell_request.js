/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("chqaqrh4rxq6ov9")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gtg4y05e",
    "name": "body_type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "SUV",
        "Hatchback",
        "Sedan",
        "Bakkie",
        "Coupe"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("chqaqrh4rxq6ov9")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gtg4y05e",
    "name": "body_type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "SUV",
        "Hatchback",
        "Sedan",
        "Bakkie"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
