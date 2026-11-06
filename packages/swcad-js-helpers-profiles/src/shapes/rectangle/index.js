"use strict"

const rectangleInit = ({ jscad, swcadJs, swcadJsHelpers }) => {
    const { rectangle } = jscad.primitives

    const { constants } = swcadJsHelpers.data

    //--------------
    //  RECTANGLES
    //--------------

    const createRect = ({ width, depth, ratio }) => {
        const validSize = [
            width || depth / ratio,
            depth || width * ratio,
        ]
        return rectangle({ size: validSize });
    }

    /**
     * Rectangle profiles
     * @memberof profiles.shapes
     * @namespace rectangle
     */
    const rectangles = {
        /**
         * ...
         * @memberof profiles.shapes.rectangle
         * @param {object} opts
         * @returns ...
         */
        golden: ({ width, depth }) => {
            return createRect({ width, depth, ratio: constants.PHI });
        },
        /**
         * ...
         * @memberof profiles.shapes.rectangle
         * @param {object} opts
         * @returns ...
         */
        sixtyThirty: ({ width, depth }) => {
            return createRect({ width, depth, ratio: 2 });
        },
        /**
         * ...
         * @memberof profiles.shapes.rectangle
         * @param {object} opts
         * @returns ...
         */
        silver: ({ width, depth }) => {
            return createRect({ width, depth, ratio: constants.SILVER_RATIO });
        },
        /**
         * ...
         * @memberof profiles.shapes.rectangle
         * @param {object} opts
         * @returns ...
         */
        bronze: ({ width, depth }) => {
            return createRect({ width, depth, ratio: constants.BRONZE_RATIO });
        },
        /**
         * ...
         * @memberof profiles.shapes.rectangle
         * @param {object} opts
         * @returns ...
         */
        copper: ({ width, depth }) => {
            return createRect({ width, depth, ratio: constants.COPPER_RATIO });
        },
        /**
         * ...
         * @memberof profiles.shapes.rectangle
         * @param {object} opts
         * @returns ...
         */
        superGolden: ({ width, depth }) => {
            return createRect({ width, depth, ratio: constants.SUPERGOLDEN_RATIO });
        },
        /**
         * ...
         * @memberof profiles.shapes.rectangle
         * @param {object} opts
         * @returns ...
         */
        plastic: ({ width, depth }) => {
            return createRect({ width, depth, ratio: constants.PLASTIC_RATIO });
        },
    }

    return {
        ...rectangles,
    }
}

module.exports = {
    init: rectangleInit,
};
