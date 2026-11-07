"use strict"

/**
 * Modelling functions for 2D "foils" (geometric shapes formed by overlapping circles) such as trefoils, quatrefoils, cinquefoils, etc.
 * @memberof profiles
 * @namespace foil
 */

const foilBuilder2d = ({ jscad, swcadJs, swcadJsHelpers }) => {
    const { union } = jscad.booleans
    const { rotate, align } = jscad.transforms
    const { circle } = jscad.primitives

    /**
     * Generates a 2D n-foil opening
     * @memberof profiles.foil
     * @param {Object} opts
     * @param {number} opts.numLobes - number of lobes
     * @param {number} opts.radius - radius of container circle
     * @param {string} opts.lobeRadiusType - "inSlice", "halfRadius", "mean"
     * @access private
     * @returns ...
     */
    const buildFoil2d = (opts) => {
        const centralAngle = Math.PI * 2 / opts.numLobes;
        const sinHalfCentral = Math.sin(centralAngle / 2);

        // this radius has zero overlap between lobe circles
        const lobeRadiusInSlice = sinHalfCentral / (1 + sinHalfCentral) * opts.radius;
        const lobeRadiusDiff = opts.radius / 2 - lobeRadiusInSlice;
        const lobeRadiusMean = lobeRadiusInSlice + (lobeRadiusDiff / 2);

        const lobeRadType = opts.lobeRadiusType || 'mean'
        let lobeRadius = lobeRadiusMean;
        if (lobeRadType === 'inSlice') {
            lobeRadius = lobeRadiusInSlice
        } else if (lobeRadType === 'halfRadius') {
            lobeRadius = opts.radius / 2
        }

        const lobeCircle = circle({ radius: lobeRadius });
        const alignedLobeCircle = align({ modes: ['none', 'min'], relativeTo: [0, -opts.radius] }, lobeCircle);
        let centreCircle = lobeCircle;
        if (opts.numLobes === 3) {
            // special case for trefoils
            if (lobeRadType === 'mean') {
                centreCircle = circle({ radius: opts.radius * 0.435 });
            }
            else if (lobeRadType === 'inSlice') {
                centreCircle = circle({ radius: opts.radius * 0.3 });
            }
        }

        const rotationAngles = [];
        for (let index = 1; index < opts.numLobes; index++) {
            rotationAngles.push(centralAngle * index);
        }

        const rotatedLobes = rotationAngles.map(angle => {
            return rotate([0, 0, angle], alignedLobeCircle);
        });

        return union(centreCircle, alignedLobeCircle, ...rotatedLobes);
    }

    /**
     * Generates a trefoil outline.
     * @memberof profiles.foil
     * @param {Object} opts
     * @param {number} opts.radius - radius of container circle
     * @param {string} opts.lobeRadiusType - "inSlice", "halfRadius", "mean"
     * @returns ...
     */
    const trefoil = (opts) => {
        return buildFoil2d({ ...opts, numLobes: 3 });
    }

    /**
     * Generates a quatrefoil outline.
     * @memberof profiles.foil
     * @param {Object} opts
     * @param {number} opts.radius - radius of container circle
     * @param {string} opts.lobeRadiusType - "inSlice", "halfRadius", "mean"
     * @returns ...
     */
    const quatrefoil = (opts) => {
        return buildFoil2d({ ...opts, numLobes: 4 });
    }

    /**
     * Generates a cinquefoil outline.
     * @memberof profiles.foil
     * @param {Object} opts
     * @param {number} opts.radius - radius of container circle
     * @param {string} opts.lobeRadiusType - "inSlice", "halfRadius", "mean"
     * @returns ...
     */
    const cinquefoil = (opts) => {
        return buildFoil2d({ ...opts, numLobes: 5 });
    }

    /**
     * Generates a sexfoil outline.
     * @memberof profiles.foil
     * @param {Object} opts
     * @param {number} opts.radius - radius of container circle
     * @param {string} opts.lobeRadiusType - "inSlice", "halfRadius", "mean"
     * @returns ...
     */
    const sexfoil = (opts) => {
        return buildFoil2d({ ...opts, numLobes: 6 });
    }

    /**
     * Generates an octofoil outline.
     * @memberof profiles.foil
     * @param {Object} opts
     * @param {number} opts.radius - radius of container circle
     * @param {string} opts.lobeRadiusType - "inSlice", "halfRadius", "mean"
     * @returns ...
     */
    const octofoil = (opts) => {
        return buildFoil2d({ ...opts, numLobes: 8 });
    }

    return {
        trefoil,
        quatrefoil,
        cinquefoil,
        sexfoil,
        octofoil,
    }
}

module.exports = { init: foilBuilder2d };
