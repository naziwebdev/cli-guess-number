const yargs = require("yargs");
const askNumber = require("./utils/askNumber");

yargs.command({
  command: "num",
  alias: "n",
  describe: "guess the num game",
  handler: () => {
    askNumber();
  },
});

yargs.parse();
