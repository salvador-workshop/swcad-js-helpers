"use strict"

/**
 * ...
 * @memberof data
 * @namespace standards
 */

const standards = ({ jscad, swcadJs }) => {

    const {
        math,
    } = swcadJs.calcs

    const pegboard = {
        /**
         * Pegboard_Spacing
         * @memberof data.standards
         */
        PEGBOARD_SPACING: math.inchesToMm(1),
        /**
         * Pegboard_Hole_Diam
         * @memberof data.standards
         */
        PEGBOARD_HOLE_DIAM: math.inchesToMm(7 / 32),
        /**
         * Micro_Pegboard_Spacing
         * @memberof data.standards
         */
        MICRO_PEGBOARD_SPACING: math.inchesToMm(1 / 2),
        /**
         * Micro_Pegboard_Hole_Diam
         * @memberof data.standards
         */
        MICRO_PEGBOARD_HOLE_DIAM: math.inchesToMm(1 / 8),
    }

    const gridfinity = {
        /**
         * Gridfinity_Spacing
         * @memberof data.standards
         */
        GRIDFINITY_SPACING: 42,
        /**
         * Gridfinity_Rail_Width
         * @memberof data.standards
         */
        GRIDFINITY_RAIL_WIDTH: 7,
    }

    return {
        pegboard,
        gridfinity,
    }
}

module.exports = { init: standards };
