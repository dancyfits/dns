const assert      = require('assert');
const _           = require('underscore');
const fs          = require('fs');
const passmarked  = require('passmarked');
const testFunc    = require('../lib/client');

describe('client', function() {
    
  it('Should not return an error if it can\'t connect to DNS servers', function(done) {
  
    // handle the payload
    var payload = passmarked.createPayload({

      url: 'http://example2.com'

    }, { log: { entries: [] } }, '')

    testFunc(payload, function(err) {

      // check if there is a err
      if(err) assert.fail(err);

      // done
      done()

    });
  
  });
    
  it('Should not return an error if we can connect to DNS servers', function(done) {
  
    // handle the payload
    var payload = passmarked.createPayload({

      url: 'http://example.com'

    }, { log: { entries: [] } }, '')

    testFunc(payload, function(err) {

      // check if there is a err
      if(err) assert.fail(err);

      // done
      done()

    });
  
  });

});
