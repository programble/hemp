# Hemp

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
var query = Hemp(' ', 'SELECT * ', ';')
  ('FROM table')
  ('WHERE column IS NOT NULL')
  ('LIMIT 1');
query(); // SELECT * FROM table WHERE column IS NOT NULL LIMIT 1;
```

## License

Copyright © 2015, Curtis McEnroe <curtis@cmcenroe.me>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
