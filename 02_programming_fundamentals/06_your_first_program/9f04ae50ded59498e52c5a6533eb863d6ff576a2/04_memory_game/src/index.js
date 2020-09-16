const readline = require("readline");
const clear = require("./clear");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const symbols = {
  tree: "🌳",
  ghost: "👻",
  tooth: "🦷",
  fish: "🐟",
  imp: "😈",
  robot: "🤖",
  invader: "👾",
  apple: "🍏",
  car: "🚗",
  cold: "🥶",
  peach: "🍑",
  boom: "💥",
  bomb: "💣",
  boot: "👢",
  pumkin: "🎃",
  fox: "🦊",
  rabbit: "🐇",
  kiss: "💋",
  salad: "🥗",
  clown: "🤡",
};

const board = ["1:🐰", "2:🎃", "3:🐰", "4:🎃"];

function shuffle(array) {
  array.sort(function (a, b) {
    return 0.5 - Math.random();
  });
}

const memoryGame = (text) => {};

shuffle(board);
console.log(board);
