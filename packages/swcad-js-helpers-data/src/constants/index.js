"use strict"

const tri45Factor = Math.sqrt(2)

const phi = 1.6180339887

/**
 * System constants
 * @namespace constants
 * @memberof data
 */

const constants = {
    /**
     * Plastic_Ratio
     * @memberof data.constants
     * @constant {number}
     */
    PLASTIC_RATIO: 1.3247179572,
    /**
     * Supergolden_Ratio
     * @memberof data.constants
     * @constant {number}
     */
    SUPERGOLDEN_RATIO: 1.4655712319,
    /**
     * Golden_Ratio
     * @memberof data.constants
     * @constant {number}
     */
    GOLDEN_RATIO: phi,
    /**
     * Silver_Ratio
     * @memberof data.constants
     * @constant {number}
     */
    SILVER_RATIO: 1 + tri45Factor,         // 2.4142
    /**
     * Bronze_Ratio
     * @memberof data.constants
     * @constant {number}
     */
    BRONZE_RATIO: 3 + Math.sqrt(13) / 2,     // 3.3028
    /**
     * Copper_Ratio
     * @memberof data.constants
     * @constant {number}
     */
    COPPER_RATIO: 2 + Math.sqrt(5),     // 4.2361
    /**
     * Nickel_Ratio
     * @memberof data.constants
     * @constant {number}
     */
    NICKEL_RATIO: 5 + Math.sqrt(29),     // 5.1925
}

module.exports = constants;
