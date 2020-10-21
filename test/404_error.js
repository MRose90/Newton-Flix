//Test the 404 page not found
//Simply tests a non-existant URL
const assert = require('assert'),
    XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
describe('Array', function() {
  describe('404 from node server', function() {
    it('Server should return a 404 response', function() {
        var request = new XMLHttpRequest()
        request.open('GET', 'http://127.0.0.1:9003/notfound', false) 
        request.send();
      assert.equal(request.status,404);
    });
  });
});