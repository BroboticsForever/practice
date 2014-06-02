var config = require("../config/config").config,
    winston = require("winston");

var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            timestamp:true,
            json:false,
            colorize:true,
            level:config.LoggingLevel
        }),
        new (winston.transports.File)({
            filename: config.LogFile,
            timestamp:true,
            level:config.LoggingLevel
        })
    ]
});

module.exports = {
    logger: logger
}