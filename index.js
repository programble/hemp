function Hemp(separator, prefix, suffix) {
  'use strict';

  prefix = prefix || '';
  separator = separator || '';
  suffix = suffix || '';

  var string = prefix;

  var spin = function spin() {
    if (!arguments.length) return string + suffix;

    for (var i in arguments) {
      var fibre = arguments[i];

      if (string === prefix) string += fibre;
      else string += separator + fibre;
    }

    return spin;
  };

  spin.toString = spin;

  return spin;
}

if (typeof module !== 'undefined') module.exports = Hemp;
