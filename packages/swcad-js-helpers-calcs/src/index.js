"use strict"

const geometryModule = require('./geometry')
const positionModule = require('./position')
const transformModule = require('./transform')

const calcsInit = ({ jscad, swcadJs, swcadJsHelpers }) => {
    const geometry = geometryModule.init({ jscad, swcadJs, swcadJsHelpers })
    const position = positionModule.init({ jscad, swcadJs, swcadJsHelpers })

    const initCalcs = {
        position,
    }

    const preLib = {
        ...swcadJsHelpers,
        calcs: initCalcs
    }

    const transform = transformModule.init({ jscad, swcadJs, swcadJsHelpers: preLib })

    const helpersCalcs = {
        ...initCalcs,
        transform,
    }

    /**
     * Math calculations and basic JSCAD operations.
     * @namespace calcs
     * @author R. J. Salvador (Salvador Workshop)
     */
    const calcs = {
        ...helpersCalcs,
    }

    return calcs
}

module.exports = {
    init: calcsInit,
};
