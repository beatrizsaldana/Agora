/**
 * Module dependencies.
 */

var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');
var events = require('events');
var path = require('path');

// Get our api routes
var api = require('./routes/api');

var app = express();
app.use(cors());

//app.use(helmet());

// serve static files from public folder
app.use(express.static(__dirname));

// parse application/json
app.use(bodyParser.json({limit: '50mb'}));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Error handlers
// Development error handler
// Will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
}

// Production error handler
// No stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});

var debug = require('debug')('wot:server');
var http = require('http');

// Get port from environment and store in Express
var port = normalizePort(process.env.npm_package_config_port || '3000');
app.set('port', port);

// Create HTTP server
var server = http.createServer(app);

// Listen on provided port, on all network interfaces
server.listen(port, () => console.log(`API running on localhost:${port}`));

server.on('error', onError);
server.on('listening', onListening);

// Normalize a port into a number, string, or false.
function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

// Event listener for HTTP server "error" event
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
        case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
        default:
        throw error;
    }
}

// Event listener for HTTP server "listening" event
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}

if (express().get('env') === 'production') {
    module.exports = app;
}
