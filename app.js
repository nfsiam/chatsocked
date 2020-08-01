global.msgQueue = [];
const express = require('express');
const http = require('http');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

const login = require('./controller/login');
const logout = require('./controller/logout');
const chat = require('./controller/chat');

const app = express();

const server = http.createServer(app);

//socket chat server
require('./server')(server);


app.set('view engine', 'ejs');

app.use(express.static('public'));

//for bootstrap
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
// jquery
app.use(express.static(__dirname + '/node_modules/jquery/dist'));


app.use(bodyParser());
app.use(cookieParser());

app.use('/', login);
app.use('/login', login);
app.use('/chat', chat);
app.use('/logout', logout);

server.listen(3000, () => {
    console.log('server running...');
});