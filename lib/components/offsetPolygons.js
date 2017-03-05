'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _clipsy = require('clipsy');

// jtSquare: 0,
// jtRound: 1,
// jtMiter: 2

var implementation = function implementation() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      POINTS = _ref.POINTS,
      DELTA = _ref.DELTA,
      MITERLIMIT = _ref.MITERLIMIT,
      JOINTYPE = _ref.JOINTYPE,
      AUTOFIX = _ref.AUTOFIX;

  var clipper = new _clipsy.Clipper();
  var offsetPoints = clipper.OffsetPolygons([POINTS], DELTA, JOINTYPE, MITERLIMIT, AUTOFIX)[0];
  return { POINTS: offsetPoints };
};

var spec = {
  name: 'Offset Polygons',
  description: 'enlarges or shrinks a polygon',
  implementation: implementation,
  inputs: {
    POINTS: { default: {} },
    DELTA: { default: 1 },
    MITERLIMIT: { default: 2 },
    JOINTYPE: { default: 0 },
    AUTOFIX: { default: true }
  },
  outputs: {
    POINTS: {}
  }
};

exports.default = spec;