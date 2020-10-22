//Tests to see if the config file contains an entry for an API key. 
// Does not test the validity. This is handled by the code.
const assert = require('assert'),
    fs = require("fs"),
    CONFIG = require('config');
describe('Config', function() {
    describe('Config API Key', function() {
        it('The config file contains an entry for api key', function() {
            assert.ok(fs.existsSync("config/default.json"));
            assert.ok(CONFIG.api_key);
        });
    });
});