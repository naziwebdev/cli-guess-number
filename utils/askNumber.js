const inquirer = require("inquirer");

const askNumber = async () => {
  let number = await inquirer.default.prompt([
    {
      type: "number",
      message: "Guess the number between 1 - 1000 :",
      name: "guessNum",
    },
  ]);


  return number
};

module.exports = askNumber;
