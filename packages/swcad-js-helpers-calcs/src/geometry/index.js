"use strict"

const geoRegPolyModule = require('./geo-reg-poly');
const geoTriangleModule = require('./geo-triangle');

const geometryInit = ({ jscad, swcadJs, swcadJsHelpers }) => {
    const regPoly = geoRegPolyModule.init({ jscad, swcadJs, swcadJsHelpers })
    const triangle = geoTriangleModule.init({ jscad, swcadJs, swcadJsHelpers })

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
