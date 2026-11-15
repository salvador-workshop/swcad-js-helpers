"use strict"

const posRectangle = require('./pos-rectangle');

const positionInit = ({ jscad, swcadJs, swcadJsHelpers }) => {
    const {
        measureDimensions,
        measureBoundingBox,
    } = jscad.measurements

    /**
     * Measures key info (boundingBox, dimensions).
     * @memberof calcs.position
     * @param {object} inputGeom 
     * @returns ...
     */
    const measure = (inputGeom) => {
        return {
            boundingBox: measureBoundingBox(inputGeom),
            dimensions: measureDimensions(inputGeom),
        }
    };

    /**
     * Gets 3D bounding coordinates of a given geometry.
     * @memberof calcs.position
     * @param {object} geom 
     * @returns Bounding coords (right, left, back, front, top, bottom)
     */
    const getGeomCoords = (geom) => {
        const bBox = measureBoundingBox(geom);

        return {
            right: bBox[1][0], // (+X)
            left: bBox[0][0], // (-X)
            back: bBox[1][1], // (+Y)
            front: bBox[0][1], // (-Y)
            top: bBox[1][2], // (+Z)
            bottom: bBox[0][2], // (-Z)
        }
    }

    /**
     * Finds long axis of a coord set.
     * @memberof calcs.position
     * @param {number[]} size - [x, y, z]
     * @returns axis with longest value (either "x", "y", or "z") or `null` if invalid
     */
    const findLongAxis = (size) => {
        const is2d = size.length == 2 && size.every(sizeNum => typeof sizeNum === 'number' && sizeNum > 0)
        const is3d = size.length == 3 && size.every(sizeNum => typeof sizeNum === 'number' && sizeNum > 0)

        if (!is2d && !is3d) {
            return null
        }

        const maxDim = Math.max(...size)
        const maxDimIdx = size.indexOf(maxDim)
        const axes = ['x', 'y', 'z']

        return axes[maxDimIdx]
    }

    const setupCalcsPosition = {
        measure,
        getGeomCoords,
        findLongAxis,
    }

    const preHelpers = {
        ...swcadJsHelpers,
        calcs: {
            position: setupCalcsPosition
        }
    }

    /**
     * Functions leveraging JSCAD to get position data or move 2D/3D geometries.
     * @namespace position
     * @memberof calcs
     */
    return {
        ...setupCalcsPosition,
        rectangle: posRectangle.init({ jscad, swcadJs, swcadJsHelpers: preHelpers }),
    }
}

module.exports = { init: positionInit };
