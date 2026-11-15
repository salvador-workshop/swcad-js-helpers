"use strict"

const geometryModule = require('./geometry')
const positionModule = require('./position')

const calcsInit = ({ jscad, swcadJs, swcadJsHelpers }) => {
    const geometry = geometryModule.init({ jscad, swcadJs, swcadJsHelpers })
    const position = positionModule.init({ jscad, swcadJs, swcadJsHelpers })

    /**
     * Math calculations and basic JSCAD operations.
     * @namespace calcs
     * @author R. J. Salvador (Salvador Workshop)
     */
    const calcs = {
        geometry,
        position,
    }

    return calcs
}

module.exports = {
    init: calcsInit,
};
