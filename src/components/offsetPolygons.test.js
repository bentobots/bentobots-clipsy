import offsetPolygons from './offsetPolygons'

it('can offsetPolygons', () => {
  const points = [{X: 0, Y: 0}, {X: 0, Y: 1}, {X: 1, Y: 1}, {X: 1, Y: 0}]
  const result = offsetPolygons.implementation(
    {POINTS: points, DELTA: 5, MITERLIMIT: 10, JOINTYPE: 2, AUTOFIX: true}
  )
  const expectedResult = {
    POINTS: [{X: -5, Y: 6}, {X: -5, Y: -5}, {X: 6, Y: -5}, {X: 6, Y: 6}]
  }
  expect(result).toEqual(expectedResult)
})

it('converts offsetPolygons received in array format', () => {
  const points = [[0, 0], [0, 1], [1, 1], [1, 0]]
  const result = offsetPolygons.implementation(
    {POINTS: points, DELTA: 5, MITERLIMIT: 10, JOINTYPE: 2, AUTOFIX: true, CONVERT: true}
  )
  const expectedResult = {
    POINTS: [{X: -5, Y: 6}, {X: -5, Y: -5}, {X: 6, Y: -5}, {X: 6, Y: 6}]
  }
  expect(result).toEqual(expectedResult)
})

it('can offsetPolygons received in array format', () => {
  const points = [[0, 0], [0, 1], [1, 1], [1, 0]]
  const result = offsetPolygons.implementation(
    {POINTS: points, DELTA: 5, MITERLIMIT: 10, JOINTYPE: 2, AUTOFIX: true, CONVERT: false}
  )
  const expectedResult = {
    POINTS: [[-5, 6], [-5, -5], [ 6, -5], [ 6, 6]]
  }
  expect(result).toEqual(expectedResult)
})
