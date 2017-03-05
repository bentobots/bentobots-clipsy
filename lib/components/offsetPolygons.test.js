'use strict';

var _offsetPolygons = require('./offsetPolygons');

var _offsetPolygons2 = _interopRequireDefault(_offsetPolygons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('can offsetPolygons', function () {
  var points = [{ X: 0, Y: 0 }, { X: 0, Y: 1 }, { X: 1, Y: 1 }, { X: 1, Y: 0 }];
  var result = _offsetPolygons2.default.implementation({ POINTS: points, DELTA: 5, MITERLIMIT: 10, JOINTYPE: 2, AUTOFIX: true });
  var expectedResult = {
    POINTS: [{ X: -5, Y: 6 }, { X: -5, Y: -5 }, { X: 6, Y: -5 }, { X: 6, Y: 6 }]
  };
  expect(result).toEqual(expectedResult);
});