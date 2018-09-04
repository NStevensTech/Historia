const HError                        = require('../errors');
const chalk                         = require('chalk');

function Print(msg){
    console.log(chalk.bgBlue.black(" Info "), chalk.blue(msg),"\n")
}

function Warn(msg){
    console.log(chalk.bgYellow.black(" Warning "), chalk.yellow(msg),"\n")
}

function Success(msg){
    console.log(chalk.bgGreen.black(" Success "), chalk.green(msg),"\n")
}

colors = [chalk.green, chalk.yellow, chalk.blue, chalk.magenta]


function Detail(prefixes, msg){
    let result = '';
    prefixes.forEach(prefix => {
        result = result + colors[prefixes.indexOf(prefix)]('[' + prefix + ']');
    });
    result = result + " " + chalk.white(msg);
    console.log(result)
}

function Log(Book, prefixes, msg, callback){
    let today = new Date();
    let data = today.toLocaleDateString(Book.locale);
    if (Book.header.length != prefixes.length){
        throw new HError.InvalidPrefixError();
    }

    if (Book.type === "TXT"){
        let result = '';
        prefixes.forEach(prefix => {
            result = result.concat('[', prefix, ']');
        });
        result = result.concat(" ", msg);
        data.concat("\n\t", result)
    }
    if (Book.type === "CSV"){
        prefixes.forEach( prefix => {
            data = data.concat("," + prefix);
        });
        data = data.concat("," + msg);
    }
    data = data.concat("\r\n")
    Book.Write(data)

    callback(prefixes, msg)
}

module.exports = {
    Print,
    Warn,
    Success,
    Detail,
    Log
}