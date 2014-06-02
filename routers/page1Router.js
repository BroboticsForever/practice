var config = require("../config/config").config,
    express = require("express"),
    router = express.Router(),
    logger = require("../logger/logger").logger;

router.get('/page1', homepage);
router.get('/anotherpage', anotherPage);

function homepage(req, res) {
    res.send(config.Message1);

    logger.info(config.Message1);
}

function anotherPage(req, res) {
    res.send(config.Message2);

    logger.info(config.Message2);
}

module.exports = router;
