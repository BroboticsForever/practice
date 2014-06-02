var express = require("express"),
    winston = require("winston"),
    app = express(),
    page1Router = require("./routers/page1Router"),
    middleware = require("./middleware/index");

app.use('*', middleware.authenticate);

app.use('/', page1Router);

app.listen(3030);