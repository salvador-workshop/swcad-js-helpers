# swcad-js-helpers

...

---

## SWCAD-JS Helpers API

SWCAD-JS Helper functions and utilities.

---

<br/>

### DATA

Mostly math constants and common dimensions/options.

---

### data.constants

Numeric constants and ratios.

---

### data.functions

Functions that support data initialization and access.

#### camelCase(str)

Converts the given string to camel case, using spaces/whitespace as delimiters.

#### constantToCamelCase(str)

Converts constant-style strings (capitals w/ underscores) to camel case.

---

### data.standards

Dimensions and options used throughout the SWCAD-JS system.

---

<br/>

### CALCS

Math calculations and basic JSCAD operations.

---

### calcs.position

Functions leveraging JSCAD to get position data or move 2D/3D geometries.

---

### calcs.position.rectangle

Calculations around rectangle positions.

#### getRectangleCoords(rectGeom)

Gets 3D bounding coordinates for a given rectangle.

#### getRectangleCorners(rectGeom)

Gets 3D bounding corners for a given rectangle.

---

### calcs.geometry

Geometric calculations in 2D/3D space.

---

### calcs.geometry.triangle

Geometric calculations for triangles.

#### rightTriangleOpts(opts)

Sets up triangle creation from the given parameters. If valid, returns triangle creation strategy (AAS, ASA, SAS, etc) and values for `jscad.primitives.triangle()`. If invalid, returns `null`

---

<br/>

### PROFILES

Modelling functions that generate 2D geometries.

---

### profiles.arch

Modelling functions for 2D arches.

#### onePtArch(opts)

Builds a one-centre (semicircular) arch.

#### twoPtArch(opts)

Builds a two-centre pointed arch.

---

### profiles.curve

Modelling functions for curves.

---

### profiles.foil

Modelling functions for 2D "foils" (geometric shapes formed by overlapping circles) such as trefoils, quatrefoils, cinquefoils, etc.

#### cinquefoil(opts)

Builds a cinquefoil outline.

#### octofoil(opts)

Builds an octofoil outline.

#### quatrefoil(opts)

Builds a quatrefoil outline.

#### sexfoil(opts)

Builds a sexfoil outline.

#### trefoil(opts)

Builds a trefoil outline.

---

### profiles.rectFrame

Modelling functions for rectangular frames with various corner options.

---

### profiles.shapes

Modelling functions for various basic shapes.

---

### profiles.shapes.ellipse

Modelling functions for various ellipses.

---

### profiles.shapes.rectangle

Modelling functions for various rectangles.

---

### profiles.shapes.square

Modelling functions for various squares.

---

### profiles.shapes.triangle

Modelling functions for various triangles.

---

<br/>

### COMPONENTS

Modelling functions that generate 3D geometries.

---

### components.arch

Modelling functions for 3D arches. Input 2D profiles must be centred at [0, 0, 0].

#### onePtArch(opts, geomProfile)

Builds a one-centre (semicircular) arch using a given 2d cross-section profile.

#### twoPtArch(opts, geomProfile)

Builds a two-centre pointed arch using a given 2d cross-section profile.

---

### components.foil

Modelling functions for 3D "foils" (geometric shapes formed by overlapping circles) such as trefoils, quatrefoils, cinquefoils, etc. Input 2D profiles must be centred at [0, 0, 0].

#### cinquefoil(opts, geomProfile)

Builds a cinquefoil opening using a given 2d cross-section profile.

#### octofoil(opts, geomProfile)

Builds an octofoil opening using a given 2d cross-section profile.

#### quatrefoil(opts, geomProfile)

Builds a quatrefoil opening using a given 2d cross-section profile.

#### sexfoil(opts, geomProfile)

Builds a sexfoil opening using a given 2d cross-section profile.

#### trefoil(opts, geomProfile)

Builds a trefoil opening using a given 2d cross-section profile.

---

<br/>

### UTILS

Various utility helpers, mainly for the final modelling output.

---

### utils.colors

A set of named colour presets and their translucent versions. Original color palette from Material Design (`https://www.google.com/design/spec/style/color.html`)

---

### utils.layout

Utilities for arranging sets of 2D/3D geometries into various layouts, with additional options for rendering text labels and descriptions.

#### addToLayout(opts, geom)

Adds element to layout

---

### utils.palette

Collections of colour presets grouped into palettes.
