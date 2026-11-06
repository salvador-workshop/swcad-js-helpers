"use strict"

const coreInit = ({ jscad, swcadJs }) => {

    /**
     * First step to building the library
     * */

    const assemblyData = require('swcad-js-helpers-data').init({ jscad, swcadJs })

    let swcadJsHelpersAssembly = {
        calcs: null,
        components: null,
        data: assemblyData,
        profiles: null,
        utils: null,
    }

    /**
     * Intermediate step to building the library
     * */

    const assemblyCalcs = require('swcad-js-helpers-calcs').init({ jscad, swcadJs, swcadJsHelpers: swcadJsHelpersAssembly })
    swcadJsHelpersAssembly.calcs = assemblyCalcs

    const assemblyProfiles = require('swcad-js-helpers-profiles').init({ jscad, swcadJs, swcadJsHelpers: swcadJsHelpersAssembly })
    swcadJsHelpersAssembly.profiles = assemblyProfiles

    const assemblyComponents = require('swcad-js-helpers-components').init({ jscad, swcadJs, swcadJsHelpers: swcadJsHelpersAssembly })
    swcadJsHelpersAssembly.components = assemblyComponents

    const assemblyUtils = require('swcad-js-helpers-utils').init({ jscad, swcadJs, swcadJsHelpers: swcadJsHelpersAssembly })
    swcadJsHelpersAssembly.utils = assemblyUtils


    /**
     * User-facing library
     * */
    const swcadJsHelpers = {
        calcs: swcadJsHelpersAssembly.calcs,
        components: swcadJsHelpersAssembly.components,
        data: swcadJsHelpersAssembly.data,
        profiles: swcadJsHelpersAssembly.profiles,
        utils: swcadJsHelpersAssembly.utils,
    }

    return swcadJsHelpers
}

module.exports = {
    init: coreInit,
};
