var express = require("express"), //include express
    winston = require("winston"), //include winston
    app = express(), //create our app
    page1Router = require("./routers/page1Router"), //create a router for page1
    middleware = require("./middleware/index"); //include middleware

app.use('*', middleware.authenticate); //set to authenticate on every page

app.use('/', page1Router); //

app.listen(3030);