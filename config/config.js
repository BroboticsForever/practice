var fs = require("fs");

var readConfig = function(configPath){
    try {
        var content = fs.readFileSync(configPath);
        return JSON.parse(content);
    }
    catch(exception){
        console.log(exception.message);
        return null;
    }
};

var config = readConfig(__dirname + '/config.json');

module.exports = {
    config: config
};