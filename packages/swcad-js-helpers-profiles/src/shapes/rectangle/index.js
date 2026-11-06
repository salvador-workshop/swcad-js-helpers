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
     * Modelling functions for various rectangles.
     * @memberof profiles.shapes
     * @namespace rectangle
     */
    const rectangles = {
        /**
         * Generates a rectangle with side lengths corresponding to the Golden ratio.
         * @memberof profiles.shapes.rectangle
         * @param {object} opts
         * @returns ...
         */
        golden: ({ width, depth }) => {
            return createRect({ width, depth, ratio: constants.PHI });
        },
        /**
         * Generates a rectangle with side lengths corresponding to a 30-degree right triangle's sides.
         * @memberof profiles.shapes.rectangle
         * @param {object} opts
         * @returns ...
         */
        sixtyThirty: ({ width, depth }) => {
            return createRect({ width, depth, ratio: 2 });
        },
        /**
         * Generates a rectangle with side lengths corresponding to the Silver ratio.
         * @memberof profiles.shapes.rectangle
         * @param {object} opts
         * @returns ...
         */
        silver: ({ width, depth }) => {
            return createRect({ width, depth, ratio: constants.SILVER_RATIO });
        },
        /**
         * Generates a rectangle with side lengths corresponding to the Bronze ratio.
         * @memberof profiles.shapes.rectangle
         * @param {object} opts
         * @returns ...
         */
        bronze: ({ width, depth }) => {
            return createRect({ width, depth, ratio: constants.BRONZE_RATIO });
        },
        /**
         * Generates a rectangle with side lengths corresponding to the Copper ratio.
         * @memberof profiles.shapes.rectangle
         * @param {object} opts
         * @returns ...
         */
        copper: ({ width, depth }) => {
            return createRect({ width, depth, ratio: constants.COPPER_RATIO });
        },
        /**
         * Generates a rectangle with side lengths corresponding to the Super-golden ratio.
         * @memberof profiles.shapes.rectangle
         * @param {object} opts
         * @returns ...
         */
        superGolden: ({ width, depth }) => {
            return createRect({ width, depth, ratio: constants.SUPERGOLDEN_RATIO });
        },
        /**
         * Generates a rectangle with side lengths corresponding to the Plastic ratio.
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
