const error                         = require('./src/error');
const info                          = require('./src/info');
const Errors                        = require('./errors');
const fs                            = require('fs');

class Book{
    constructor(directory, type, header, locale="en-US"){
        this.dir = directory + "/logs";
        this.type = type;
        this.file = this.dir + "/log." + this.type;
        this.header = header;
        this.locale = locale;
        
        fs.existsSync(this.dir) || fs.mkdirSync(this.dir);

    }

    Draft() {
        if (this.type === "TXT"){
            var data = "This log was created with historia-log.\r\n----------------------------------------------"
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
    error,
    info,
    Book,
    Errors
}