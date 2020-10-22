//Tests to see if the config folder and file exists
const assert = require('assert'),
    fs = require("fs");
describe('Config', function() {
    describe('Config file exists', function() {
        it('The config folder and file exist', function() {
            assert.ok(fs.existsSync("config/default.json"));
        });
    });
});