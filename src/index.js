const coreModule = require('swcad-js-helpers-core');

const init = ({ jscad }) => {
    const swcadJs = coreModule.init({ jscad })
    return swcadJs;
}

module.exports = { init };
