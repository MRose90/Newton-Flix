//Tests the Newton request to make sure Newton is in each title
const assert = require('assert'),
    XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;;
describe('API', function() {
    describe('Tests the request for all movies with "Newton" in the name', function() {
        it('Server should return a 200 response', function() {
            const request = new XMLHttpRequest()
            request.open('GET', 'http://127.0.0.1:9003/newton', false)
            request.send();
            //Converts the returned list to a json and iterates through the entries
            const json = JSON.parse(request.responseText);
            for (let i = 0; i < json.length; i++) {
                if (json[i].hasOwnProperty("Title")) {
                    //toLowerCase removes any case sensitivity.
                    assert.ok(json[i]["Title"].toLowerCase().includes("newton"));
                }
            }
        });
    });
});