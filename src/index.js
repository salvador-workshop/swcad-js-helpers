const coreModule = require('swcad-js-helpers-core');

const init = ({ jscad, swcadJs }) => {
    const swcadJsHelpers = coreModule.init({ jscad, swcadJs })
    return swcadJsHelpers;
}

module.exports = { init };
