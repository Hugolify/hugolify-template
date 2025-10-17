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
  