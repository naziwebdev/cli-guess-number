const chalk = require("chalk");

const hint = (mainNumber, userGuessNumber) => {
  if (userGuessNumber.guessNum < mainNumber) {
    return console.log(chalk.yellow("go higher"));
  } else if (userGuessNumber.guessNum > mainNumber) {
    return console.log(chalk.yellow("go lower"));
  }else{
    return true
  }

};

module.exports = hint;
