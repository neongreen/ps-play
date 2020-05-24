"use strict";

const util = require('util');

exports.inspect = function (value) {
  return util.inspect(value, {showHidden: false, depth: null});
};
