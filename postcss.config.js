/* eslint-disable no-undef */
module.exports = {
  plugins: {
    autoprefixer: {},
    cssnano: {
      preset: 'default'
    },
    '@fullhuman/postcss-purgecss': {
      mode: 'all',
      content: ['./hugo_stats.json'],
      dynamicAttributes: ['aria-current', 'href', 'role'],
      safelist: {
        standard: [
          'show',
          'fade',
          /-backdrop$/,
          /^is-/,
          /^has-/,
          /^js-/,
          /^[href^="#"]/,
          /^[href^="mailto"]/
        ],
        deep: [/^tobii/]
      },
      defaultExtractor: (content) => {
        let els = JSON.parse(content).htmlElements;
        els = els.tags.concat(els.classes);
        return els;
      }
    }
  }
};
