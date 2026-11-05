"use strict"

const coreInit = ({ jscad }) => {

    /**
     * First step to building the library
     * */
    const swcadJsHelpersCore = {
        calcs: null,
        components: null,
        data: require('swcad-js-helpers-data').init({ jscad }),
        profiles: null,
        utils: null,
    }


    /**
     * Intermediate step to building the library
     * */
    let swcadJsHelpersAssembly = swcadJsHelpersCore

    const assemblyCalcs = require('swcad-js-helpers-calcs').init({ jscad, swcadJs: swcadJsHelpersAssembly })
    swcadJsHelpersAssembly.calcs = assemblyCalcs

    const assemblyProfiles = require('swcad-js-helpers-profiles').init({ jscad, swcadJs: swcadJsHelpersAssembly })
    swcadJsHelpersAssembly.profiles = assemblyProfiles

    const assemblyComponents = require('swcad-js-helpers-components').init({ jscad, swcadJs: swcadJsHelpersAssembly })
    swcadJsHelpersAssembly.components = assemblyComponents

    const assemblyUtils = require('swcad-js-helpers-utils').init({ jscad, swcadJs: swcadJsHelpersAssembly })
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
