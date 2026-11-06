"use strict"

const geoTriangleModule = require('./geo-rectangle');

const geometryInit = ({ jscad, swcadJs, swcadJsHelpers }) => {

    /**
     * ...
     * @namespace geometry
     * @memberof calcs
     */
    return {
        triangle: geoTriangleModule.init({ jscad, swcadJs }),
    }
}

module.exports = { init: geometryInit };
