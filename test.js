var assert = require('assert');

var Hemp = require('./index');

var s, r;

s = Hemp();
assert.equal(typeof s, 'function');
assert.equal(typeof s.toString, 'function');
assert.equal(s(), '');
assert.equal(s.toString(), '');

r = s('a');
assert.equal(r, s);
assert.equal(s(), 'a');
assert.equal(s.toString(), 'a');

s('b');
assert.equal(s(), 'ab');

s('c', 'd');
assert.equal(s(), 'abcd');

r = Hemp()(s)();
assert.equal(r, 'abcd');

s = Hemp(' ');
s('a', 'b', 'c');
assert.equal(s(), 'a b c');

s = Hemp(' ', '>');
s('a', 'b', 'c');
assert.equal(s(), '>a b c');

s = Hemp(' ', '>', ';');
s('a', 'b', 'c');
assert.equal(s(), '>a b c;');
