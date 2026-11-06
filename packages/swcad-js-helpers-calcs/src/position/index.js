"use strict"

const posRectangle = require('./pos-rectangle');

const positionInit = ({ jscad, swcadJs, swcadJsHelpers }) => {

    /**
     * ...
     * @namespace position
     * @memberof calcs
     */
    return {
        rectangle: posRectangle.init({ jscad, swcadJs }),
    }
}

module.exports = { init: positionInit };
