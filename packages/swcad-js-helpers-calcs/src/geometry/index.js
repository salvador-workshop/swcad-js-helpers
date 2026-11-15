"use strict"

const geoRegPolyModule = require('./geo-reg-poly');
const geoTriangleModule = require('./geo-triangle');

const geometryInit = ({ jscad, swcadJs, swcadJsHelpers }) => {
    const regPoly = geoRegPolyModule.init({ jscad, swcadJs })
    const triangle = geoTriangleModule.init({ jscad, swcadJs })

    /**
     * Geometric calculations in 2D/3D space.
     * @namespace geometry
     * @memberof calcs
     */
    return {
        regPoly,
        triangle,
    }
}

module.exports = { init: geometryInit };
