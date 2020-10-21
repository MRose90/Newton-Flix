//Set up the requirements
const json = require('body-parser/lib/types/json'),
    express = require('express'),
    app = express(),
    http = require('http'),
    server = http.Server(app),
    path = require('path'),
    bodyParser = require('body-parser'),
    CONFIG = require('config'),
    XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '50mb' }));

//This stuff deals with serving the front-end
//Public: JS and CSS
//Views: HTML 
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

//Set up routing
const router = express.Router();

//Routing for /newton
router.get('/newton', function(request, response, next) {
    const someError = false;
    if (someError) {
        return next(someError);
    }
    //Requests data from omdb
    let req = new XMLHttpRequest()
    req.open('GET', 'https://www.omdbapi.com/?apikey=' + CONFIG.api_key + '&s=newton', false)
    req.send();
    //Converts request to JSON
    const json = JSON.parse(req.responseText);
    //Strips any excess JSON or returns and error if an unexpected JSON is returned.
    if (json.hasOwnProperty("Search")) {
        response.send(json["Search"]);
    } else {
        const err = new Error('OMDb did not return valid data.');
        response.status(418).send('We seem to have encountered some sort of E double R O R. Please be patient while we resolve the problem. ' + err)
    }
});

//Home. This is where our story begins…
router.get('/', function(req, res, _next) {
    res.sendFile('index.html', {
        root: './views'
    })
});
app.use('/', router);

//Set the port
server.listen(process.env.PORT || 9003);
server.on('error', function(err) {
    console.log('"Err" on the side of caution. Error found:', err)
});
server.on('listening', function(lst) {
    console.log('Hello, hello. Is anybody out there? I\'m here waiting!')
});
server.on('request', function(req) {
    //Uncomment this if you want see EVERY incoming request.
    //But let's be real, this is going to spam the logs on such a simple app.
    //console.log(req.url);
})

//Error handling. Didn't find what you were looking for huh?
app.use(function(req, res, next) {
    const err = new Error('Page Not Found');
    err.status = 404;
    next(err);
});
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send('We seem to have encountered some sort of E double R O R. Please be patient while we resolve the problem. ' + err)
});