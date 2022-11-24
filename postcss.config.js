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
                    /[target=_blank]/,
                    'show',
                    'fade',
                    /-backdrop$/,
                    /^is-/,
                    /^has-/,
                    /^js-/
                ],
                deep: [
                    /class*=block-/
                ]
            },
            options: {
                defaultExtractor: (content) => {
                    let els = JSON.parse(content).htmlElements;
                    els = els.tags.concat(els.classes, els.ids);
                    return els;
                }
            }
        }
    }
};