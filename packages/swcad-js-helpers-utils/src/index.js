"use strict"

const colors = require('./colors')
const layout = require('./layout')
const palette = require('./palette')

const utilsInit = ({ jscad, swcadJs, swcadJsHelpers }) => {
    const coloursCore = colors.init({ jscad, swcadJs, swcadJsHelpers })

    const preLib = {
        ...swcadJsHelpers,
        utils: {
            colors: coloursCore
        },
    }

    /**
     * Utils
     * @namespace utils
     * @author R. J. Salvador (Salvador Workshop)
     */

    const utils = {
        colors: coloursCore,
        layout: layout.init({ jscad, swcadJs, swcadJsHelpers: preLib }),
        palette: palette.init({ jscad, swcadJs, swcadJsHelpers: preLib }),
    }

    return utils
}

module.exports = {
    init: utilsInit,
};
