/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("chqaqrh4rxq6ov9")

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bcfejqnc",
    "name": "fuel_type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Petrol",
        "Diesel",
        "Hybrid",
        "Electric"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2rkdlrft",
    "name": "transmission",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Manual",
        "Automatic"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bvev0bdb",
    "name": "is_financed",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Yes",
        "No"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ufvft9bf",
    "name": "service_history",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Full Service History",
        "Partial Service History",
        "None"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aw61hzsc",
    "name": "mileage",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n2mmm0uo",
    "name": "desired_price",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vuk963fb",
    "name": "condition_notes",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "loosa4gt",
    "name": "condition_rating",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Excellent",
        "Good",
        "Average",
        "Poor"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "efo2rlhn",
    "name": "location",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "op8pnaso",
    "name": "registered_owner",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Yes",
        "No",
        "Papers missing"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s7mf5ms9",
    "name": "extras",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yvxeevz7",
    "name": "images",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/gif",
        "image/webp"
      ],
      "thumbs": [],
      "maxSelect": 8,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("chqaqrh4rxq6ov9")

  // remove
  collection.schema.removeField("gtg4y05e")

  // remove
  collection.schema.removeField("bcfejqnc")

  // remove
  collection.schema.removeField("2rkdlrft")

  // remove
  collection.schema.removeField("bvev0bdb")

  // remove
  collection.schema.removeField("ufvft9bf")

  // remove
  collection.schema.removeField("aw61hzsc")

  // remove
  collection.schema.removeField("n2mmm0uo")

  // remove
  collection.schema.removeField("vuk963fb")

  // remove
  collection.schema.removeField("loosa4gt")

  // remove
  collection.schema.removeField("efo2rlhn")

  // remove
  collection.schema.removeField("op8pnaso")

  // remove
  collection.schema.removeField("s7mf5ms9")

  // remove
  collection.schema.removeField("yvxeevz7")

  return dao.saveCollection(collection)
})
