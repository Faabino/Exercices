const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const clear = () => console.log("\x1B[2J\x1B[0f");

clear();
console.log("---Lets get ready to rumble!!!!!---\n\n");

const moves = {
  rock: [
    "    ________        ",
    "---'   _ ,  |       ",
    "      (__(__)       ",
    "      (_____)       ",
    "      (____)        ",
    "---.__(___)         ",
  ],

  paper: [
    "      _______       ",
    "----'    ____)____  ",
    "            _______)",
    "            _______)",
    "           _______) ",
    "----.__________)    ",
  ],
  scissors: [
    "    ____           ",
    "---'    |________  ",
    "     (__)________) ",
    "        _________) ",
    "      (____)       ",
    "---.__(___)        ",
  ],
};

const pierre = Object.keys(moves)[0];
const papier = Object.keys(moves)[1];
const ciseaux = Object.keys(moves)[2];

//Human vs AI
let playerScore = 0;
let aiScore = 0;

//Human vs Human
let player1 = 0;
let player2 = 0;

const reverseLine = (line) => {
  const changedLine = line
    .split("")
    .map((char) => {
      if (char === "(") {
        return ")";
      } else if (char === ")") {
        return "(";
      }
      return char;
    })
    .join("");
  return changedLine.split("").reverse().join("");
};

const typeOfGame = () => {
  console.log(`1 - Human vs AI\n2 - Human vs Human\n`);
  reader.question("Choose your opponent\n", (choice) => {
    if (isNaN(choice) || choice > 2 || choice < 1) {
      console.log(`type "1" or "2"`);
      typeOfGame();
    } else if (choice == 1) {
      round();
    } else if (choice == 2) {
      playerVsPlayer();
    }
  })
}

typeOfGame();


//Score Human vs AI

const restart = () => {
  reader.question(`Replay? Yes: "y" or No: "n"\n`, (answer) => {
    if (answer !== answer.toLowerCase("y") || answer !== answer.toLowerCase("n")) {
      console.log(`Type "y" or "n"\n`);
      restart();
    } else if (answer === answer.toLowerCase("y")) {
      clear();
      typeOfGame();
    } else if (answer === answer.toLowerCase("n")) {
      reader.close();
    }
  });
}

const score = () => {
  console.log(`Player ${playerScore} - ${aiScore} AI\n`);
  if (playerScore === 2) {
    console.log("gg.");
    restart();
  } else if (aiScore === 2) {
    console.log("EZ PZ MATE")
    restart();
  } else {
    round();
  }
};


//Round vs AI

const round = () => {
  Object.keys(moves).forEach((moveName, index) => {
    console.log(`${index + 1} - ${moveName}`);
  });
  reader.question("Please chose a move \n", (playerMove) => {
    if (isNaN(playerMove) || playerMove > 3 || playerMove < 1) {
      if (playerMove === "q") {
        reader.close();
      } else {
        console.log(`--Enter "1", "2" or "3"--\n\n`);
        round();
      }
    } else if (!isNaN(playerMove) || playerMove <= 3 || playerMove >= 1) {
      const index = parseInt(playerMove - 1);
      const move = Object.keys(moves)[index];
      const playerSymbol = moves[move];

      console.log(playerSymbol.join("\n"));

      const aiIndex = Math.floor(Math.random() * 3);
      const aiMove = Object.keys(moves)[aiIndex];
      const aiSymbol = moves[aiMove].map(reverseLine);

      console.log(aiSymbol.join("\n"));

      if (move === aiMove) {
        console.log("--Draw--\n\n");
        score();
      } else if ((move === pierre && aiMove === papier) || (move === papier && aiMove === ciseaux) || (move === ciseaux && aiMove === pierre)) {
        aiScore++;
        console.log("--LOSER!--\n\n");
        score();
      } else if ((move === pierre && aiMove === ciseaux) || (move === papier && aiMove === pierre) || (move === ciseaux && aiMove === papier)) {
        playerScore++;
        console.log("--Do you want a cookie for winning this round?--\n\n");
        score();
      }
    }
  });
}

//Score Human vs Human

const scoreHuman = () => {
  console.log(`Player 1 : ${player1} - ${player2} : Player 2\n`);
  if (player1 === 2) {
    console.log("Player 1 Win");
    reader.close();
  } else if (player2 === 2) {
    console.log("Player 2 Win")
    reader.close();
  } else {
    playerVsPlayer();
  }
};


//Human vs Human

const playerVsPlayer = () => {
  Object.keys(moves).forEach((moveName, index) => {
    console.log(`${index + 1} - ${moveName}`);
  });
  reader.question("Player 1 chose a move \n", (player1Move) => {
    if (isNaN(player1Move) || player1Move > 3 || player1Move < 1) {
      if (player1Move === "q") {
        reader.close();
      } else {
        console.log(`--Enter "1", "2" or "3"--\n\n`);
        playerVsPlayer();
      }
    } else if (!isNaN(player1Move) || player1Move <= 3 || player1Move >= 1) {
      const indexPlayer1 = parseInt(player1Move - 1);
      const movePlayer1 = Object.keys(moves)[indexPlayer1];
      const player1Symbol = moves[movePlayer1];
      clear();

      reader.question("Player 2 chose a move \n", (player2Move) => {
        if (isNaN(player2Move) || player2Move > 3 || player2Move < 1) {
          if (player2Move === "q") {
            reader.close();
          } else {
            console.log(`--Enter "1", "2" or "3"--\n\n`);
            playerVsPlayer();
          }
        } else if (!isNaN(player2Move) || player2Move <= 3 || player2Move >= 1) {
          const indexPlayer2 = parseInt(player2Move - 1);
          const movePlayer2 = Object.keys(moves)[indexPlayer2];
          const player2Symbol = moves[movePlayer2];

          console.log(player1Symbol.join("\n"));
          console.log(player2Symbol.join("\n"));

          if (movePlayer1 === movePlayer2) {
            console.log("--Draw--\n\n");
            scoreHuman();
          } else if ((movePlayer1 === pierre && movePlayer2 === papier) || (movePlayer1 === papier && movePlayer2 === ciseaux) || (movePlayer1 === ciseaux && movePlayer2 === pierre)) {
            player2++;
            console.log("--Player 2 won this round--\n\n");
            scoreHuman();
          } else if ((movePlayer1 === pierre && movePlayer2 === ciseaux) || (movePlayer1 === papier && movePlayer2 === pierre) || (movePlayer1 === ciseaux && movePlayer2 === papier)) {
            player1++;
            console.log("--Player 1 won this round--\n\n");
            scoreHuman();
          }
        }
      });
    }
  });
}