const HError                        = require('../errors');
const chalk                         = require('chalk');

colors = [chalk.green, chalk.yellow, chalk.blue, chalk.magenta]


function print(prefixes, msg){
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