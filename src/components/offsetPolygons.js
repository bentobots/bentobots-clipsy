import { Clipper } from 'clipsy'

// jtSquare: 0,
// jtRound: 1,
// jtMiter: 2

const implementation = ({ POINTS, DELTA, MITERLIMIT, JOINTYPE, AUTOFIX } = {}) => {
  let clipper = new Clipper()
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
