"use strict"

const triangleInit = ({ jscad, swcadJs, swcadJsHelpers }) => {
  const { triangle } = jscad.primitives

  const { position, geometry } = swcadJsHelpers.calcs
  const { constants } = swcadJsHelpers.data

  //-------------
  //  TRIANGLES
  //-------------

  const createRtTriangle = ({ base, height, ratio }) => {
    const validOpts = {
      short: base || height / ratio,
      long: height || base * ratio
    }
    const triOpts = geometry.triangle.rightTriangleOpts({ ...validOpts })
    return triangle(triOpts);
  }

  /**
   * Modelling functions for various triangles.
   * @memberof profiles.shapes
   * @namespace triangle
   */
  const triangles = {
    /**
     * Generates an equilateral triangle.
     * @memberof profiles.shapes.triangle
     * @param {object} opts
     * @param {number} opts.base
     * @returns ...
     */
    equilateral: ({ base }) => {
      return triangle({ type: 'SSS', values: [base, base, base] })
    },
    /**
     * Generates a right triangle with a 45-degree angle.
     * @memberof profiles.shapes.triangle
     * @param {object} opts
     * @param {number} opts.base
     * @returns ...
     */
    right45: ({ base }) => {
      const triOpts = geometry.triangle.rightTriangleOpts({ short: base, long: base })
      return triangle(triOpts);
    },
    /**
     * Generates a right triangle with a 30-degree angle.
     * @memberof profiles.shapes.triangle
     * @param {object} opts
     * @param {number} opts.base
     * @param {number} opts.height
     * @returns ...
     */
    right30: ({ base, height }) => {
      return createRtTriangle({ base, height, ratio: 2 });
    },
    /**
     * Generates a right triangle with side lengths corresponding to the Golden ratio.
     * @memberof profiles.shapes.triangle
     * @param {object} opts
     * @param {number} opts.base
     * @param {number} opts.height
     * @returns ...
     */
    rightGolden: ({ base, height }) => {
      return createRtTriangle({ base, height, ratio: constants.PHI });
    },
    /**
     * Generates a right triangle with side lengths corresponding to the Silver ratio.
     * @memberof profiles.shapes.triangle
     * @param {object} opts
     * @param {number} opts.base
     * @param {number} opts.height
     * @returns ...
     */
    rightSilver: ({ base, height }) => {
      return createRtTriangle({ base, height, ratio: constants.SILVER_RATIO });
    },
    /**
     * Generates a right triangle with side lengths corresponding to the Bronze ratio.
     * @memberof profiles.shapes.triangle
     * @param {object} opts
     * @param {number} opts.base
     * @param {number} opts.height
     * @returns ...
     */
    rightBronze: ({ base, height }) => {
      return createRtTriangle({ base, height, ratio: constants.BRONZE_RATIO });
    },
    /**
     * Generates a right triangle with side lengths corresponding to the Copper ratio.
     * @memberof profiles.shapes.triangle
     * @param {object} opts
     * @param {number} opts.base
     * @param {number} opts.height
     * @returns ...
     */
    rightCopper: ({ base, height }) => {
      return createRtTriangle({ base, height, ratio: constants.COPPER_RATIO });
    },
  }

  return triangles
}

module.exports = { init: triangleInit }
