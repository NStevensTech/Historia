const HError                        = require('../errors');
const chalk                         = require('chalk');

function print(msg){
    console.log(chalk.bgBlue.black(" Info "), chalk.blue(msg),"\n")
}

function warn(msg){
    console.log(chalk.bgYellow.black(" Warning "), chalk.yellow(msg),"\n")
}

function success(msg){
    console.log(chalk.bgGreen.black(" Success "), chalk.green(msg),"\n")
}
module.exports = {
    print,
    warn,
    success
}