const chalk = require("chalk");
const askNumber = require("./askNumber");
const hint = require("./hint");

const game = async () => {
  const mainNumber = Math.floor(Math.random() * 1000) + 1;
  let startGame = true;
  let countOfHint = 0;

  while (startGame) {
    let userGuessNumber = await askNumber();

    if (userGuessNumber.guessNum === mainNumber) {
      console.log(
        chalk.bgGreen.bold(
          `hoora ! you are winner . the number was ${mainNumber}`
        )
      );

      startGame = false;
    } else {
      console.log(chalk.blue(`oh your asnwer is wrong . hint : `));

      hint(mainNumber, userGuessNumber);

      ++countOfHint;

      if (countOfHint === 5) {
        startGame = false;
        console.log(chalk.bgRed.bold(` game over ! number was :${mainNumber}`));
      }
    }
  }
};

module.exports = game;
