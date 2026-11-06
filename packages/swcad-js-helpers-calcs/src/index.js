"use strict"

const positionModule = require('./position')

const calcsInit = ({ jscad, swcadJs, swcadJsHelpers }) => {
    const position = positionModule.init({ jscad, swcadJs, swcadJsHelpers })

    /**
     * Calculations
     * @namespace calcs
     * @author R. J. Salvador (Salvador Workshop)
     */

    const calcs = {
        position,
    }

    return calcs
}

module.exports = {
    init: calcsInit,
};
