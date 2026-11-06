"use strict"

const archModule = require('./arch')
const foilModule = require('./foil')

const componentsInit = ({ jscad, swcadJs, swcadJsHelpers }) => {
    const components = {
        arch: archModule.init({ jscad, swcadJs, swcadJsHelpers }),
        foil: foilModule.init({ jscad, swcadJs, swcadJsHelpers }),
    }

    return components
}

module.exports = {
    init: componentsInit,
};
