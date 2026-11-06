"use strict"

const archModule = require('./arch')
const curveModule = require('./curve')
const foilModule = require('./foil')
const rectFrameModule = require('./rect-frame')
const shapesModule = require('./shapes')

/**
 * Builds various 2D profiles
 * @namespace profiles
 */

const profilesInit = ({ jscad, swcadJs, swcadJsHelpers }) => {
    const shapes = shapesModule.init({ jscad, swcadJs, swcadJsHelpers })
    const curve = curveModule.init({ jscad, swcadJs, swcadJsHelpers })

    let preLib = {
        ...swcadJsHelpers,
        profiles: {
            shapes,
            curve,
        }
    }

    return {
        arch: archModule.init({ jscad, swcadJs, swcadJsHelpers: preLib }),
        curve,
        foil: foilModule.init({ jscad, swcadJs, swcadJsHelpers: preLib }),
        shapes,
        rectFrame: rectFrameModule.init({ jscad, swcadJs, swcadJsHelpers: preLib }),
    }
}

module.exports = {
    init: profilesInit,
};
