"use strict"

const archModule = require('./arch')
const curveModule = require('./curve')
const foilModule = require('./foil')
const rectFrameModule = require('./rect-frame')
const shapesModule = require('./shapes')

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
        arch: archModule.init({ jscad, swcadJs: preLib }),
        curve,
        foil: foilModule.init({ jscad, swcadJs: preLib }),
        shapes,
    }
}

module.exports = {
    init: profilesInit,
};
