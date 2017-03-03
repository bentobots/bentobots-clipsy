'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _clipsy = require('clipsy');

// jtSquare: 0,
// jtRound: 1,
// jtMiter: 2

var offsetPolygons = function offsetPolygons() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      POINTS = _ref.POINTS,
      _ref$DELTA = _ref.DELTA,
      DELTA = _ref$DELTA === undefined ? 1 : _ref$DELTA,
      _ref$MITERLIMIT = _ref.MITERLIMIT,
      MITERLIMIT = _ref$MITERLIMIT === undefined ? 2 : _ref$MITERLIMIT,
      _ref$JOINTYPE = _ref.JOINTYPE,
      JOINTYPE = _ref$JOINTYPE === undefined ? 0 : _ref$JOINTYPE,
      _ref$AUTOFIX = _ref.AUTOFIX,
      AUTOFIX = _ref$AUTOFIX === undefined ? true : _ref$AUTOFIX;

  var clipper = new _clipsy.Clipper();
  // switch (JOINTYPE) {
  //   case "SQUARE" 0
  //   case "ROUND" 1
  //   case "MITER" 2
  // }
  var offsetPoints = clipper.OffsetPolygons([POINTS], DELTA, JOINTYPE, MITERLIMIT, AUTOFIX)[0];
  return { POINTS: offsetPoints };
};

exports.default = offsetPolygons;