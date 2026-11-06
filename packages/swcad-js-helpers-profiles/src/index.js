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
    const shapesCore = shapesModule.init({ jscad, swcadJs, swcadJsHelpers })
    const curve = curveModule.init({ jscad, swcadJs, swcadJsHelpers })

    let preLib = {
        ...swcadJsHelpers,
        profiles: {
            shapes: shapesCore,
            curve,
        }
    }

    const shapes = {
        ...shapesCore,
        rectangle: {
            ...shapesCore.rectangle,
            frame: rectFrameModule.init({ jscad, swcadJs, swcadJsHelpers: preLib }),
        }
    }

    preLib = {
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
    }
}

module.exports = {
    init: profilesInit,
};
