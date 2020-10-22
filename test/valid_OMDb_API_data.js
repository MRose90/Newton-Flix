//Tests to see if the API is returning useable data
const assert = require('assert'),
    fs = require("fs"),
    XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest,
    CONFIG = require('config');
describe('Config', function() {
    describe('OMDb API', function() {
        it('The OMDb API is returning expected data for newton request', function() {
            assert.ok(fs.existsSync("config/default.json"));
            assert.ok(CONFIG.api_key);
            let req = new XMLHttpRequest()
            req.open('GET', 'https://www.omdbapi.com/?apikey=' + CONFIG.api_key + '&s=newton', false)
            req.send();
            //Converts request to JSON
            const json = JSON.parse(req.responseText);
            assert.ok(json.hasOwnProperty("Search"))
        });
    });
});