var cluster = require('cluster');

if ((cluster.isMaster) && process.argv.indexOf('--singleProcess') < 0) {
    console.log("Forking processes for each CPU...");

    var numCPUs = require('os').cpus().length;

    for (var i = 0; i < numCPUs; i++) {
        console.log('Forking worker ' + i);
        cluster.fork();
    }

    cluster.on('exit', function(worker) {
        console.log('Worker ' + worker.id + ' has died. Forking new worker.');
        cluster.fork();
    });
} else {
    var workerId = 0;
    if (!cluster.isMaster) {
        workerId = cluster.worker.id;
    }

    var express = require('express');
    var app = express();
    var mongoose = require('mongoose');
    var bodyParser = require('body-parser');
    var methodOverride = require('method-override');
    var db = require('./config/db');
    var port = process.env.PORT || 3000


    app.use(bodyParser.json());
    app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(methodOverride('X-HTTP-Method-Override'));
    app.use(express.static(__dirname + '/public'));

    require('./app/routes')(app);

    app.listen(port);

    console.log('Worker ' + workerId + ' listening on port ' + port);

    exports = module.exports = app;
}