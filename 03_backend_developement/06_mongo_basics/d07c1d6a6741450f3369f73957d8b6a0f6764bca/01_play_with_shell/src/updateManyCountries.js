/* global db */

db.worldAtlas.updateMany({ continent: "Europe" }, { $set: { continent: "EU" } })