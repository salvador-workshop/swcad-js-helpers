"use strict"

const archBuilder2d = ({ jscad, swcadJs, swcadJsHelpers }) => {
  const { path2, geom2 } = jscad.geometries
  const { arc } = jscad.primitives
  const { mirror, align } = jscad.transforms
  const { intersect } = jscad.booleans

  /**
   * Builds a one-centre (semicircular) arch.
   * @memberof profiles.arch
   * @param {Object} opts 
   * @param {number} opts.arcRadius - arc radius 
   * @returns ...
   */
  const onePtArch = (opts) => {
    const arcRad = opts.arcRadius;
    const baseArchPath = path2.close(arc({ radius: arcRad, endAngle: Math.PI, segments: 48 }));
    return geom2.fromPoints(path2.toPoints(baseArchPath));
  }

  /**
   * Builds a two-centre pointed arch.
   * @memberof profiles.arch
   * @param {Object} opts 
   * @param {number} opts.arcRadius - arc radius 
   * @param {number} opts.archWidth - arch width 
   * @returns ...
   */
  const twoPtArch = (opts) => {
    const arcRad = opts.arcRadius;
    const archWth = opts.archWidth;
    // 2D
    const baseArchPath = path2.close(arc({ radius: arcRad, endAngle: Math.PI, segments: 48 }));
    const baseArch = geom2.fromPoints(path2.toPoints(baseArchPath));
    const mirrorAxis = arcRad - (archWth / 2);
    const reflectedArch = mirror({ normal: [1, 0, 0], origin: [mirrorAxis, 0, 0] }, baseArch);
    return align({ modes: ['center', 'min', 'min'] }, intersect(baseArch, reflectedArch));
  }

  /**
   * Modelling functions for 2D arches.
   * @memberof profiles
   * @namespace arch
   */
  return {
    onePtArch,
    twoPtArch,
  }
}

module.exports = { init: archBuilder2d }
