/* eslint-disable no-undef */

/**
 * PostCSS config — hugolify-theme-design-system
 *
 * Used by Hugo via:
 *   css:
 *     postcss: "postcss/design-system"
 *
 * Install: hugo mod get && hugo mod npm pack && yarn install
 */
module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-custom-media': {},
    autoprefixer: {},
  }
};
