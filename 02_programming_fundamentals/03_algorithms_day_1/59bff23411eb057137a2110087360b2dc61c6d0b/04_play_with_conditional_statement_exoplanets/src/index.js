// Don't modify these lines for tests to work properly.
const star = require("./data/starData");
const planet = require("./data/exoplanetData");

// Your code here:
let canHabitateLife = false;

let star2 = {
    type: "M",
};
let planet2 = {
    earthLike: true,
    water: true,
    mass: 0.35,
    radius: 0.57,
    rotation: "Stable",
};

let massRadius = false;
let starType = false;
let waterType = false;
let planetRotation = false;

if (star2.type === "K" || star2.type === "M") {
    starType = true;
};

if (planet2.water === true) {
    waterType = true;
}

if (planet2.mass < 0.32 && planet2.radius < 0.5 && planet2.radius > 2.5) {
    massRadius = false;
} else if (planet2.mass < 0.5 && planet2.radius <= 1) {
    massRadius = false;
} else {
    massRadius = true;
};

if (planet2.rotation === "Stable") {
    planetRotation = true;
};

if (starType && planet2.earthLike && waterType && massRadius && planetRotation) {
    canHabitateLife = true;
};
// Don't modifiy this line for test to work properly.
module.exports = canHabitateLife;
