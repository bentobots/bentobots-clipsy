import { Clipper } from 'clipsy'

// jtSquare: 0,
// jtRound: 1,
// jtMiter: 2

const implementation = ({ POINTS, DELTA = 1, MITERLIMIT = 2, JOINTYPE = 0, AUTOFIX = true } = {}) => {
  let clipper = new Clipper()
  // switch (JOINTYPE) {
  //   case "SQUARE" 0
  //   case "ROUND" 1
  //   case "MITER" 2
  // }
  const offsetPoints = clipper.OffsetPolygons(
    [POINTS], DELTA, JOINTYPE, MITERLIMIT, AUTOFIX
  )[0]
  return { POINTS: offsetPoints }
}

const spec = {
  name: 'Offset Polygons',
  description: 'enlarges or shrinks a polygon',
  implementation,
  inputs: {
    POINTS: {},
    DELTA: {},
    MITERLIMIT: {},
    JOINTYPE: {},
    AUTOFIX: true
  },
  outputs: {
    POINTS: {}
  }
}

export default spec
