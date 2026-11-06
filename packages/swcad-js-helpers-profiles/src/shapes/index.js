"use strict"

const ellipseModule = require('./ellipse')
const rectangleModule = require('./rectangle')
const squareModule = require('./square')
const triangleModule = require('./triangle')

/**
 * Builds various 2D shapes
 * @memberof profiles
 * @namespace shapes
 */

const shapesBuilder = ({ jscad, swcadJs, swcadJsHelpers }) => {
  const { square, circle, rectangle, triangle, ellipse } = jscad.primitives
  const { intersect, union, subtract } = jscad.booleans
  const { rotate, align } = jscad.transforms
  const { geom2, path2 } = jscad.geometries

  const ellipses = ellipseModule.init({ jscad, swcadJs, swcadJsHelpers })
  const rectangles = rectangleModule.init({ jscad, swcadJs, swcadJsHelpers })
  const squares = squareModule.init({ jscad, swcadJs, swcadJsHelpers })
  const triangles = triangleModule.init({ jscad, swcadJs, swcadJsHelpers })

  /**
   * octFromDiam
   * @memberof profiles.shapes
   * @alias octagon
   * @instance
   * @param {Object} opts 
   * @param {number} opts.sqLength - side length for bounding square 
   */
  const octFromDiam = (opts) => {
    const sqLen = opts.sqLength;
    // const octagonSideLen = Math.tan(Math.PI / 8) * (sqLen / 2) * 2;

    const baseSquare = square({ size: sqLen });
    const angledSquare = rotate([0, 0, Math.PI / 4], baseSquare);

    return intersect(baseSquare, angledSquare);
  }

  //----------
  //  OUTPUT
  //----------

  const shapes = {
    ellipse: ellipses,
    rectangle: rectangles,
    square: squares,
    triangle: triangles,
    octagon: {
      octFromDiam
    },
  }

  return shapes
}

module.exports = { init: shapesBuilder }
