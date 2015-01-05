function Hemp(prefix, separator, suffix) {
  'use strict';

  if (arguments.length === 1) {
    separator = prefix;
    prefix = null;
  }

  prefix = prefix || '';
  separator = separator || '';
  suffix = suffix || '';

  var string = '';

  var spin = function spin() {
    if (!arguments.length) return string + suffix;

    for (var i in arguments) {
      var fibre = arguments[i];

      if (!string.length) string = prefix + fibre;
      else string += separator + fibre;
    }

    return spin;
  };

  spin.toString = spin;

  return spin;
}

if (typeof module !== 'undefined') module.exports = Hemp;
