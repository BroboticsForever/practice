var config = require("../config/config").config,
    express = require("express"),
    router = express.Router(),
    logger = require("../logger/logger").logger;

router.get('/page1', homepage);
router.get('/anotherpage', anotherPage);

function homepage(req, res) {
    res.render(__dirname + "/page1.handlebars");

    logger.info(config.Message1);
}

function anotherPage(req, res) {
    var html = "<!DOCTYPE html>" +
        "<html lang=\"en\">" +
            "<head><title>Another Page</title></head>" +
            "<body>" +
                "This is the body of anotherpage! <br>" +
                "<a href=\"" + config.APIHost + "/page1\">Click here to go back.</a>"
            "</body>" +
        "</html>";

    res.send(html);

    logger.info(config.Message2);
}

module.exports = router;
