var express = require('express');
var router = express.Router();
var mongodb = require('mongodb-curd');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/api/list', function(req, res, next) {
    mongodb.find('abc', 'fans', function(result) {
        if (result) {
            res.send({ code: 0, data: result });
        } else {
            res.send({ code: 1, data: error });
        }
    });
});
module.exports = router;