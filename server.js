const yargs = require("yargs");
const game = require('./utils/game')

yargs.command({
  command: "num",
  alias: "n",
  describe: "guess the num game",
  handler: () => {
    game()
  },
});

yargs.parse();
