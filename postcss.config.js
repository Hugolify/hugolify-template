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
            safelist: {
                standard: [
                    'show',
                    'fade',
                    /-backdrop$/,
                    /^is-/,
                    /^has-/,
                    /^js-/
                ],
                greedy: [
                    /^aria-current$/,
                    /^role$/
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