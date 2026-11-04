"use strict"

const curveModule = require('./curve')
const rectFrameModule = require('./shapes/rectangle/frame-rect')
const shapesModule = require('./shapes')
const structureModule = require('./structure')

const profilesInit = ({ jscad, swcadJs }) => {
    const shapesCore = shapesModule.init({ jscad, swcadJs })
    const curve = curveModule.init({ jscad, swcadJs })

    let preLib = {
        ...swcadJs,
        profiles: {
            shapes: shapesCore,
            curve,
        }
    }

    const shapes = {
        ...shapesCore,
        rectangle: {
            ...shapesCore.rectangle,
            frame: rectFrameModule.init({ jscad, swcadJs: preLib }),
        }
    }

    preLib = {
        ...swcadJs,
        profiles: {
            shapes,
            curve,
        }
    }

    return {
        shapes,
        curve,
        structure: structureModule.init({ jscad, swcadJs: preLib }),
    }
}

module.exports = {
    init: profilesInit,
};
