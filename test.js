var offsetPoints = require('./lib').offsetPoints
var points = [{X:0,Y:0}, {X:0, Y:1}, {X:1, Y:1}, {X:1, Y:0}]

console.log(offsetPoints({POINTS: points, DELTA: 5, MITERLIMIT: 10, JOINTYPE: 2}))
