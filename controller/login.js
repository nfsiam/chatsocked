var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    if (req.cookies['username'] == null) {
        res.render('login');
    } else {
        res.redirect('./chat');
    }
});

router.post('/', (req, res) => {
    if (req.body.username != '') {
        res.cookie('username', req.body.username);
        res.redirect('/chat');
    } else {
        res.send('invalid username/password');
    }
});

module.exports = router;