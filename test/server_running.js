//Test to see if the server is running on the local machine on port 9003
//Simply tests if the response code is 200
const assert = require('assert');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
describe('Array', function() {
  describe('200 from node server', function() {
    it('Server should return a 200 response', function() {
        var request = new XMLHttpRequest()
        request.open('GET', 'http://127.0.0.1:9003', false) 
        request.send();  
        console.log(request.status);
      assert.equal(request.status,200);
    });
  });
});