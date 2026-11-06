"use strict"

const geoTriangleModule = require('./geo-rectangle');

const geometryInit = ({ jscad, swcadJs, swcadJsHelpers }) => {

    /**
     * Geometric calculations in 2D/3D space.
     * @namespace geometry
     * @memberof calcs
     */
    return {
        triangle: geoTriangleModule.init({ jscad, swcadJs }),
    }
}

module.exports = { init: geometryInit };
