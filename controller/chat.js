var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    if (req.cookies['username'] != null) {
        res.render('chat', {
            username: req.cookies['username']
        });
    } else {
        res.redirect('/login');
    }
});

router.post('/', (req, res) => {

});

module.exports = router;