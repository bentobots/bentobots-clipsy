import { Clipper } from 'clipsy'

// jtSquare: 0,
// jtRound: 1,
// jtMiter: 2

const implementation = ({ POINTS, DELTA, MITERLIMIT, JOINTYPE, AUTOFIX, CONVERT = true } = {}) => {
  const isArray = Array.isArray(POINTS[0])
  let correctedPoints = POINTS

  // expects POINTS to be [{X:0,Y:0},{X:1,Y:1}...]

  if (isArray) {  // if gets [[0,0],[1,1]...]
    correctedPoints = POINTS.map(p => ({X: p[0], Y: p[1]}))
  }

  let clipper = new Clipper()
  let offsetPoints = clipper.OffsetPolygons(
    [correctedPoints], DELTA, JOINTYPE, MITERLIMIT, AUTOFIX
  )[0]

  if (isArray && !CONVERT) {
    offsetPoints = offsetPoints.map(p => ([p.X, p.Y]))
  }

  return { POINTS: offsetPoints }
}

const spec = {
  name: 'Offset Polygons',
  description: 'enlarges or shrinks a polygon',
  implementation,
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
}

export default spec
