"use strict"

const curveBuilder = ({ jscad, swcadJs, swcadJsHelpers }) => {
    const { rectangle, } = jscad.primitives
    const { subtract } = jscad.booleans
    const { bezier } = jscad.curves
    const { geom2, path2 } = jscad.geometries

    const { position } = swcadJs.calcs

    const { constants } = swcadJsHelpers.data

    const getBezierPts = (bezierCurve, segments) => {
        const points = [];
        const segmentsInput = segments - 1
        const totalLength = bezier.length(100, bezierCurve)
        const increment = totalLength / segmentsInput;
        for (let i = 0; i <= segmentsInput; i++) {
            const t = bezier.arcLengthToT({ distance: i * increment }, bezierCurve);
            const point = bezier.valueAt(t, bezierCurve);
            points.push(point);
        }
        return points;
    }

    const createRtCornerCurve = ({ width, depth, ratio }) => {
        const validSize = [
            width || depth / ratio,
            depth || width * ratio,
        ]
        const container = rectangle({ size: validSize })
        const bez = bezier.create([
            [0, 0],
            [0, validSize[1]],
            [validSize[0], validSize[1]]
        ])
        const segments = 12
        const bezPts = getBezierPts(bez, segments)
        const bezPath = path2.fromPoints({ closed: true }, [[0, validSize[1]], ...bezPts])
        const bezGeom = position.ctr(geom2.fromPoints(path2.toPoints(bezPath)))
        return subtract(container, bezGeom)
    }

    /**
     * Modelling functions for curves.
     * @memberof profiles
     * @namespace curve
     */
    const curves = {
        /**
         * Modelling functions for right-angle corner curves.
         * @memberof profiles.curve
         * @namespace rightCorner
         */
        rightCorner: {
            /**
             * Generates a right-angle corner curve with axis lengths corresponding to the Golden ratio.
             * @memberof profiles.curve.rightCorner
             * @param {object} opts
             * @param {number} opts.width
             * @param {number} opts.depth
             * @returns ...
             */
            golden: ({ width, depth }) => {
                return createRtCornerCurve({ width, depth, ratio: constants.PHI })
            },
            /**
             * Generates a right-angle corner curve with axis lengths corresponding to a 30-degree right triangle's sides.
             * @memberof profiles.curve.rightCorner
             * @param {object} opts
             * @param {number} opts.width
             * @param {number} opts.depth
             * @returns ...
             */
            sixtyThirty: ({ width, depth }) => {
                return createRtCornerCurve({ width, depth, ratio: 2 })
            },
            /**
             * Generates a right-angle corner curve with axis lengths corresponding to the Silver ratio.
             * @memberof profiles.curve.rightCorner
             * @param {object} opts
             * @param {number} opts.width
             * @param {number} opts.depth
             * @returns ...
             */
            silver: ({ width, depth }) => {
                return createRtCornerCurve({ width, depth, ratio: constants.SILVER_RATIO })
            },
            /**
             * Generates a right-angle corner curve with axis lengths corresponding to the Bronze ratio.
             * @memberof profiles.curve.rightCorner
             * @param {object} opts
             * @param {number} opts.width
             * @param {number} opts.depth
             * @returns ...
             */
            bronze: ({ width, depth }) => {
                return createRtCornerCurve({ width, depth, ratio: constants.BRONZE_RATIO })
            },
            /**
             * Generates a right-angle corner curve with axis lengths corresponding to the Copper ratio.
             * @memberof profiles.curve.rightCorner
             * @param {object} opts
             * @param {number} opts.width
             * @param {number} opts.depth
             * @returns ...
             */
            copper: ({ width, depth }) => {
                return createRtCornerCurve({ width, depth, ratio: constants.COPPER_RATIO })
            },
            /**
             * Generates a right-angle corner curve with axis lengths corresponding to the Super-golden ratio.
             * @memberof profiles.curve.rightCorner
             * @param {object} opts
             * @param {number} opts.width
             * @param {number} opts.depth
             * @returns ...
             */
            superGolden: ({ width, depth }) => {
                return createRtCornerCurve({ width, depth, ratio: constants.SUPERGOLDEN_RATIO })
            },
            /**
             * Generates a right-angle corner curve with axis lengths corresponding to the Plastic ratio.
             * @memberof profiles.curve.rightCorner
             * @param {object} opts
             * @param {number} opts.width
             * @param {number} opts.depth
             * @returns ...
             */
            plastic: ({ width, depth }) => {
                return createRtCornerCurve({ width, depth, ratio: constants.PLASTIC_RATIO })
            },
        },
    }

    return curves
}


module.exports = { init: curveBuilder }
