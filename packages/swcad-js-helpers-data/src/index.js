"use strict"

const constants = require('./constants')
const functions = require('./functions')
const standards = require('./standards')

const dataInit = ({ jscad, swcadJs }) => {
    /**
     * Data
     * @namespace data
     * @author R. J. Salvador (Salvador Workshop)
     */

    const data = {
        constants: constants,
        functions: functions,
        standards: standards.init({ jscad, swcadJs }),
    }

    return data
}

module.exports = {
    init: dataInit,
};
