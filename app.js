var express = require("express"), //include express
    expressHB = require("express3-handlebars"),
    app = express(), //create our app
    page1Router = require("./routers/page1Router"), //create a router for page1
    middleware = require("./middleware/index"), //include middleware
    config = require("./config/config").config;

app.use(express.static("./public"));

app.engine('handlebars', expressHB({ defaultLayout: 'main', extname: '.handlebars' }));
app.set('view engine', 'handlebars');

app.use('*', middleware.authenticate); //set to authenticate on every page

app.use('/', page1Router); //

app.listen(config.ListenPort);

console.log("Web server now listening on port 3030:");