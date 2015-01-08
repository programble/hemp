# Hemp

[![npm](https://img.shields.io/npm/v/hemp.svg?style=flat-square)](https://www.npmjs.com/package/hemp)

Small JavaScript string builder.

```
npm install hemp
```

## Examples

```javascript
var Hemp = require('hemp');

// Hemp is used to make strings (from smaller strings).
var spin = Hemp();

// It creates a function that accumulates other strings.
spin('The');

// The function can take any number of strings.
spin(' quick', ' brown ');

// The function also returns itself, for chaining.
spin
  ('fox jumps ')
  ('over the lazy ')
  ('dog.');

// To obtain the accumulated string, call toString.
console.log(spin.toString());

// Or just call the function again.
console.log(spin());

// The function will turn anything into a string, including another Hemp.
var more = Hemp()('Now ', 'you ', 'know.');
spin(' ', more);

// Hemp can automatically add separators
var words = Hemp(' ')('One', 'Two', 'Three');
words(); // One Two Three Four Five Six

// As well as prefixes.
var spell = Hemp('-', 'Hemp is spelled ')('h', 'e', 'm', 'p');
spell(); // Hemp is spelled h-e-m-p

// And suffixes too!
var query = Hemp(' ', null, ';')
  ('SELECT *')
  ('FROM table')
  ('WHERE column IS NOT NULL')
  ('LIMIT 1');
query(); // SELECT * FROM table WHERE column IS NOT NULL LIMIT 1;
```

## Unlicense

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>
