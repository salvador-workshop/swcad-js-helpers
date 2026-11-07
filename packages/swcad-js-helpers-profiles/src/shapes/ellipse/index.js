"use strict"

const ellipseInit = ({ jscad, swcadJs, swcadJsHelpers }) => {
  const { ellipse } = jscad.primitives

  const { constants } = swcadJsHelpers.data

  //-----------
  //  ELLIPSE
  //-----------

  const createEllipse = ({ width, depth, ratio }) => {
    const validSize = [
      width || depth / ratio,
      depth || width * ratio,
    ]
    return ellipse({ radius: validSize });
  }

  /**
   * Modelling functions for various ellipses.
   * @memberof profiles.shapes
   * @namespace ellipse
   */
  const ellipses = {
    /**
     * Generates an ellipse with axis lengths corresponding to the Golden ratio.
     * @memberof profiles.shapes.ellipse
     * @param {object} opts
     * @param {number} opts.width
     * @param {number} opts.depth
     * @returns ...
     */
    golden: ({ width, depth }) => {
      return createEllipse({ width, depth, ratio: constants.PHI })
    },
    /**
     * Generates an ellipse with axis lengths corresponding to a 30-degree right triangle's sides.
     * @memberof profiles.shapes.ellipse
     * @param {object} opts
     * @param {number} opts.width
     * @param {number} opts.depth
     * @returns ...
     */
    sixtyThirty: ({ width, depth }) => {
      return createEllipse({ width, depth, ratio: 2 })
    },
    /**
     * Generates an ellipse with axis lengths corresponding to the Silver ratio.
     * @memberof profiles.shapes.ellipse
     * @param {object} opts
     * @param {number} opts.width
     * @param {number} opts.depth
     * @returns ...
     */
    silver: ({ width, depth }) => {
      return createEllipse({ width, depth, ratio: constants.SILVER_RATIO })
    },
    /**
     * Generates an ellipse with axis lengths corresponding to the Bronze ratio.
     * @memberof profiles.shapes.ellipse
     * @param {object} opts
     * @param {number} opts.width
     * @param {number} opts.depth
     * @returns ...
     */
    bronze: ({ width, depth }) => {
      return createEllipse({ width, depth, ratio: constants.BRONZE_RATIO })
    },
    /**
     * Generates an ellipse with axis lengths corresponding to the Copper ratio.
     * @memberof profiles.shapes.ellipse
     * @param {object} opts
     * @param {number} opts.width
     * @param {number} opts.depth
     * @returns ...
     */
    copper: ({ width, depth }) => {
      return createEllipse({ width, depth, ratio: constants.COPPER_RATIO })
    },
    /**
     * Generates an ellipse with axis lengths corresponding to the Super-golden ratio.
     * @memberof profiles.shapes.ellipse
     * @param {object} opts
     * @param {number} opts.width
     * @param {number} opts.depth
     * @returns ...
     */
    superGolden: ({ width, depth }) => {
      return createEllipse({ width, depth, ratio: constants.SUPERGOLDEN_RATIO })
    },
    /**
     * Generates an ellipse with axis lengths corresponding to the Plastic ratio.
     * @memberof profiles.shapes.ellipse
     * @param {object} opts
     * @param {number} opts.width
     * @param {number} opts.depth
     * @returns ...
     */
    plastic: ({ width, depth }) => {
      return createEllipse({ width, depth, ratio: constants.PLASTIC_RATIO })
    },
  }

  return ellipses
}

module.exports = { init: ellipseInit }
