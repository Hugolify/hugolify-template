/* eslint-disable no-undef */

/**
 * PostCSS config — hugolify-theme-bootstrap
 *
 * Used by Hugo via:
 *   css:
 *     postcss: "postcss/bootstrap"
 *
 * @import resolution is handled natively by Hugo (inlineImports: true in css.html).
 * PurgeCSS requires hugo_stats.json — add to hugo.yaml:
 *   build:
 *     writeStats: true
 *
 * Install: npm install -D @fullhuman/postcss-purgecss autoprefixer
 */
module.exports = {
  plugins: {
    autoprefixer: {},
    '@fullhuman/postcss-purgecss': {
      mode: 'all',
      content: ['./hugo_stats.json'],
      dynamicAttributes: [
        'aria-current',
        'aria-hidden',
        'aria-expanded',
        'href',
        'role',
        'type'
      ],
      safelist: {
        standard: [
          'show',
          'showing',
          'hide',
          'fade',
          /-backdrop$/,
          /^is-/,
          /^splide_/
        ],
        deep: [
          /^tobii/
        ]
      },
      defaultExtractor: (content) => {
        let els = JSON.parse(content).htmlElements;
        els = els.tags.concat(els.classes);
        return els;
      }
    }
  }
};
