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
            ? chalk.red(err.stack)
            : '',
        "\n"
        )
}

function Archive(Book, message, code=0, err=null, tb=false, callback){

    print("This function is not complete. Variables are passed to the call back.", "error.Archive()")

    callback(Book, message, code, err, tb)
}


module.exports = {
    print
}
