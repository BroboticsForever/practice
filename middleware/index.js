"use strict"
var logger = require("../logger/logger").logger;

exports.authenticate = function(req, res, next) {
    logger.info("Temp Authorization");
    next();
};