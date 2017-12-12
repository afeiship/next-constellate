var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-constellate');

describe('next/constellate', function () {

  it('02,25 is 双鱼', function () {
    assert.equal( nx.constellate(2,25), '双鱼' );
  });

  it('01,28 is 水瓶', function () {
    assert.equal( nx.constellate(1,28), '水瓶' );
  });

});
