"use strict"

const posRectangle = require('./pos-rectangle');
const posTriangle = require('./pos-triangle');

const positionUtils = ({ jscad, swcadJs, swcadJsHelpers }) => {

    return {
        rectangle: posRectangle.init({ jscad, swcadJs }),
        triangle: posTriangle.init({ jscad, swcadJs }),
    }
}

module.exports = { init: positionUtils };
