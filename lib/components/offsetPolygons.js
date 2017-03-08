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
      AUTOFIX = _ref.AUTOFIX,
      _ref$CONVERT = _ref.CONVERT,
      CONVERT = _ref$CONVERT === undefined ? true : _ref$CONVERT;

  var isArray = Array.isArray(POINTS[0]);
  var correctedPoints = POINTS;

  // expects POINTS to be [{X:0,Y:0},{X:1,Y:1}...]

  if (isArray) {
    // if gets [[0,0],[1,1]...]
    correctedPoints = POINTS.map(function (p) {
      return { X: p[0], Y: p[1] };
    });
  }

  var clipper = new _clipsy.Clipper();
  var offsetPoints = clipper.OffsetPolygons([correctedPoints], DELTA, JOINTYPE, MITERLIMIT, AUTOFIX)[0];

  if (isArray && !CONVERT) {
    offsetPoints = offsetPoints.map(function (p) {
      return [p.X, p.Y];
    });
  }

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