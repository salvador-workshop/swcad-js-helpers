"use strict"

const ellipseModule = require('./ellipse')
const rectangleModule = require('./rectangle')
const squareModule = require('./square')
const triangleModule = require('./triangle')

/**
 * Modelling functions for various basic shapes.
 * @memberof profiles
 * @namespace shapes
 */

const shapesBuilder = ({ jscad, swcadJs, swcadJsHelpers }) => {
  const { square } = jscad.primitives
  const { intersect } = jscad.booleans
  const { rotate } = jscad.transforms

  const ellipses = ellipseModule.init({ jscad, swcadJs, swcadJsHelpers })
  const rectangles = rectangleModule.init({ jscad, swcadJs, swcadJsHelpers })
  const squares = squareModule.init({ jscad, swcadJs, swcadJsHelpers })
  const triangles = triangleModule.init({ jscad, swcadJs, swcadJsHelpers })

  /**
   * Generates an octagon from a given diametre.
   * @memberof profiles.shapes.polygons
   * @param {Object} opts 
   * @param {number} opts.sqLength - side length for bounding square 
   * @returns ...
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
    /**
     * Modelling functions for various polygons.
     * @memberof profiles.shapes
     * @namespace polygons
     */
    polygons: {
      octFromDiam
    },
  }

  return shapes
}

module.exports = { init: shapesBuilder }
