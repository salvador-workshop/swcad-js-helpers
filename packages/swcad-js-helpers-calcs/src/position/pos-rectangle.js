"use strict"

/**
 * Calculations around rectangle positions.
 * @memberof calcs.position
 * @namespace rectangle
 */

const geoRectangle = ({ jscad, swcadJs }) => {
    const {
        measureBoundingBox,
    } = jscad.measurements;

    const { position } = swcadJs.calcs

    /**
     * Gets 3D bounding coordinates for a given rectangle.
     * @memberof calcs.position.rectangle
     * @param {object} rectGeom 
     * @returns ...
     */
    const getRectangleCoords = (rectGeom) => {
        return position.getGeomCoords(rectGeom)
    }

    /**
     * Gets 3D bounding corners for a given rectangle.
     * @memberof calcs.position.rectangle
     * @param {object} rectGeom 
     * @returns ...
     */
    const getRectangleCorners = (rectGeom) => {
        const coords = getRectangleCoords(rectGeom);
        return {
            c1: [coords.right, coords.front, 0], // (+X, -Y)
            c2: [coords.right, coords.back, 0], // (+X, +Y)
            c3: [coords.left, coords.back, 0], // (-X, +Y)
            c4: [coords.left, coords.front, 0], // (-X, -Y)
        }
    }

    return {
        getRectangleCorners,
    }
}

module.exports = { init: geoRectangle };
