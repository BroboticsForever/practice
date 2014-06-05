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

var devConfig  = __dirname + '/dev.json';

console.log("Checking "+devConfig+" for config file...");
var config = readConfig(devConfig);

if(!config){
    console.log("Unable to find any config file. Killing the process.");
    process.exit(1);
} else {
    console.log("Config loaded successfully.");
}

module.exports = {
    config: config
};