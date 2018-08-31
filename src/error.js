const HError                        = require('../errors');
const chalk                         = require('chalk');

function print(message , code=0, err, tb=false){
    console.log(
        chalk.bgRed.black(" Error "),
        "\t\t\t\t\t\t\t", 
        (code == 0)
            ? ''
            : chalk.red('[' + code + ']'), 
        "\n\n", 
        chalk.white(message),
        "\n",
        (tb)
            ? chalk.red(err().stack)
            : '',
        "\n"
        )
}


module.exports = {
    print
}