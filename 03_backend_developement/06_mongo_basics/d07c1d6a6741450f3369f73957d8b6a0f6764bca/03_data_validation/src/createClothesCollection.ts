import * as mongo from "mongodb";

export const sweaterProperties = {
  bsonType: "string",
  required: ["_id", "name", "color", "category", "size"],
  additionalProperties: false,
  properties: {
    category: {
      enum: ["sweater"],
      description: "should only be enum",
    },
    _id: {
      bsonType: "objectId",
      description: "must be an objectId and is required",
    },
    name: {
      bsonType: "string",
      maxLength: 30,
      description: "must be a string of 30 characters max and is required",
    },
    color: {
      bsonType: "string",
      maxLength: 15,
      description: "must be a string of 15 characters max and is required",
    },
    size: {
      enum: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      description: "can only be a string of one of enum values",
    },
  },
};

export const shoesProperties = {
  bsonType: "int",
  required: ["_id", "name", "color", "category", "size"],
  additionalProperties: false,
  properties: {
    category: {
      enum: ["shoes"],
      description: "should only be enum",
    },
    _id: {
      bsonType: "objectId",
      description: "must be an objectId and is required",
    },
    name: {
      bsonType: "string",
      maxLength: 30,
      description: "must be a string of 30 characters max and is required",
    },
    color: {
      bsonType: "string",
      maxLength: 15,
      description: "must be a string of 15 characters max and is required",
    },
    size: {
      bsonType: "int",
      minimum: 30,
      maximum: 50,
      description: "must be an integer in [30, 50]",
    },
    material: {
      enum: ["leather", "textile", "synthetic"],
      description: "can only be one of enum values",
    },
  },
};

export const pantsProperties = {
  bsonType: "object",
  required: ["_id", "name", "color", "category", "size"],
  additionalProperties: false,
  properties: {
    category: {
      enum: ["pants"],
      description: "should only be enum",
    },
    _id: {
      bsonType: "objectId",
      description: "must be an objectId and is required",
    },
    name: {
      bsonType: "string",
      maxLength: 30,
      description: "must be a string of 30 characters max and is required",
    },
    color: {
      bsonType: "string",
      maxLength: 15,
      description: "must be a string of 15 characters max and is required",
    },
    size: {
      bsonType: "object",
      additionalProperties: false,
      required: ["width"],
      properties: {
        width: {
          bsonType: "int",
          minimum: 32,
          maximum: 46,
          description: "must be an integer in [32, 46] and is required",
        },
        cut: {
          enum: ["slim", "skinny", "regular", "straight"],
          description: "can only be one of enum values",
        },
      },
    },
  },
};

export const clothesValidator = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["category"],
      properties: {
        oneOf: ["sweaterProperties", "shoesProperties", "pantsProperties"],
      },
    },
  },
};

export function createClothesCollection(
  db: mongo.Db
): Promise<mongo.Collection> {
  return db.createCollection("clothes", clothesValidator);
}
