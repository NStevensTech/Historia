const HError                        = require('../errors');
const init                          = require('./init');
const chalk                         = require('chalk');

colors = [chalk.green, chalk.yellow, chalk.blue, chalk.magenta]


function print(prefixes, msg, code){
    let result = '';
    prefixes.forEach(prefix => {
        result = result + colors[prefixes.indexOf(prefix)]('[' + prefix + ']');
    });
    result = result + " " + chalk.white(msg);
    console.log(result)
}

module.exports = {
    print
}