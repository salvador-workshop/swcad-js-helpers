"use strict"

const archBuilder3d = ({ jscad, swcadJs, swcadJsHelpers }) => {
  const { geom2 } = jscad.geometries
  const { extrudeRotate } = jscad.extrusions
  const { cuboid } = jscad.primitives
  const { translate, mirror, rotate } = jscad.transforms
  const { union, subtract } = jscad.booleans
  const { measureDimensions } = jscad.measurements;

  const { position } = swcadJs.calcs

  /**
   * Generates a one-centre (semicircular) arch using a given 2d cross-section profile.
   * @memberof components.arch
   * @param {Object} opts 
   * @param {number} opts.arcRadius - arc radius 
   * @param {geom2.Geom2} geomProfile - 2D cross-section profile
   * @returns ...
   */
  const onePtArch = (opts, geomProfile) => {
    const arcRad = opts.arcRadius;
    const profile = translate([arcRad, 0, 0], geomProfile);
    const baseArch = extrudeRotate({ segments: 48, angle: Math.PI }, profile);

    return position.ctrMin(rotate([Math.PI / 2, 0, 0], baseArch))
  }

  /**
   * Generates a two-centre pointed arch using a given 2d cross-section profile.
   * @memberof components.arch
   * @param {Object} opts 
   * @param {number} opts.arcRadius - arc radius 
   * @param {number} opts.archWidth - arch width 
   * @param {geom2.Geom2} geomProfile - 2D cross-section profile
   * @returns ...
   */
  const twoPtArch = (opts, geomProfile) => {
    const arcRad = opts.arcRadius;
    const archWth = opts.archWidth;
    const profileSpecs = measureDimensions(geomProfile);
    const profile = translate([profileSpecs[0] / 2 + arcRad, 0, 0], geomProfile);
    const baseArch = extrudeRotate({ segments: 48, angle: Math.PI }, profile);

    const cutawaySize = Math.max(archWth, arcRad) * 2;
    const mirrorAxis = arcRad - (archWth / 2);
    const cutawayOffset = (cutawaySize / -2) + mirrorAxis;
    const archCutaway = translate([cutawayOffset, cutawaySize / 2, 0], cuboid(
      {
        size: [cutawaySize, cutawaySize, profileSpecs[1] * 1.25],
        center: [0, 0, 0]
      }
    ))
    const cutArch = subtract(baseArch, archCutaway);
    const reflectedArch = mirror({ normal: [1, 0, 0], origin: [mirrorAxis, 0, 0] }, cutArch);

    return position.ctrMin(
      rotate([Math.PI / 2, 0, 0], union(cutArch, reflectedArch))
    );
  }

  /**
   * Modelling functions for 3D arches. Input 2D profiles must be centred at [0, 0, 0].
   * @memberof components
   * @namespace arch
   */
  return {
    onePtArch,
    twoPtArch,
  }
}

module.exports = { init: archBuilder3d }
