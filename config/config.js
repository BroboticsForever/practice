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

var defaultConfig = "/etc/brobotics/production.json";
var devConfig  = __dirname + '/dev.json';

console.log("Checking "+defaultConfig+" for production config...");
var config = readConfig(defaultConfig);

if(!config){
    console.log("Checking "+devConfig+" for dev config...");
    config = readConfig(devConfig);
}
if(!config){
    console.log("Unable to find any config file. Killing the process.");
    process.exit(1);
} else {
    console.log("Config loaded successfully.");
}

module.exports = {
    config: config
};