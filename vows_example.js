//vows - http://vowsjs.org/
var vows = require('vows'),
    assert = require('assert');

vows.describe('Hello world tests')
    .addBatch({
        'when asking for hello world': {
            topic: function () { 
                return helloWorld();
            },
            'we get hello world': function (topic) {
                assert.equal (topic, 'hello world');
            }
        }
    })
    .run(); // Run it
    
function helloWorld(){
    return 'hello world';
}
