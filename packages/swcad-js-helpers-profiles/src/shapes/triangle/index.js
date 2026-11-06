"use strict"

const triangleInit = ({ jscad, swcadJs, swcadJsHelpers }) => {
  const { triangle } = jscad.primitives

  const { position } = swcadJsHelpers.calcs
  const { constants } = swcadJsHelpers.data

  //-------------
  //  TRIANGLES
  //-------------

  const createRtTriangle = ({ base, height, ratio }) => {
    const validOpts = {
      short: base || height / ratio,
      long: height || base * ratio
    }
    const triOpts = position.triangle.rightTriangleOpts({ ...validOpts })
    return triangle(triOpts);
  }

  /**
   * Triangle profiles
   * @memberof profiles.shapes
   * @namespace triangle
   */
  const triangles = {
    /**
     * ...
     * @memberof profiles.shapes.triangle
     * @param {object} opts
     * @returns ...
     */
    equilateral: ({ base }) => {
      return triangle({ type: 'SSS', values: [base, base, base] })
    },
    /**
     * ...
     * @memberof profiles.shapes.triangle
     * @param {object} opts
     * @returns ...
     */
    right45: ({ base }) => {
      const triOpts = position.triangle.rightTriangleOpts({ short: base, long: base })
      return triangle(triOpts);
    },
    /**
     * ...
     * @memberof profiles.shapes.triangle
     * @param {object} opts
     * @returns ...
     */
    right30: ({ base, height }) => {
      return createRtTriangle({ base, height, ratio: 2 });
    },
    /**
     * ...
     * @memberof profiles.shapes.triangle
     * @param {object} opts
     * @returns ...
     */
    rightGolden: ({ base, height }) => {
      return createRtTriangle({ base, height, ratio: constants.PHI });
    },
    /**
     * ...
     * @memberof profiles.shapes.triangle
     * @param {object} opts
     * @returns ...
     */
    rightSilver: ({ base, height }) => {
      return createRtTriangle({ base, height, ratio: constants.SILVER_RATIO });
    },
    /**
     * ...
     * @memberof profiles.shapes.triangle
     * @param {object} opts
     * @returns ...
     */
    rightBronze: ({ base, height }) => {
      return createRtTriangle({ base, height, ratio: constants.BRONZE_RATIO });
    },
    /**
     * ...
     * @memberof profiles.shapes.triangle
     * @param {object} opts
     * @returns ...
     */
    rightCopper: ({ base, height }) => {
      return createRtTriangle({ base, height, ratio: constants.COPPER_RATIO });
    },
  }

  return triangles
}

module.exports = { init: triangleInit }
