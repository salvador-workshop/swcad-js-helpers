"use strict"

const posRectangle = require('./pos-rectangle');

const positionInit = ({ jscad, swcadJs, swcadJsHelpers }) => {

    /**
     * Functions leveraging JSCAD to get position data or move 2D/3D geometries.
     * @namespace position
     * @memberof calcs
     */
    return {
        rectangle: posRectangle.init({ jscad, swcadJs }),
    }
}

module.exports = { init: positionInit };
