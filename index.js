const log                           = require('./src/log');
const error                         = require('./src/error');
const info                          = require('./src/info');
const fs                            = require('fs');

class book{
    constructor(file, type, header, locale="en-US"){
        this.file = file
        this.type = type
        this.header = header
        this.locale = locale
    }

    Draft() {
        if (this.type === "TXT"){
            var data = "This log was created with historia-log."
        }
        if (this.type === "CSV"){
            var data = "Date"
            this.header.forEach(header => {
                data = data.concat(",",header);
            })
            data = data.concat(",","Message\r\n");
        }
        fs.open(this.file, 'w', (err, fd) => {
            let found = false;
            if (err) {
              if (err.code === 'EEXIST') {
                info.print("Logfile found!");
                found = true;
                info.print(fd);
              }
              else{
                  throw err
              }
            }
          
            fs.writeFile(fd, data, (err) => {
                if (err) throw err;
            });
            fs.close(fd, (err) => {
                if (err) throw err;
            })
          });
    }

    Write(data){
        fs.open(this.file, 'a', (err, fd) => {
            if (err) throw err;
            fs.appendFile(fd, data, 'utf8', (err) => {
              fs.close(fd, (err) => {
                if (err) throw err;
              });
              if (err) throw err;
            });
          });
    }
}


module.exports = {
    log,
    error,
    info,
    book,
    errors
}