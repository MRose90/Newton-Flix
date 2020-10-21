//Test the 404 page not found.
//Simply tests a non-existant URL.
const assert = require('assert'),
    XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
describe('Server', function() {
    describe('404 from node server', function() {
        it('Server should return a 404 response', function() {
            const request = new XMLHttpRequest()
                //URL to test is /notfound.
            request.open('GET', 'http://127.0.0.1:9003/notfound', false)
            request.send();
            //Checks for a 404 status.
            assert.equal(request.status, 404);
        });
    });
});