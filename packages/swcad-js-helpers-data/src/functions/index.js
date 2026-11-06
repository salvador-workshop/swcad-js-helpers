/**
 * Functions that support data initialization and access.
 * @memberof data
 * @namespace functions
 */

/**
 * Converts the given string to camel case, using spaces/whitespace as delimiters.
 * @memberof data.functions
 * @param {string} str string with whitespace
 * @returns camel-case string
 */
const camelCase = (str) => {
    // Using replace method with regEx
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}

/**
 * Converts constant-style strings (capitals w/ underscores) to camel case.
 * @memberof data.functions
 * @param {string} str constant-style string (capitals w/ underscores)
 * @returns camel-case string
 */
const constantToCamelCase = (str) => {
    return camelCase(str.replaceAll('_', ' ').toLowerCase())
}

module.exports = {
    camelCase,
    constantToCamelCase
}
