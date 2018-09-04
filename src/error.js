const HError                        = require('../errors');
const chalk                         = require('chalk');

function Print(message , code=0, err, tb=false){
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

function Log(Book, message, code, err, tb, callback){
    let today = new Date();
    let data = today.toLocaleDateString(Book.locale);

    if (Book.type === "TXT"){
        let result = '';
        result = result.concat("ERROR: ", code);
        (tb)
            ? result = result.concat(err.stack)
            : null
        result = result.concat("\r\n", message);
        result = result.concat("\r\n----------------------------------------------")
        data = data.concat("\r\n", result);
    }
    if (Book.type === "CSV"){
        Book.header.forEach( prefix => {
            data = data.concat(",ERROR");
        });
        data = data.concat(",[", code, "] ", message, (tb)?err.stack :"");
    }
    data = data.concat("\r\n")
    Book.Write(data)

    callback(message, code, err, tb)
}


module.exports = {
    Print,
    Log
}
