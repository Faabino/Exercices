import * as mongo from "mongodb";

export const moviesValidator = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      additionalProperties: false,
      required: ["_id", "title", "genre", "year"],
      properties: {
        _id: {
          bsonType: "objectId",
          description: "must be an objectId and is required",
        },
        title: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        genre: {
          enum: ["action", "comedy", "dramatic", "horror", "romance"],
          description: "can only be one of the enum values and is required",
        },
        year: {
          bsonType: "int",
          minimum: 1950,
          maximum: 2020,
          description:
            "must be an integer between 1950 and 2020 and is required",
        },
        ratings: {
          bsonType: "object",
          additionalProperties: false,
          required: ["pressRating", "spectatorsRating"],
          properties: {
            pressRating: {
              bsonType: "int",
              minimum: 1,
              maximum: 5,
              description:
                "must be an integer between 1 and 5 if the field exists",
            },
            spectatorsRating: {
              bsonType: "int",
              minimum: 1,
              maximum: 5,
              description:
                "must be an integer between 1 and 5 if the field exists",
            },
          },
        },
      },
    },
  },
};

export function createMoviesCollection(
  db: mongo.Db
): Promise<mongo.Collection> {
  return db.createCollection("movies", moviesValidator);
}
