var express = require("express"), //include express
    app = express(), //create our app
    page1Router = require("./routers/page1Router"), //create a router for page1
    middleware = require("./middleware/index"), //include middleware
    config = require("./config/config").config,
    consolidate = require('consolidate');

app.set("view options", { layout:false });
app.engine('.handlebars', consolidate.handlebars);

app.use('*', middleware.authenticate); //set to authenticate on every page

app.use('/', page1Router); //

app.listen(config.ListenPort);